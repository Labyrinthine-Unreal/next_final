import { ChakraProvider, Box } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import React, { Children } from "react";
// import "@styles/reset.css"
import store from "@src/redux/store";
import { Provider } from "react-redux";
// import Layout from "@components/navbars/Layout"
import Footer from "@components/navbars/Footer"
// import theme from '@components/theme.fonts'
import { createClient, configureChains, } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { mainnet, goerli,sepolia } from 'wagmi/chains'
import { WagmiConfig } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { extendTheme } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRouter } from 'next/router';

const { provider, webSocketProvider, chains } = configureChains(
  [mainnet,goerli,sepolia],
  [
    // alchemyProvider({ apiKey: 'hu9KmpMxud_8q6Tlskrt42zOpiGy-9xN' }),
    infuraProvider({ apiKey: '4cb849430aaa4b82bb8360011eb397e9' }),
    publicProvider()
  ],
  // { targetQuorum: 2 },
)

const Aclient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.us.fauna.com/graphql",
  headers: {
    authorization: `Bearer ${"fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f"}`, //FaunaAdmin != manager_role
  },
});

// Necessary for Wagmi Client Provider /* Do Not Delete or client will not work*/
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'TaurosDAO',
    //   },
    // }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

const theme = extendTheme({
  fonts: {
    heading: "Rufina, serif",
    body: "PT Serif, sans-serif"
  },
  fontSizes: {
    '7xl': '4.5rem',
    '8xl': '5rem',
    '9xl': '5.5rem',
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={Aclient}>
      <Provider store={store}>
        <WagmiConfig client={client}>
          <ChakraProvider theme={theme}>
            <React.StrictMode />
            <MoralisProvider appId="ny6Iude7WFwg2QaZtvDK7zQC81e9uKRIeaCkFNxM" serverUrl="https://htogiwbd7il5.usemoralis.com:2053/server">
              {/* <Box> */}
              {/* <Layout> */}
              {/* <Box maxW="1000" align="center" py={20}> */}
              {/* <Box textAlign="left"> */}
              <Component {...pageProps} />
              {/* </Box> */}
              {/* </Box> */}
              {/* </Layout> */}
              {/* </Box> */}
            </MoralisProvider>
          </ChakraProvider>
        </WagmiConfig>
      </Provider>
    </ApolloProvider>


  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
