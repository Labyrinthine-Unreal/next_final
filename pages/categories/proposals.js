// src/pages/categories/forum.js
import TopicList from '@root/components/topicComponents/TopicList';
import faunadb from 'faunadb';
import React from 'react';
import { useAuth } from '@clerk/nextjs';
// import { ClerkProvider, useUser, SignIn, SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import withCategoryStyles from '@root/components/cards/withCategoryStyles';
import { useRouter } from 'next/router';
import { useAccount, useEnsAvatar, useDisconnect, useConnect } from 'wagmi'
import Header from '@components/Header';
const Forum = () => {
  // const secret = Clerk.session.getToken({ template: 'fauna' })
  // console.log(secret)
  const client = new faunadb.Client({ secret:"fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client)
  // const { isLoaded } = useAuth();
  // const { user } = useUser()
  const { address, isConnected } = useAccount()
  const router = useRouter();

  // if (!isLoaded || !address) {
  //   return null;
  // }

  const handleNewTopic = () => {
    router.push('/categories/create-new-topic');
  };
  
  return (
    
    <div>
      <Header />
      <h1>Forum Topics</h1>
      <button onClick={handleNewTopic}>Start a New Proposal</button>
      <TopicList/>
    </div>
  );
};

export default withCategoryStyles(Forum);