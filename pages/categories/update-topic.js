// src/pages/categories/create-topic.js
import UpdateTopic from '@root/components/topicComponents/UpdateTopic';
import faunadb from 'faunadb';
import React, { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import withCategoryStyles from '@root/components/cards/withCategoryStyles';
import parse from 'html-react-parser';
import Header from '@root/components/layout/Header';
import { useAccount, useEnsAvatar, useDisconnect, useConnect } from 'wagmi'

const UpdatePrevTopic = () => {
  // const secret = Clerk.session.getToken({ template: 'fauna' });
  // console.log(secret);
  const client = new faunadb.Client({ secret: "fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { address} = useAccount();
  const [newPost, setNewPost] = useState(null);

  const handlePostCreated = (post) => {
    setNewPost(post);
  };

  return (
    <>
    <Header/>
    <div>
      {newPost ? (
        <div>
          <div>{newPost.topic}</div>
          <div>{parse(newPost.content)}</div>
        </div>
      ) : (
        <UpdateTopic onPostCreated={handlePostCreated} />
      )}
    </div>
    </>
  );
};

export default withCategoryStyles(UpdatePrevTopic);