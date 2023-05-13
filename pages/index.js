import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from '@components/animations/motion'
import products from '@components/data/products/'
import ProductCard from '@components/cards/ProductCard'
import ProductModal from '@components/cards/ProductModal'
import { Box, Flex, Center, Spacer, Grid, HStack, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, IconButton, UnorderedList, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '@styles/MintButton.module.css'
import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'
import Title, { LU } from '@components/animations/AnimatedTitles'
import { useInView } from 'react-intersection-observer'
import TaurosDAOIcon from '@components/TaurosDAOIcon'


const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export default function Home() { 
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()

  const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: false
  });

  const buttonVariants = {
    initial: {
      scale: 1
    },
    whileInView: {
      scale: [1.5, 1],
      transition: {repeat: Infinity, type: "spring", duration: 2}
    },
    hover: {
      color: "#008080"
    },
    tap: {
      scale: 2
    }
  }

  return (
    <Box>
        <Head>
            <title>
                TaurosDAO | Dashboard
            </title>
            <meta name="description" content="Welcome to TaurosDAO, an exclusive community of artists and collectors founded in January 2022 by Labyrinthine Unreal." keywords="NFT, nftart, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, airdrop, airdrops, virtual real estate, plots, estate, estates, mask, masks, initiation, collection, marketplace, metaverse, MMORTS, exploration, mystery, bitcoin, token, coin, altcoin, voting, dao" />
        </Head>

        <Heading textStyle="title" fontSize="3xl"><Title /></Heading>

        <Box alignContent="center">
            <Box textStyle="landingPageContent" mb={10} pb={0} px={20}>
                <motion.div initial="initial" whileInView="whileInView" whileHover="hover" tap="whileTap">
                    <Collapse in={isOpen} startingHeight={220}>
                        <Text pb={5}>Welcome to TaurosDAO, and thanks for stopping by! We're thrilled to have you here.</Text>

                        <Text pb={5}>We're a unique community of artists, collectors, developers, and designers, all brought together by a love of art and a vision for the future. Launched in 2022 by the innovative minds of The Ontological Game Team, we're reshaping the way art is created, curated, and collected in the digital world.</Text>

                        <Text pb={5}>Here's what we're all about:</Text>

                        <UnorderedList fontSize="15px">
                                <ListItem><span style={{fontWeight: "600"}}>Virtual Events:</span> We host exciting virtual events that bring our community together.</ListItem>
                                <ListItem><span style={{fontWeight: "600"}}>Art Collections:</span> We cherish and collect extraordinary pieces of art that amaze and inspire.</ListItem>
                                <ListItem><span style={{fontWeight: "600"}}>Art Galleries:</span> We create, manage, and curate digital galleries to showcase our members' incredible works.</ListItem>
                                <ListItem><span style={{fontWeight: "600"}}>Tech Innovations:</span> We harness blockchain and web3 technologies to deliver advanced digital solutions, including smart contracts, DeFi applications, and DApps.</ListItem>
                                <ListItem><span style={{fontWeight: "600"}}>Metaverse Development:</span> We craft unique Metaverse real estate and immersive digital experiences, from 3-D digital art galleries to engaging Metaverse events.</ListItem>
                        </UnorderedList>

                        <Text py={5}>But TaurosDAO is more than just a platform. It's a movement, where artists have the freedom to showcase their creativity, and collectors can discover and acquire exceptional pieces of art.</Text>

                        <Text pb={5}>Want to get more involved? Awesome! You'll need a TAUROS Card. They come in three types - <span style={{fontWeight: "400"}}>OG</span>, <span style={{fontWeight: "400"}}>Archon</span>, and <span style={{fontWeight: "400"}}>Guardian</span>. Each comes with its own benefits and voting rights in our organization's governance. Check out the <NextLink href="/members"><a style={{color: "#2E7DAF", fontWeight: "400"}}>members</a></NextLink> page for more details.</Text>

                        <Text pb={5}>Keen to explore more about us? Dive into Merca City or navigate through Labyrinthine Unreal in our <Link href="https://docs.labyrinthineunreal.io/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#2E7DAF", fontWeight: "400"}}>docs</Link> section.</Text>

                        <Text>We can't wait to see you around!</Text>
                        
                    </Collapse>
                    <Flex px={4}>
                        <MotionIconButton variants={buttonVariants}  className={styles.arrow} w="50" h="50" onClick={onToggle} variant="unstyled" color="black" >
                            {isOpen ?  <TbArrowBigUpLines w="20" h="20" /> : <TbArrowBigDownLines w="20" h="20" />}
                        </MotionIconButton>
                        <Spacer />
                    <MotionIconButton variants={buttonVariants}  className={styles.arrow} w="50" h="50" onClick={onToggle} variant="unstyled" color="black" >
                            {isOpen ?  <TbArrowBigUpLines w="20" h="20" /> : <TbArrowBigDownLines w="20" h="20" />}
                        </MotionIconButton>
                    </Flex>
                </motion.div>
            </Box>

            <Center><TaurosDAOIcon /></Center>

        </Box>

        <Box pt={20} pb={20} align="center">
          <MotionSimpleGrid
            mt="4"
            minChildWidth="250px"
            spacing="4em"
            minH="full"
            variants={parentVariant}
            animate={inView ? "animate" : "initial"}
            ref={ref}
          >
            {products.map((product, i) => (
              <MotionBox variants={cardVariant} key={i}>
                <ProductCard product={product} setModalData={setModalData} />
              </MotionBox>
            ))}
            </MotionSimpleGrid>
            <ProductModal
              isOpen={modalData ? true : false}
              onClose={() => setModalData(null)}
              modalData={modalData}
            />
        </Box>
    </Box>
  );
}
