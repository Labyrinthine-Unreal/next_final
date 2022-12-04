import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { NFTBalance } from "web3uikit"

export default function User() {
  const { Moralis, account, isAuthenticated } = useMoralis();

  return (
    <>
      {/* Display User's NFT Balance */}
        <NFTBalance
          address={account}
          chain="eth"
        />
    </>
  );
}