import { ChakraProvider, Box } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React, { Children } from "react";
import "@styles/reset.css"
import store from "@src/redux/store";
import { Provider } from "react-redux";
import Layout from "@components/navbars/Layout"
import Footer from "@components/navbars/Footer"
import theme from '@components/theme.fonts'

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <MoralisProvider appId="dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE"  serverUrl="https://d8tdshnwaepb.usemoralis.com:2053/server">
          <Box>
            <Layout>
            <Box align="center" py={20}>
              <Box maxW="900" textAlign="left">
                <Component {...pageProps} />
              </Box>
            </Box>
            <Footer />
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
