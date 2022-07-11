import { ChakraProvider, Box } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React from "react";
import "@/styles/reset.css"
import store from "@/src/redux/store";
import { Provider } from "react-redux";
import Layout from "@/components/navbars/Layout"

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <ChakraProvider>
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID}  serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
          <Box bg="gray.100">
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
