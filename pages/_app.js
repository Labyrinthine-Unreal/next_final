import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React from "react";
import "@/styles/reset.css"
import store from "@/src/redux/store";
import { Provider } from "react-redux";
import Layout from "@/components/navbars/Layout"
import { createBreakpoints } from "@chakra-ui/theme-tools";

const override = {
  breakpoints: createBreakpoints({
    sm: "10rem",
    md: "20rem",
    lg: "30rem",
    xl: "40rem",
    myCustomOne: "50rem"
  })
};

const theme = extendTheme(override);

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID}  serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
          <Box bgGradient="linear(to-br, teal.400,purple.300)">
            <Layout>
            <Component {...pageProps} />
            </Layout>
          </Box>
        </MoralisProvider>
      </ChakraProvider>
    </Provider>
  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
