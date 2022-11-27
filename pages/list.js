import { useToast, Center, NumberInputStepper, Button, Box, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import { useEffect, useState, } from "react";
import CustomContainer from "@components/CustomContainer";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import styles from "@styles/MintButton.module.css"
import marketABI from "../components/ABIs/marketABI"
import { NFTBalance } from "web3uikit";
import Card from 'react-bootstrap/Card';
import TaurosList from '@components/TaurosList'
const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

export default function Market() {

    return (
        <CustomContainer>
            <TaurosList />
        </CustomContainer>
    )
}
