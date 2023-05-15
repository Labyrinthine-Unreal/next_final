// src/components/UpdateTopic.js
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
import { useQuery, gql } from '@apollo/client';
import { useAccount, useEnsAvatar, useDisconnect, useConnect,useContractRead } from 'wagmi'

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    { ssr: false }
);

const q = faunadb.query;
const UpdateTopic = ({ onPostCreated }) => {

    const GET_TOPIC_BY_SLUG = gql`
    query MyProposalQuery($slug: String!){
      proposals_by_slug(slug: $slug) {
        _id
        date
        proposal 
        user 
        slug
        content
        }
      }
    `;

    const [topic, setTopic] = useState('');
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const router = useRouter();
    const { slug } = router.query;
    // const { user } = useUser()
    const { address } = useAccount()

    const client = new faunadb.Client({ secret: "fnAFDZGm3pAASZlfCHemrt0fvXUPK1gb0ZqnbR6f", keepAlive: true });
    console.log(client)

    const balance = useContractRead({
        address: '0x1A0F33bBc5c7bA83f490cdB6C13ee50e1C851908',
        abi: [
            {
              name: 'balanceOf',
              type: 'function',
              stateMutability: 'nonpayable',
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
        functionName: 'balanceOf',
        args: [address],
      })

      console.log(balance)

    const { data, loading, error } = useQuery(GET_TOPIC_BY_SLUG, {
        variables: { slug },
        skip: !slug, 
        // Skip the query if the slug is not available
      }) 

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;

      const topicData = data?.proposals_by_slug.slug;
      console.log(data)
      console.log(data?.proposals_by_slug.slug)

      if (!topicData) {
        return <h1>404: Not Found</h1>
      }
    
    //   const isAuthor = user.username === data?.proposals_by_slug.user // check if current user is the author
      console.log(address)
      console.log(data?.proposals_by_slug._id)

    const handleSubmit = (e) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();
        const content = stateToHTML(contentState);

        const generatedSlug = slugify(topic, { lower: true, strict: true }) + '-' + shortid.generate();

        var createP = client.query(
            q.Update(
                q.Ref(q.Collection('proposals'), data?.proposals_by_slug._id),
                { data: { proposal: topic, content: content, user: address, slug: generatedSlug } }
            )
        )

        createP.then(function (response) {
            console.log(response.ref); // Logs the ref to the console.
            // onPostCreated(response.data); // Call the callback with the new post data
            router.push(`/topics/${response.data.slug}`); // Redirect the user to the new topic's page
        })
    };


    return (
        <>
            <div className={styles.container}>
                <h2>Edit Post</h2>
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
                </form>
            </div>
        </>
    );
};

export default UpdateTopic;