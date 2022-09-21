import {UAuthMoralisConnector} from '@uauth/moralis'

export const Metamask = {}

export const WalletConnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: "fb5ec86c-5321-4d70-af6a-844c45816685",
  redirectUri: "https://taurosdao.app/",
  scope: "openid wallet"
})

export const UnstoppableDomains = {connector: UAuthMoralisConnector}

const connectors = {
    Metamask,
    WalletConnect,
    UnstoppableDomains
}


export default connectors
