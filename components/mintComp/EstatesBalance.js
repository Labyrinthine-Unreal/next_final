import { useToast, NumberInputStepper, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"

// import taurosABI from "./ABIs/taurosABI.json";
import estatesABI from "../ABIs/estatesABI"

const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function EstatesBalance() {
    const [amount, setAmount] = useState(1)
    const handleChange = (value) => setAmount(value)
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const toast = useToast()

    useEffect(() => {
        if (isAuthenticated) {

        }

    }, [isAuthenticated])

    async function _EstatesBalance() {
        let options = {
            // msgValue: Moralis.Units.ETH("0.05"),
            contractAddress: '0x508Da3a39A4a48661Cc218Fa76dC1cabC09F3887',
            functionName: 'balanceOf',
            abi: estatesABI,
            params: {
                owner: user.get('ethAddress'),
            }
        }
        const bigInt = require("big-integer");
        const message = await Moralis.executeFunction(options)
        const q = new bigInt(message);
        console.log(q.toString());
        await Moralis.enableWeb3()
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
                toast({
                    title: 'TaurosDAO Estates Balance',
                    description: q.toString(),
                    status: 'success',
                    duration: 900000000,
                    isClosable: true,
                })
            },
            onError: (error) => {
                toast({
                    title: 'Failed...',
                    description: 'Please Sign In',
                    status: "error",
                    duration: '9000',
                    isClosable: true
                })
                console.log(error);
            }
        })
    }
    return (
        // <CustomContainer>
        <Box fontSize="xl" fontWeight="bold" align="right">
            <form className={styles.btn} onSubmit={async e => {
                e.preventDefault()
            }}>
                TaurosDAO Estates Balance
                <Button onClick={() => {
                    if (isAuthenticated) { _EstatesBalance(); }
                }} text={"TaurosDAO Estates Balance"} theme={"primary"} />

            </form>
        </Box>
        // </CustomContainer>
    )
}

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
