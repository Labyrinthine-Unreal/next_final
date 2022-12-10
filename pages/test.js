import React from 'react'
import { VStack,Heading } from '@chakra-ui/react'
import { useMoralis } from "react-moralis"
// import { MdFoodBank } from 'react-icons/md';


export default function test() {
  const { Moralis, account } = useMoralis();

  async function test(){
    const Test = Moralis.Object.extend("Test");

    const test = new Test();

    // const test = new Test(); 
    test.set("test", "taco");
    test.set("eat", "pizza");
    test.set("ethAddress", account);

    await test.save();

  }

  return(
    <VStack alignItems={'start'}>
        <Heading mb={8}>Test</Heading> 
        <button onClick={test}>Test data</button>
    </VStack>

  );
}