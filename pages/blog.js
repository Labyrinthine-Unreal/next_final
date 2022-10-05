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
                <meta name="description" content="Welcome to TaurosDAO" keywords="NFT, nftart, digitalart, digitalartist, taurosdao, membership, art, gallery, 3D, metaverse, dao" />
            </Head>
            
            <Heading textStyle="title" fontSize="3xl"><Blog /></Heading>
            
            {blogData.map((article, i) => (
                <BlogCard article={article} key={i} />
            ))}
            
        </Box>
    )
}