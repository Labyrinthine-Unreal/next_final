import { Container, SimpleGrid, Divider, useToast, Flex, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, NumberInput, Link, Box, Tabs, TabPanel, TabList, Tab, TabPanels, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { connect } from "@/src/redux/blockchain/blockchainActions"
// import { fetchData } from "@/src/redux/data/dataActions"
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import taurosABI from "../ABIs/taurosABI"
import CustomContainer from "@components/CustomContainer";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function MBT() {

  const [amount, setAmount] = useState(0)
  const handleChange = (value) => setAmount(value)
  const toast = useToast()

  const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  // const [value, setValue] = useControllableState({ defaultValue: 1 })
  useEffect(() => {
    if (isAuthenticated) {

    }

  }, [isAuthenticated])

  async function _mintTauros() {
    let options = {
      contractAddress: '0x7ed80F34Bf90Eff85423D88b7B827b75A51B6552',
      functionName: 'mintNFTs',
      abi: taurosABI,
      msgValue: Moralis.Units.ETH("0.05") * amount,
      params: {
        _count: amount,
      }
    }

    await Moralis.enableWeb3()
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        toast({
          title: 'Mint Successful',
          description: "Minted TaurosDAO Membership",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        console.log("Mint successful");
      },
      onError: (error) => {
        toast({
          title: 'Mint Failed.. Not enough Ether To Purchase TaurosDAO Membership',
          description: console.log(error),
          status: "error",
          duration: '9000',
          isClosable: true
        })
        console.log(error);
      }
    })
  }
  return (
    <CustomContainer>
      <Text fontSize="xl" fontWeight="bold">
        <form onSubmit={async e => {
          e.preventDefault()
        }}>
          <FormControl mt="4">
            <FormLabel htmlFor="amount">
              Amount to Mint
            </FormLabel>
            <NumberInput step={1} onChange={handleChange}>
              <NumberInputField id="amount" value={amount} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button onClick={() => {
            if (isAuthenticated) { _mintTauros(); }
          }} text={"Mint Taurus"} theme={"primary"} />

        </form>
      </Text>
    </CustomContainer>
  )
}
//   return (

//     <Button onClick={() => {
//       if (isAuthenticated) { _mintTauros(); }
//     }} text={"Mint Taurus"} theme={"primary"} />
//   );
// }

{/* Opensea button --> move to bottom of the page */ }
{/* <Container>
            <span>
                <Button
                  onClick={(e) => {
                    window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                  }}
                >
                  {CONFIG.MARKETPLACE}
                </Button>
            </span>          
          </Container>               */}
