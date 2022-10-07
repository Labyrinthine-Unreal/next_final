import Head from 'next/head'
import { Box, Text, Heading, Center } from "@chakra-ui/react"
import Link from 'next/link'
import { Blog } from '@components/animations/AnimatedTitles'
import blogData from '@components/data/blogData'
import BlogCard from '@components/cards/BlogCard'
import styles from '@styles/About.module.css'

export default function BlogPage() {

    return (
        <Box>
            <Head>
                <title>
                    TaurosDAO | About
                </title>
                <meta name="description" content="Welcome to TaurosDAO | Panopticon: Darkness in Light, a 3D digital art gallery reworking the concept of the Panopticon as a means to simulate, through art, our digital culture of nonstop surveillance, reflecting our current state of existence: one which is watched all the time, but somehow still behaves as if it weren&apos;t" keywords="NFT, nftart, digitalart, digitalartist, taurosdao, membership, art, gallery, 3D, metaverse, dao" />
            </Head>
            
            <Heading textStyle="title" fontSize="3xl"><Blog /></Heading>
            
            {blogData.map((article, i) => (
                <BlogCard article={article} key={i} />
            ))}
            
        </Box>
    )
}