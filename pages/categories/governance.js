// src/pages/categories/forum.js
import TopicList from '@root/components/topicComponents/TopicList';
import faunadb from 'faunadb';
import React from 'react';
import { useAuth } from '@clerk/nextjs';
// import { ClerkProvider, useUser, SignIn, SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import withCategoryStyles from '@root/components/cards/withCategoryStyles';
import { useRouter } from 'next/router';
import { Heading,Center } from '@chakra-ui/react';
import { useAccount, useEnsAvatar, useDisconnect, useConnect, useContractRead} from 'wagmi'
import Header from '@components/Header';
import Stake from '@components/mint/stakeDAO';
import Unstake from '@components/mint/DAOunstake';
import STAU from '@components/mint/stake20';
import WTHAll from '@components/mint/withdrawAll';
import UI from '@components/mint/erc20balance';
import CR from '@components/mint/claimRewards';
import { Spacer } from '@chakra-ui/react';
import depInfo from '@components/mint/depositInfo';
import CTAU from '@components/mint/compoundTAU';
import NukaCarousel from "nuka-carousel";
const Forum = () => {
  // const secret = Clerk.session.getToken({ template: 'fauna' })
  // console.log(secret)
  const client = new faunadb.Client({ secret:"fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client)
  // const { isLoaded } = useAuth();
  // const { user } = useUser()
  const router = useRouter();

  // if (!isLoaded || !address) {
  //   return null;
  // }
  const { address,isConnected } = useAccount()

  const {data, isError, isLoading,isSuccess}= useContractRead({
    address: '0x9D591b482B162077f44169D6cD1b85bb4f4f80A2',
    abi: [
        {
          name: 'balanceOf',
          type: 'function',
          stateMutability: 'view',
          inputs:
          [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
        ],
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
        ],
        },
      ],
    functionName: "balanceOf",
    args: [address]
  })

  const {Id}= useContractRead({
    address: '0xB9FB937CBFcC42B0587e75a05FCD38f243D6ee1a',
    abi: [
        {
          name: 'userStakeInfo',
          type: 'function',
          stateMutability: 'view',
          inputs:
          [
            {
              internalType: "address",
              name: "_user",
              type: "address"
            }
        ],
          outputs: [
            {
              internalType: "uint256",
              name: "_tokenIds",
              type: "uint256"
            }
        ],
        },
      ],
    functionName: "userStakeInfo",
    args: [address]
  })

  console.log(isError)
  console.log(isSuccess)
   console.log(data)
  const handleNewTopic = () => {
    router.push('/categories/create-new-topic');
  };
  
  // if (!isConnected && data<1)
  // return (
  //   <>
  //   <Header />
  //   <Center>
  //   <h1>Please connect wallet to access Governance</h1>
  //   </Center>
  //   </>
  // );

  // if (isConnected && data<1)
  // return (
  //   <>
  //   <Header />
  //   <Center>
  //   <h1>Must own One TaurosDAO to Propose and Vote</h1>
  //   </Center>
  //   </>
  // );

  // if (isConnected && data>=1) 
  return (
    
    
    <div>
       <Header />
      <Center>
      <Heading>TaurosDAO NFT staking</Heading>
      <br />
      <Spacer />
      {/* <UI />  */}
      <br />
      <Spacer />
      <Heading>DAO Balance: {String(data)}</Heading>
      </Center>
      <NukaCarousel cellAlign="center" slidesToShow={1} slidesToScroll={1} cellSpacing={50}>
      <Stake />
      <Unstake />
      <depInfo />
      </NukaCarousel>

      {/* <UI /> <Spacer />
      <Heading>DAO Balance: {String(data)}</Heading> */}
      {/* <depInfo /> */}
      <NukaCarousel cellAlign="center" slidesToShow={1} slidesToScroll={1} cellSpacing={50}>
      <STAU />
      <CR />
      <WTHAll />
      <CTAU />
      </NukaCarousel>
      
      {/* <Header /> */}
      <Center>
      {/* <Heading>DAO Balance: {String(data)}</Heading> */}
      {/* <Spacer/><br /> */}
      {/* DAO IDs Staked {Id} */}
      {/* <STAU /> */}
      {/* <WTHAll /> */}
      
      {/* <CR /> */}
      </Center>
      <h1>Proposals</h1>
      <button onClick={handleNewTopic}>Start a New Proposal</button>
      <TopicList/>
    </div>
  );
};

export default withCategoryStyles(Forum);