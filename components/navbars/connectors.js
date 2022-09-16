import {UAuthMoralisConnector} from '@uauth/moralis'

export const injected = {}

export const walletconnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: "524a7dd4-bbd6-4633-9257-a685979aef44",
  redirectUri: "http://localhost:3000",

  // Scope must include openid and wallet
  scope: 'openid wallet',

  // Injected and walletconnect connectors are required
//   connectors: {injected, walletconnect},
})

const uauth = {connector: UAuthMoralisConnector}

const connectors = {
  injected,
  walletconnect,
  uauth,
}

export default connectors