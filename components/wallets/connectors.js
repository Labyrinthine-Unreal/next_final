import {UAuthMoralisConnector} from '@uauth/moralis'

export const Metamask = {}

export const WalletConnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: "524a7dd4-bbd6-4633-9257-a685979aef44",
  redirectUri: "http://localhost:3000",
  scope: "openid wallet email:optional",


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
