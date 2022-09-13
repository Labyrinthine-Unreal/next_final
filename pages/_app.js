import React from "react";
import ReactDOM from "react-dom/client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import store from "@src/redux/store";
import { Provider } from "react-redux";
import theme from '@components/theme.fonts'
import { SessionProvider } from 'next-auth/react';
import Layout from "@components/navbars/Layout"
import Footer from "@components/navbars/Footer"
const { chains, provider } = configureChains(
  [chain.rinkeby], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rinkeby.infura.io/v3/fc097640a7f64d8a8385ab256db6a81a", // go to https://www.ankr.com/protocol/ to get a free RPC for your network
        };
      },
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "taurosdao.app",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          {/* <MoralisProvider appId="dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE" serverUrl="https://d8tdshnwaepb.usemoralis.com:2053/server"> */}
          <SessionProvider session={pageProps.session} refetchInterval={0}>
            <RainbowKitProvider chains={chains}>
              <Box>
                <Layout>
                  <Box maxW="1000" align="center" py={20}>
                    <Box textAlign="left">
                      <Component {...pageProps} />
                    </Box>
                  </Box>
                </Layout>
              </Box>
            </RainbowKitProvider>
          </SessionProvider>
          {/* </MoralisProvider> */}
        </WagmiConfig>
      </ChakraProvider>
    </Provider>
  )
  // document.getElementById("root")
}
// reportWebVitals();
export default MyApp
