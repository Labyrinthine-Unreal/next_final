import {Box, Progress} from "@chakra-ui/react";
import {useEffect, useState,} from "react";
import {useMoralis, useWeb3ExecuteFunction} from 'react-moralis';
import estatesABI from "@components/ABIs/estatesABI";

export default function EstatesBalance() {
    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    let [balance, setEstates] = useState();

    useEffect(() => {

        if (!isAuthenticated) {
            if (Moralis.isWeb3Enabled()) Moralis.deactivateWeb3();
            setEstates("");
        }

        if (isAuthenticated) {
            setEstates(<Progress size='xs' isIndeterminate />);

            async function setAmount() {
                let estatesAmount;

                let estatesOptions = {
                    contractAddress: '0x075ba61CFA6437EF6531eE7beDEbCB0D18aa14C4',
                    functionName: 'balanceOf',
                    abi: estatesABI,
                    params: {
                        owner: user.get('ethAddress'),
                    }
                }
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
                setEstates(estatesAmount.toString());
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
