import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react"
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
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID}  serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
          <Grid 
            templateAreas={`"header header"
                          "nav main"
                          "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            overflow="auto"
            gap='1'
            bgGradient="linear(to-br, teal.400,purple.300)">
            <GridItem pl="2" area={"header"}><HeaderSignIn /></GridItem>
            <GridItem pl="2" area={"nav"}><Sidebar /></GridItem>
            <GridItem pl="2" area={"main"}><Component {...pageProps} /></GridItem>
            <GridItem pl="2" area={"footer"}><Footer /></GridItem>
          </Grid>
        </MoralisProvider>
      </ChakraProvider>
    </Provider>
  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
