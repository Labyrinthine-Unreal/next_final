import {Box, Progress} from "@chakra-ui/react"
import {useEffect, useState,} from "react";
import {useMoralis, useWeb3ExecuteFunction} from 'react-moralis';
import taurosABI from "@components/ABIs/taurosABI.json";
import estatesABI from "@components/ABIs/estatesABI";

export default function EstatesClaimed() {
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    let [balance, setEstates] = useState();

    useEffect(() => {
        console.log("useEffect");
        if (!isAuthenticated) {
            console.log("!isAuthenticated")
            if (Moralis.isWeb3Enabled()) Moralis.deactivateWeb3();
            setEstates("Sign in to check for free mint");
        }

        if (isAuthenticated) {
            console.log("isAuthenticated");
            setEstates(<Progress size='xs' isIndeterminate />);

            async function setAmount() {
                let taurosAmount;
                let estatesAmount;

                let DAOoptions = {
                    contractAddress: '0xBDE07DB4AB097EA0a7144DdF616126511fc6D2AA',
                    functionName: 'balanceOf',
                    abi: taurosABI,
                    params: {
                        owner: user.get('ethAddress'),
                    }
                }
                let estatesOptions = {
                    contractAddress: '0xf5D072526BBC7c312B7592FD9674600931A9e4D0',
                    functionName: 'balanceOf',
                    abi: estatesABI,
                    params: {
                        owner: user.get('ethAddress'),
                    }
                }
                // calling for the balance of TAUROS.
                await contractProcessor.fetch({
                    params: DAOoptions,
                    onSuccess: (results) => {
                        taurosAmount = parseInt(results.toString());
                    },
                    onError: (error) => {
                        console.log(error);
                    }
                });
                // calling for the balance of ESTATES.
                await contractProcessor.fetch({
                    params: estatesOptions,
                    onSuccess: (results) => {
                        estatesAmount = parseInt(results.toString());
                    },
                    onError: (error) => {
                        console.log(error);
                    }
                });
                setEstates((taurosAmount - estatesAmount).toString());
            }
            setTimeout(() => {
                setAmount();
            }, 3000);
        }
    }, [isAuthenticated]);

    return (
        <Box fontSize="xl" fontWeight="bold">
            {balance}
        </Box>
    )
}
