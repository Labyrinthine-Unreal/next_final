// src/components/CreateTopic.js
import React, { useState } from 'react';
import faunadb from 'faunadb';
import { EditorState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import FlippingButton from '../buttons/FlippingButton';
import dynamic from 'next/dynamic';
// import { ClerkProvider, useUser, SignIn, SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import slugify from 'slugify';
import shortid from 'shortid';
import { useRouter } from 'next/router';
import styles from './CreateTopic.module.css'
import { useAccount, useEnsAvatar, useDisconnect, useConnect,useContractRead } from 'wagmi'
import { usePrepareContractWrite, useFeeData, useContractWrite } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import Web3 from "web3";



const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);

const q = faunadb.query;
const CreateTopic = ({ onPostCreated }) => {
  const [topic, setTopic] = useState('');
  const [amount, setAmount] = React.useState(1000)
  const handleChange = (value) => setAmount(value)
  // const contentState = editorState.getCurrentContent();
  // const content = stateToHTML(contentState);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  
  const client = new faunadb.Client({ secret:"fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client)
  
  const { address } = useAccount()

  console.log(address)
  const toast = useToast()


  const { config, error } = usePrepareContractWrite({
    address: '0xbac2b7D45beC968B7727af7c1B2af0BDc3252Cb9',
    abi: [
      {
        name: 'propose',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs:
          [
            {
              internalType: "string[]",
              name: "proposalNames",
              type: "string[]"
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            }
          ],
        outputs: [],
      },
    ],
    functionName: 'propose',
    // overrides: {
    //   // Override Price 
    //   value: String(amount),topic
    // },
    // Amount to propose
    args: [[topic,topic], //[topic,content]
    String(amount)],
  })
  console.log(config)
  console.log(error)


  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Proposal',
        description: "Proposal successfully submitted",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Proposal successful");
    },
    onError(error) {
      toast({
        title: 'Proposal Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
        description: console.log(error),
        status: "error",
        duration: '9000',
        isClosable: true
      })
      console.log(error);
    },
    onMutate({ args }) {
      console.log('Mutate', { args })
    },
  })
  console.log(data)
  console.log(write)



  // console.log(price * amount)
  // console.log(balance.status)
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const content = stateToHTML(contentState);

    const generatedSlug = slugify(topic, { lower: true, strict: true }) + '-' + shortid.generate();

    var createP = client.query(
      q.Create(
        q.Collection('proposals'),
        { data: { proposal: topic, content:content,user:address, date: new Date().toString(),slug: generatedSlug,amount:amount } }
      ))
    createP.then(function(response) {
      console.log(response.ref); // Logs the ref to the console.
      onPostCreated(response.data); // Call the callback with the new post data
      router.push(`/topics/${response.data.slug}`); // Redirect the user to the Create Proposal's page
    })

  };

  
  return (
    <>
    <div className={styles.container}>
      <h2>Create Proposal</h2>
      <form onSubmit={handleSubmit} className={styles.topicInput}>
        <input
          type="text"
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName={"editorClassName"}
          onEditorStateChange={setEditorState}
        />
        <br />
        <FlippingButton
          text="Submit"
          front="Done?"
          back="Submit"
          onClick={handleSubmit}
          
        />

<FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Amount to Propose
            </FormLabel>

            <NumberInput step={1} min={1} max={10} defaultValue={1} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="teal.300">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button disabled={!write} onClick={() => write?.()}>
            Mint
          </Button>
      </form>
    </div>
    </>
  );
};

export default CreateTopic;
