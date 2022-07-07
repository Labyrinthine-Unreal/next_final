import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React from "react";
import ReactDOM from "react-dom"
import "../src/styles/reset.css"
import store from "../src/redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
  <ChakraProvider>
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID}  serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
      <Component {...pageProps} />
    </MoralisProvider>
  </ChakraProvider>
  </Provider>
  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
