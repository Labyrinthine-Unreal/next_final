// src/pages/categories/forum.js
import TopicList from '@root/components/topicComponents/TopicList';
import faunadb from 'faunadb';
import React from 'react';
import { useAuth } from '@clerk/nextjs';
// import { ClerkProvider, useUser, SignIn, SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import withCategoryStyles from '@root/components/cards/withCategoryStyles';
import { useRouter } from 'next/router';
import { useAccount, useEnsAvatar, useDisconnect, useConnect, useContractRead} from 'wagmi'
import Header from '@components/Header';
import { Center } from '@chakra-ui/react';

const Forum = () => {
  // const secret = Clerk.session.getToken({ template: 'fauna' })
  // console.log(secret)
  const client = new faunadb.Client({ secret:"fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client)
  // const { isLoaded } = useAuth();
  // const { user } = useUser()
  const router = useRouter();

  // if (!isLoaded || !address) {
  //   return null;
  // }
  const { address,isConnected } = useAccount()

  const {data, isError, isLoading,isSuccess}= useContractRead({
    address: '0x1A0F33bBc5c7bA83f490cdB6C13ee50e1C851908',
    abi: [
        {
          name: 'balanceOf',
          type: 'function',
          stateMutability: 'view',
          inputs:
          [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
        ],
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
        ],
        },
      ],
    functionName: "balanceOf",
    args: [address]
  })
  console.log(isError)
  console.log(isSuccess)
   console.log(data)
  const handleNewTopic = () => {
    router.push('/categories/create-new-topic');
  };
  
  console.log()
  if (!isConnected && data<1)
  return (
    <>
    <Header />
    <Center>
    <h1>Please connect wallet to access Governance</h1>
    </Center>
    </>
  );

  if (isConnected && data<1)
  return (
    <>
    <Header />
    <Center>
    <h1>Must own One TaurosDAO to Propose and Vote</h1>
    </Center>
    </>
  );

  if (isConnected && data>=1) 
  return (
    
    <div>
      <Header />
      <Center>
      DAO Balance: {String(data)}
      </Center>
      <h1>Proposals</h1>
      <button onClick={handleNewTopic}>Start a New Proposal</button>
      <TopicList/>
    </div>
  );
};

export default withCategoryStyles(Forum);