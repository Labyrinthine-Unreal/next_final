import React, { Component, Fragment } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "@chakra-ui/react";
// import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useEffect, useState, useRef } from "react";
import { Box, Heading, Spacer, Text, Flex, SimpleGrid } from '@chakra-ui/react'

// import "./BetaPage.css";

export default function MuseumPage() {
    const { unityProvider, isLoaded, requestFullscreen, loadingProgression } = useUnityContext({
        loaderUrl: "unity/build/WebGL/WebGL/Build/New folder.loader.js",
        dataUrl: "unity/build/WebGL/WebGL/Build/New folder.data",
        frameworkUrl: "unity/build/WebGL/WebGL/Build/New folder.framework.js",
        codeUrl: "unity/build/WebGL/WebGL/Build/New folder.wasm",
    });

    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

    const loadingPercentage = Math.round(loadingProgression * 100);
    //   const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();

    //   useEffect(() => {
    //     if (isAuthenticated) {

    //     }

    //   }, [isAuthenticated])

    //   if (isAuthenticated){
    return (
        <Fragment>
            <Box pt={10} align="center">
                {isLoaded === false && (

                    <div className="loading-overlay">
                        <p>Loading... ({loadingPercentage}%)</p>
                    </div>
                )}
                <button onClick={handleClickEnterFullscreen}><Text>Enter <br />Fullscreen</Text></button>
                <Spacer /> <br />
                <Unity className="unity" unityProvider={unityProvider} style={{ width: 900, height: 600 }} />
            </Box>
        </Fragment>
    );
}
// }

