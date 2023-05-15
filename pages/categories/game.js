// src/pages/categories/game.js
import TopicList from '@root/components/topicComponents/TopicList';
import faunadb from 'faunadb';
import React from 'react';
import { useAuth } from '@clerk/nextjs';
import { ClerkProvider, useUser, SignIn, SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import withCategoryStyles from '@root/components/cards/withCategoryStyles';
import { useRouter } from 'next/router';

const Game = () => {
  const secret = Clerk.session.getToken({ template: 'fauna' })
  console.log(secret)
  const client = new faunadb.Client({ secret:"fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client)
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser()
  const router = useRouter();

  if (!isLoaded || !userId) {
    return null;
  }

  const handleNewTopic = () => {
    router.push('/categories/create-new-topic');
  };
  
  return (
    
    <div>
      Hello, {user.fullName}
      <h1>Game Topics</h1>
      <button onClick={handleNewTopic}>Start a New Topic</button>
      <TopicList/>
    </div>
  );
};

export default withCategoryStyles(Game);