import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import MCAQ from "@components/mint/MultiCallArtQuill";
import MCC from "@components/mint/MultiCallCube";

import CustomContainer from "@components/CustomContainer";

export default function ButtonDisplayTest() {
  const { Moralis, account, isAuthenticated } = useMoralis();

  return (
    <>
    <CustomContainer>\
        <MCAQ/>
        </CustomContainer>

        <CustomContainer>\
        <MCC/>
        </CustomContainer>
    </>
  );
}