import {UAuthMoralisConnector} from '@uauth/moralis'

export const Metamask = {}

export const WalletConnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirectUri: "https://taurosdao.app/",

  // Scope must include openid and wallet
  scope: 'openid wallet', 

  // Injected and walletconnect connectors are required
  connectors: {Metamask, WalletConnect},
})

export const UnstoppableDomains = {connector: UAuthMoralisConnector}

const connectors = {
    Metamask,
    WalletConnect,
    UnstoppableDomains
}


export default connectors
