import { ChakraProvider, Box } from "@chakra-ui/react"
import React from "react";
import "@styles/reset.css"
import store from "@src/redux/store";
import { Provider } from "react-redux";
import Layout from "@components/navbars/Layout"
import theme from '@components/theme.fonts'
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: false,
});


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={client}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
              <Box>
                <Layout>
                  <Box maxW="1000" align="center" py={20}>
                    <Box textAlign="left">
                      <Component {...pageProps} />
                    </Box>
                  </Box>
                </Layout>
              </Box>
            </SessionProvider>
        </WagmiConfig>
      </ChakraProvider>
    </Provider>
  )
}
