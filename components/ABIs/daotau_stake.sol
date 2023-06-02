//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
/*
.____          ___.                 .__        __  .__    .__                 ____ ___                           .__
|    |   _____ \_ |__ ___.__._______|__| _____/  |_|  |__ |__| ____   ____   |    |   \___________   ____ _____  |  |
|    |   \__  \ | __ <   |  |\_  __ \  |/    \   __\  |  \|  |/    \_/ __ \  |    |   /    \_  __ \_/ __ \\__  \ |  |
|    |___ / __ \| \_\ \___  | |  | \/  |   |  \  | |   Y  \  |   |  \  ___/  |    |  /   |  \  | \/\  ___/ / __ \|  |__
|_______ (____  /___  / ____| |__|  |__|___|  /__| |___|  /__|___|  /\___  > |______/|___|  /__|    \___  >____  /____/
        \/    \/    \/\/                    \/          \/        \/     \/               \/            \/     \/
*/

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";


contract TaurosStaking is ERC20, ERC721Holder,ERC20Burnable,Ownable,Pausable, ReentrancyGuard,ERC20Permit, ERC20Votes,AccessControl {
    
    IERC20 public _token;
    IERC721 public _DAO;
    
    // Staker info
    struct Staker {
        uint256 deposited;

        // Last time of details update for Deposit
        uint256 timeOfLastUpdate;

        uint256 unclaimedRewards;
    }


    struct StakeDAO {
        uint256 tokenId;
        uint256 timestamp;
    }

    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint vote;   // index of the voted proposal
    }

    struct Proposal {
        // If you can limit the length to a certain number of bytes, 
        // always use one of bytes1 to bytes32 because they are much cheaper
        string name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    address public chairperson;

    mapping(address => Voter) public voters;
    

    Proposal[] public proposals;


    using SafeMath for uint256;

    uint256 public s_maxSupply = 55555555 * 10 ** uint256(decimals());
    // Rewards per hour. A fraction calculated as x/10.000.000 to get the percentage
    uint256 public rewardsPerHour =  700000000000000000; // 0.05/hr 
    // Minimum amount to stake
    uint256 public minStake = 1111;

    uint256 public minersReward = 1000000000;
    uint256 public usersReward = 1000000000;
    uint256 public recip2Reward = 1000000000;

    // Compounding frequency limit in seconds
    // uint256 public compoundFreq = 8600; //1200 seconds
    uint256 public compoundFreq = 43200; //12 hours


    // Mapping of address to Staker info
    mapping(address => Staker) internal stakers;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");


    // map staker address to stake details
    // map staker address to stake details
    mapping(uint256 => address) public tokenOwnerOf;
    mapping(uint256 => uint256) public tokenStakedAt;
    mapping(uint256 => bool) public isStaked;

    // Constructor function
    constructor(string memory _name, string memory _symbol,string [] memory proposalNames, address _DAOcontract)
        ERC20(_name, _symbol)
        ERC20Permit("Bored Circles Governance") 
        
    {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        _mint(msg.sender, s_maxSupply);
        _token = IERC20(address(this));
        _DAO = IERC721(_DAOcontract);

        for (uint i = 0; i < proposalNames.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }

    }


    function DAOstake(uint256 tokenId) external {
        _DAO.safeTransferFrom(msg.sender, address(this), tokenId);
        _mint(msg.sender,2000);
        tokenOwnerOf[tokenId] = msg.sender;
        tokenStakedAt[tokenId] = block.timestamp;
        isStaked[tokenId] = true;
        _mintMinerReward();
    }

    function DAOunstake(uint256 tokenId) external {
        // uint timeElapsed = block.timestamp - tokenStakedAt[tokenId];
        // uint minimumTime = 7 days;
        require(tokenOwnerOf[tokenId] == msg.sender, "You can't unstake because you are not the owner");
        // require(timeElapsed >= minimumTime, "You need to stake for at least 7 days");
        _DAO.transferFrom(address(this), msg.sender, tokenId);
        delete tokenOwnerOf[tokenId];
        delete tokenStakedAt[tokenId];
        delete isStaked[tokenId];
        _mintMinerReward();
    }




    function propose(string [] memory proposalNames, uint256 _amount) public {
         _token.approve(msg.sender, _amount);
         _token.transferFrom(msg.sender, address(this), _amount);
        for (uint i = 0; i < proposalNames.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
        _mintMinerReward();
    }

    function setMinersReward(uint256 _minersReward) public onlyOwner{
        minersReward = _minersReward;
    }
    
    function setUsersReward(uint256 _usersReward) public onlyOwner{
        usersReward = _usersReward;
    }

    function setRecip2Reward(uint256 _recip2Reward) public onlyOwner{
        recip2Reward = _recip2Reward;
    }

// Mint newly created CIR to Miner, CIR Treasury, and user interacting with contract
    function _mintMinerReward() internal {
        _mint(block.coinbase, minersReward);
        _mint(0x26451fb8544613382934F5E761f94ac162bcD9c7,recip2Reward);
        _mint(msg.sender,usersReward);
    }


    function setRewardsPerHour(uint256 _rewardsPerHour) public onlyOwner {
        rewardsPerHour = _rewardsPerHour;
        rewardsPerHour = rewardsPerHour ;
    }

    function setMinStake(uint256 _minStake) public onlyOwner {
        minStake = _minStake;
    }
    // If address has no Staker struct, initiate one. If address already was a stake,
    // calculate the rewards and add them to unclaimedRewards, reset the last time of
    // deposit and then add _amount to the already deposited amount.
    
    function deposit(uint256 _amount) external nonReentrant {
        require(_amount >= minStake, "Amount smaller than minimimum deposit");
        require(
            balanceOf(msg.sender) >= _amount,
            "Can't stake more than you own"
        );
        if (stakers[msg.sender].deposited == 0) {
            stakers[msg.sender].deposited = _amount;
            stakers[msg.sender].timeOfLastUpdate = block.timestamp;
            stakers[msg.sender].unclaimedRewards = 0;
        } else {
            uint256 rewards = calculateRewards(msg.sender);
            stakers[msg.sender].unclaimedRewards += rewards;
            stakers[msg.sender].deposited += _amount;
            stakers[msg.sender].timeOfLastUpdate = block.timestamp;
        }
        _burn(msg.sender, _amount);
        _mintMinerReward();
    }

    // Compound the rewards and reset the last time of update for deposit info
    function stakeRewards() external nonReentrant {
        require(stakers[msg.sender].deposited > 0, "You have no deposit");
        require(
            compoundRewardsTimer(msg.sender) == 0,
            "Tried to compound rewards too soon"
        );
        uint256 rewards = calculateRewards(msg.sender) +
            stakers[msg.sender].unclaimedRewards;
        stakers[msg.sender].unclaimedRewards = 0;
        stakers[msg.sender].deposited += rewards;
        stakers[msg.sender].timeOfLastUpdate = block.timestamp;
        _mintMinerReward();
    }

    // Mints rewards for user
    function claimRewards() external nonReentrant {
        uint256 rewards = calculateRewards(msg.sender) +
            stakers[msg.sender].unclaimedRewards;
        require(rewards > 0, "You have no rewards");
        stakers[msg.sender].unclaimedRewards = 0;
        stakers[msg.sender].timeOfLastUpdate = block.timestamp;
        _mint(msg.sender, rewards);
        _mintMinerReward();
    }

    // Withdraw specified amount of staked tokens
    function withdraw(uint256 _amount) external nonReentrant {
        require(
            stakers[msg.sender].deposited >= _amount,
            "Can't withdraw more than you have"
        );
        uint256 _rewards = calculateRewards(msg.sender);
        stakers[msg.sender].deposited -= _amount;
        stakers[msg.sender].timeOfLastUpdate = block.timestamp;
        stakers[msg.sender].unclaimedRewards = _rewards;
        _mint(msg.sender, _amount);
        _mintMinerReward();
    }

    // Withdraw all stake and rewards and mints them to the msg.sender
    function withdrawAll() external nonReentrant {
        require(stakers[msg.sender].deposited > 0, "You have no deposit");
        uint256 _rewards = calculateRewards(msg.sender) +
            stakers[msg.sender].unclaimedRewards;
        uint256 _deposit = stakers[msg.sender].deposited;
        stakers[msg.sender].deposited = 0;
        stakers[msg.sender].timeOfLastUpdate = 0;
        uint256 _amount = _rewards + _deposit;
        _mint(msg.sender, _amount);
        _mintMinerReward();
    }

    // Function useful for front-end that returns user stake and rewards by address
    function getDepositInfo(address _user)
        public
        view
        returns (uint256 _stake, uint256 _rewards)
    {
        _stake = stakers[_user].deposited;
        _rewards =
            calculateRewards(_user) +
            stakers[msg.sender].unclaimedRewards;
        return (_stake, _rewards);
    }

    // Utility function that returns the timer for restaking rewards
    function compoundRewardsTimer(address _user)
        public
        view
        returns (uint256 _timer)
    {
        if (stakers[_user].timeOfLastUpdate + compoundFreq <= block.timestamp) {
            return 0;
        } else {
            return
                (stakers[_user].timeOfLastUpdate + compoundFreq) -
                block.timestamp;
        }
    }

    // Calculate the rewards since the last update on Deposit info
    function calculateRewards(address _staker)
        internal
        view
        returns (uint256 rewards)
    {
        return (((((block.timestamp - stakers[_staker].timeOfLastUpdate) *
            stakers[_staker].deposited) * rewardsPerHour) / 3600) / 10000000);
    }


    // Calculate the rewards since the last update on Deposit info
    function calculateRewardsUI(address _staker)
        public
        view
        returns (uint256 rewards)
    {
        return (((((block.timestamp - stakers[_staker].timeOfLastUpdate) *
            stakers[_staker].deposited) * rewardsPerHour) / 3600) / 10000000);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }


    function reward_mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
    /** 
     * @dev Give 'voter' the right to vote on this ballot. May only be called by 'chairperson'.
     * @param voter address of voter
     */
    function giveRightToVote(address voter) public {
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(
            !voters[voter].voted,
            "The voter already voted."
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    /**
     * @dev Delegate your vote to the voter 'to'.
     * @param to address to which vote is delegated
     */
    function delegate(address to) public virtual override {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You already voted.");
        require(to != msg.sender, "Self-delegation is disallowed.");

        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender, "Found loop in delegation.");
        }
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegate_ = voters[to];
        if (delegate_.voted) {
            // If the delegate already voted,
            // directly add to the number of votes
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            // If the delegate did not vote yet,
            // add to her weight.
            delegate_.weight += sender.weight;
        }
    }

    /**
     * @dev Give your vote (including votes delegated to you) to proposal 'proposals[proposal].name'.
     * @param proposal index of proposal in the proposals array
     */
    function vote(uint proposal,  uint256 _amount) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal;
        
        // If 'proposal' is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += sender.weight;
        _token.transferFrom(msg.sender, address(this), _amount);
        _mintMinerReward();
        
        
    }

    /** 
     * @dev Computes the winning proposal taking all previous votes into account.
     * @return winningProposal_ index of winning proposal in the proposals array
     */
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    /** 
     * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
     * @return winnerName_ the name of the winner
     */
    function winnerName() public view
            returns (string memory winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }

}