// src/pages/categories/create-topic.js
import CreateTopic from '@root/components/topicComponents/CreateTopic';
import faunadb from 'faunadb';
import React, { useState } from 'react';
// import { useAuth, useUser } from '@clerk/nextjs';
import withCategoryStyles from '@root/components/cards/withCategoryStyles';
import parse from 'html-react-parser';
import { useAccount, useEnsAvatar, useDisconnect, useConnect,useContractRead } from 'wagmi'


import Header from '@components/Header';
const CreateNewProposal = () => {
  // const secret = Clerk.session.getToken({ template: 'fauna' });
  // console.log(secret);
  const client = new faunadb.Client({ secret: "fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
  console.log(client);
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // const { user } = useUser();
  const [newPost, setNewPost] = useState(null);
  
  const { address } = useAccount()

  const {data, isError, isLoading,isSuccess}= useContractRead({
    address: '0x5524B7a189545F03214Fbf23ee3D489d8F01EA2F',
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
  // console.log(balance.status)

  // const { data, isError, isLoading } = useContractReads({
  //   contracts: [
  //     {
  //       ...wagmigotchiContract,
  //       functionName: 'getAlive',
  //     }
  //   ],
  // })

  const handlePostCreated = (post) => {
    setNewPost(post);
  };

  return (
    <>
    <Header/>
    DAO Balance: {String(data)}
    <div>
      {newPost ? (
        <div>
          <div>{newPost.topic}</div>
          <div>{parse(newPost.content)}</div>
        </div>
      ) : (
        <CreateTopic onPostCreated={handlePostCreated} />
      )}
    </div>
    </>
  );
};

export default withCategoryStyles(CreateNewProposal);
