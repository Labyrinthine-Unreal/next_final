import { ChakraProvider, Box } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React, { Children } from "react";
import "@styles/reset.css"
import store from "@src/redux/store";
import { Provider } from "react-redux";
import Layout from "@components/navbars/Layout"
import Footer from "@components/navbars/Footer"
import theme from '@components/theme.fonts'
import { createClient, configureChains, } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { mainnet, goerli } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WagmiConfig } from 'wagmi'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

const { provider, webSocketProvider, chains } = configureChains(
  [mainnet, goerli],
  [
    // alchemyProvider({ apiKey: 'hu9KmpMxud_8q6Tlskrt42zOpiGy-9xN' }),
    infuraProvider({ apiKey: '5c9cb0b35a2742659dec6fc7680c16c4' }),
    // publicProvider()
  ],
  // { targetQuorum: 2 },
)

// const client = createClient({
//   provider,
//   autoConnect: true,
//   webSocketProvider,
// })
const client = createClient({
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  // storage: createStorage({ storage: window.localStorage }),
  // logger: {
  //   warn: (message) => logWarn(message),
  // },
})
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThirdwebProvider desiredChainId={activeChainId}>

        <WagmiConfig client={client}>


          <ChakraProvider theme={theme}>
            <React.StrictMode />
            {/* <MoralisProvider appId="001" serverUrl="http://localhost:1337/server"> */}
            <MoralisProvider appId="ny6Iude7WFwg2QaZtvDK7zQC81e9uKRIeaCkFNxM" serverUrl="https://htogiwbd7il5.usemoralis.com:2053/server">

            {/* <MoralisProvider appId={process.env.REACT_APP_APPLICATION_ID ?? ''} serverUrl={process.env.REACT_SERVER_URL ?? ''}> */}

            <Box>
              <Layout>
                <Box maxW="1000" align="center" py={20}>
                  <Box textAlign="left">
                    <Component {...pageProps} />
                  </Box>
                </Box>
              </Layout>
            </Box>
            </MoralisProvider>
          </ChakraProvider>
    // </WagmiConfig>
      </ThirdwebProvider>
    </Provider>


  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
