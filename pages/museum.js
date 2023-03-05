import React, { Component, Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useEffect, useState, useRef } from "react";
import styles from "@styles/MintButton.module.css";
import { useToast, NumberInputStepper, Box, Button, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import Museum from "@components/Galleries/Gallerias";
export default function Galleria() {

    return (

        // <Fragment>
        <Museum />   
        // </Fragment>

    );

}
// }

