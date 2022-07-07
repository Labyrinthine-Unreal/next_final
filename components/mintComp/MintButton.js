import { Divider, SimpleGrid, useToast, Flex, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, NumberInput, Link, Button, Box, Tabs, TabPanel, TabList, Tab, TabPanels, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import { useWeb3Transfer, useMoralisWeb3Api, useERC20Balances, useNFTBalances, useApiContract } from "react-moralis";
import Moralis from "moralis";
import ABI from "../data/InputsABI"


export default function MintButtonEstates({ user }) {

    const [amount, setAmount] = useState(0)
    const [receiver, setReceiver] = useState('')
    const handleChange = (value) => setAmount(value)
    const toast = useToast()
    const { fetch, isFetching } = useApiContract({
        chain: "rinkeby",
        address: "0x515f70BDad45169e92e1Cb16584BceD3C336c5ec",
        function_name: "mintNFTs",
        abi: ABI,
        params: { _mintNFTs: 1 },
    })

    return (
        <Text fontSize="xl" fontWeight="bold">
            <form onSubmit={async e => {
                e.preventDefault()
                await Moralis.enableWeb3()
                // fetch({
                //     onSuccess: () => {
                //         toast({
                //             title: 'Eth Successfully sent',
                //             description:"NFT is now in your wallet",
                //             status: "Success",
                //             duration: 9000,
                //             isClosable: true
                //         })
                //         setReceiver(user.get('ethAddress'))
                //         },
                //     onError: (error) => {
                //         toast({
                //             title: 'Error',
                //             description:error,
                //             status: "error",
                //             duration: '9000',
                //             isClosable: true
                //         }) 
                //     }
                // })
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

                <Button
                    colorScheme='green'
                    borderRadius='full'
                    px={4}
                    h={7}
                    type="submit"
                    disabled={isFetching}
                >
                    Mint
                </Button>
            </form>
        </Text>

    )
}