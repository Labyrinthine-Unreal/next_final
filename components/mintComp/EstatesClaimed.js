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
            setEstates("You are NOT authenticated");
        }

        if (isAuthenticated) {
            console.log("isAuthenticated");
            setEstates(<Progress size='xs' isIndeterminate />);

            async function setAmount() {
                let taurosAmount;
                let estatesAmount;

                let DAOoptions = {
                    contractAddress: '0x0C558b282c361C5f68848517e768e34e045c7936',
                    functionName: 'balanceOf',
                    abi: taurosABI,
                    params: {
                        owner: user.get('ethAddress'),
                    }
                }
                let estatesOtions = {
                    contractAddress: '0xc7fc72953489E3Cd79Eb833051EF9c3abE7A3910',
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
                    params: estatesOtions,
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
