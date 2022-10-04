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
                <meta name="description" content="Welcome to TaurosDAO" keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, art, gallery, 3D, airdrop, airdrops, virtual real estate, plots, estate, estates, mask, masks, initiation, collection, marketplace, metaverse, MMORTS, exploration, mystery, podcast, bitcoin, token, coin, altcoin, voting, dao" />
            </Head>
            
            <Heading textStyle="title" fontSize="3xl"><Blog /></Heading>
            
            {blogData.map((article, i) => (
                <BlogCard article={article} key={i} />
            ))}
            
        </Box>
    )
}