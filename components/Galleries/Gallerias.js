import React, { Component, Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useEffect, useState, useRef } from "react";
import styles from "@styles/MintButton.module.css";
import { useToast, NumberInputStepper, Box, Button, Spacer, NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"

export default function Museum() {


    const { unityProvider, isLoaded, requestFullscreen, loadingProgression } = useUnityContext({
        loaderUrl: "unity/build/WebGL/WebGL/Build/MuseumGL.loader.js",
        dataUrl: "unity/build/WebGL/WebGL/Build/MuseumGL.data",
        frameworkUrl: "/unity/build/WebGL/WebGL/Build/MuseumGL.framework.js",
        codeUrl: "unity/build/WebGL/WebGL/Build/MuseumGL.wasm",
    });


    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

    const loadingPercentage = Math.round(loadingProgression * 100);
    return (

        // <Fragment>
            <Box pt={10} align="center">
                {isLoaded === false && (

                    <div className="loading-overlay">
                        <p>Loading... ({loadingPercentage}%)</p>
                    </div>
                )}        
                <Button onClick={handleClickEnterFullscreen}><Text>Enter <br />Fullscreen</Text></Button>
                <Spacer /> <br />
                <Unity className="unity" unityProvider={unityProvider} style={{ width: 900, height: 600 }} />
            </Box>
        // </Fragment>

    );

}
// }

