import { useToast, Center,NumberInputStepper, Button, Box, Spacer, NumberIncrementStepper, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import marketABI from "../components/ABIs/marketABI"
import { NFTBalance } from "web3uikit";
import Card from 'react-bootstrap/Card';

const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function TaurosList() {

    const [price, setprice] = useState(1)
    const [tokenId, setTokenId] = useState(0)
    const [contractAddress, setContractAddress] = useState("")
    const handleChange = (value) => setprice(value)
    const handleChangeID = (value) => setTokenId(value)

    const toast = useToast()

    const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    // const [value, setValue] = useControllableState({ defaultValue: 1 })

    const listings = {
        contractAddress: "0x1619Bc10F166C6A6Fd38e7aD8045d7aA6547D044",
        functionName: "listings",
        abi: marketABI,
        params: {
            price: price,
            contractAddr: contractAddress,
            tokenId: tokenId,
        }
    };

    // const message = await Moralis.executeFunction(PRICE);

    useEffect(() => {
        if (isAuthenticated) {

        }

    }, [isAuthenticated])

    async function _listItem() {
        let options = {
            contractAddress: '0x1619Bc10F166C6A6Fd38e7aD8045d7aA6547D044',
            functionName: 'addListing',
            abi: marketABI,
            //   msgValue: 
            //   await Moralis.executeFunction(PRICE) * price,
            //   Moralis.Units.ETH("0.00000000005")* price,
            //       Moralis.Units.ETH("0.08")
            params: {
                price: price,
                contractAddr: contractAddress,
                tokenId: tokenId,
            }
        }

        // possibly check for if user is authenticated and set
        // await Moralis.enableWeb3();
        // if not
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
                toast({
                    title: 'Listed Successful',
                    description: "Item has been listed",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                console.log("Item Listed successful");
            },
            onError: (error) => {
                toast({
                    title: 'Listing Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
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
            <Center>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ipfs.io/ipfs/QmRZv2uTXKEnjghLGeMp2x8UY6x3sx3tfjDd5vyu3SBzBS?filename=gallery.png" />
                <Card.Body>
                    <Card.Title>List NFT for Sale</Card.Title>

                    <Box fontSize="xl" fontWeight="bold" align="right">
                        <form className={styles.btn} onSubmit={async e => {
                            e.preventDefault()
                        }}>
                            <FormControl my="4" maxW="210" minW="210">
                                <FormLabel htmlFor="price" textAlign="right">
                                    set contract address you wish to list
                                </FormLabel>
                                <Input onChange={(e) => setContractAddress(e.target.value)} />

                                <FormLabel htmlFor="price" textAlign="right">
                                    set Price
                                </FormLabel>
                                <NumberInput step={100000000000000000} min={1} max={100000000000000000000} defaultValue={0} onChange={handleChange} allowMouseWheel>
                                    <NumberInputField id="price" value={price} bg="gray.200" boxShadow="lg" />
                                    <NumberInputStepper bg="teal.300">
                                        <NumberIncrementStepper borderLeft="none" />
                                        <Spacer />
                                        <NumberDecrementStepper borderLeft="none" />
                                    </NumberInputStepper>
                                </NumberInput>

                                <FormLabel htmlFor="tokenId" textAlign="right">
                                    set tokenID from Contract
                                </FormLabel>
                                <NumberInput step={1} min={0} max={10} defaultValue={0} onChange={handleChangeID} allowMouseWheel>
                                    <NumberInputField id="tokenId" value={tokenId} bg="gray.200" boxShadow="lg" />
                                    <NumberInputStepper bg="teal.300">
                                        <NumberIncrementStepper borderLeft="none" />
                                        <Spacer />
                                        <NumberDecrementStepper borderLeft="none" />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <Spacer />
                            <Button
                                color="white"
                                _hover={{ bg: "teal.400" }}
                                rounded="xl"
                                onClick={() => {
                                    if (isAuthenticated) { _listItem(); }
                                }}>
                                List NFT from TaurosDAO
                            </Button>

                        </form>
                    </Box>
                </Card.Body>
            </Card>
            </Center>
            <NFTBalance
                address="0x2b776B6418A7aE859C5e630aFa3FB59E82b49fa8"
                chain="eth"
            />
        </CustomContainer>

    )
}
