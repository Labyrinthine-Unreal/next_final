import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import Galleria0 from "@components/mint/MintButtonGalleria";
import CustomContainer from "@components/CustomContainer";

export default function ButtonDisplayTest() {
  const { Moralis, account, isAuthenticated } = useMoralis();

  return (
    <>
    {/* <CustomContainer> */}\
        <Galleria0/>
        {/* </CustomContainer> */}
    </>
  );
}