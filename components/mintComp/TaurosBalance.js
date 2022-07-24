import {Box, Progress} from "@chakra-ui/react";
import {useEffect, useState,} from "react";
import {useMoralis, useWeb3ExecuteFunction} from 'react-moralis';
import taurosABI from "@components/ABIs/taurosABI";

export default function TaurosBalance() {
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    let [balance, setTauros] = useState();

    useEffect(() => {

        if (!isAuthenticated) {
            if (Moralis.isWeb3Enabled()) Moralis.deactivateWeb3();
            setTauros("You are NOT authenticated");
        }

        if (isAuthenticated) {
            setTauros(<Progress size='xs' isIndeterminate />);

            async function setAmount() {
                let taurosAmount;

                let taurosOtions = {
                    contractAddress: '0x0D3F89E533E58cAE7D5D34368e6165869c856229',
                    functionName: 'balanceOf',
                    abi: taurosABI,
                    params: {
                        owner: user.get('ethAddress'),
                    }
                }
                // calling for the balance of TAUROS.
                await contractProcessor.fetch({
                    params: taurosOtions,
                    onSuccess: (results) => {
                        taurosAmount = parseInt(results.toString());
                    },
                    onError: (error) => {
                        console.log(error);
                    }
                });
                setTauros(taurosAmount.toString());
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
