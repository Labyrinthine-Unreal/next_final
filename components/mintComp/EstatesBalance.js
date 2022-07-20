import { useToast, Box, Text } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { Button } from 'web3uikit';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/EstatesBalanceBtn.module.css"
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
            contractAddress: '0xCEE74E08F23476E960F05472C821fc7cb80E51bc',
            functionName: 'balanceOf',
            abi: estatesABI,
            params: {
                owner: user.get('ethAddress'),
            }
        }
       
            let DAOoptions = {
                // msgValue: Moralis.Units.ETH("0.05"),
                contractAddress: '0x0C558b282c361C5f68848517e768e34e045c7936',
                functionName: 'balanceOf',
                abi: estatesABI,
                params: {
                    owner: user.get('ethAddress'),
                }
            }
        

        const bigInt = require("big-integer");
        const message = await Moralis.executeFunction(options)
        const message2 = await Moralis.executeFunction(DAOoptions)
        const q = new bigInt(message);
        const q2 = new bigInt(message2);
        const q3 = new bigInt(q2-q)
        console.log(q.toString());
        await Moralis.enableWeb3()
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
                toast({
                    title: 'Unclaimed Estates',
                    description: q2.toString(),
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
        <Box fontSize="xl" fontWeight="bold">
            <form className={styles.btn} onSubmit={async e => {
                e.preventDefault()
            }}>
                {/* TaurosDAO Estates Balance */}
                <Button variant="outline" onClick={() => {
                    if (isAuthenticated) { _EstatesBalance(); }
                }} text={"Unclaimed Estates"} theme={"primary"} />

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
