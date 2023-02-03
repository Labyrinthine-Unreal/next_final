import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { NFTBalance } from "web3uikit"
import CustomContainer from "@components/CustomContainer";

export default function User() {
  const { Moralis, account, isAuthenticated } = useMoralis();

  return (
    <>
    {/* <CustomContainer> */}
      {/* Display User's NFT Balance */}
        <NFTBalance
          address={account}
          chain="eth"
        />
        {/* </CustomContainer> */}
    </>
  );
}