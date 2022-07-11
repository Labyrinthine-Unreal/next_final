import { ChakraProvider, Box } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React from "react";
import "@/styles/reset.css"
import store from "@/src/redux/store";
import { Provider } from "react-redux";
import HeaderSignIn from "@/components/navbars/HeaderSignIn"
import Sidebar from "@/components/navbars/Sidebar"
import Footer from "@/components/Footer"

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <ChakraProvider>
        <MoralisProvider appId="dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE"  serverUrl="https://d8tdshnwaepb.usemoralis.com:2053/server">
          <Box bgGradient="linear(to-br, teal.400,purple.300)">
            <HeaderSignIn />
            <Sidebar />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </MoralisProvider>
      </ChakraProvider>
    </Provider>
  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
