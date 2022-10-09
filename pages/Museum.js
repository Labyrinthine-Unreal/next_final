import React, { Component } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "@chakra-ui/react";

// import "./BetaPage.css";

export default function MuseumPage() {
    const{ unityProvider, isLoaded, loadingProgression }  = useUnityContext({
        loaderUrl: "../public/unity/build/WebGL/WebGL/Build/UnityLoader.js",
        dataUrl: "../public/unity/build/WebGL/WebGL/Build/example.data.unityweb",
        frameworkUrl: "../public/unity/build/WebGL/WebGL/Build/example.wasm.framework.unityweb",
        codeUrl: "../public/unity/build/WebGL/WebGL/Build/example.wasm.code.unityweb",
      });
      const loadingPercentage = Math.round(loadingProgression * 100);

      return (
        <div className="container">
          {isLoaded === false && (
            // We'll conditionally render the loading overlay if the Unity
            // Application is not loaded.
            <div className="loading-overlay">
              <p>Loading... ({loadingPercentage}%)</p>
            </div>
          )}
          <Unity className="unity" unityProvider={unityProvider} style={{ width: 800, height: 600 }}/>
        </div>
      );
    }

