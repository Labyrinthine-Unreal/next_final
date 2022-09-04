import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from '@components/animations/motion'
import products from '@components/data/products/'
import ProductCard from '@components/cards/ProductCard'
import ProductModal from '@components/cards/ProductModal'
import { Box, Center, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, IconButton } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import EstatesBalance from '@components/mint/EstatesBalance'
import EstatesClaimed from '@components/mint/EstatesClaimed'
import TaurosBalance from '@components/mint/TaurosBalance'
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
        </Head>

        <Heading textStyle="title" fontSize="3xl"><Title /></Heading>

        <Box alignContent="center">
            <Box textStyle="landingPageContent" mb={10} pb={0}>
                <motion.div initial="initial" whileInView="whileInView" whileHover="hover" tap="whileTap">
                    <Collapse in={isOpen} startingHeight={60}>
                        <Text>TaurosDAO is an exclusive community of artists and collectors founded in January 2022 by <Link href="https://www.labyrinthineunreal.io/" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#2E7DAF", fontWeight: "400"}}>Labyrinthine Unreal</Link>. For purposes of governance and other membership privileges, members must hold at least one TAUROS Card. There are three types of Cards: <span style={{fontWeight: "400"}}>OG</span>, <span style={{fontWeight: "400"}}>Archon</span>, and <span style={{fontWeight: "400"}}>Guardian</span>. All OG Cards will receive an Estate and a weapon specific to their rank. Afterwards, they have a 50% chance of receiving free airdrops of all future assets Labyrinthine Unreal and TaurosDAO produce. Archons and Guardians have a 25% and a 10% chance respectively. A part of the game tokens will be distributed to all members equally, regardless of type (for a more detailed overview of benefits and voting rights, check the <NextLink href="/members"><a style={{color: "#2E7DAF", fontWeight: "400"}}>members</a></NextLink> page).
                        </Text>
                        
                        <Text ml={6} mt={5} p={5} rounded="lg" brightness="90%" borderColor="teal.700" maxW={800} _hover={{color: "teal.600", bg: "#eee", brightness: "100%", boxShadow: "dark-lg", transition: "transform 0.15s ease-in-out", transform: "scale3d(1.05, 1.05, 1.05)",}} style={{fontWeight: "400"}}>To be able to mint TAUROS, you must save your Ethereum wallet address with the Tauroslist below when it goes live. We will announce the date soon, so stay tuned!
                        </Text>
                        
                        <Text pt={5}><span style={{fontWeight: "400"}}>Merca City</span> is an open world Metaverse/RTS Game, where TaurosDAO members, artists, designers, developers, gamers, and collectors may come together to play, experiment, and collaborate. <NextLink href="/estates"><a style={{color: "#2E7DAF", fontWeight: "400"}}>Estates</a></NextLink> are Merca City&apos;s genesis assets. The Estates NFT is dynamic, A.K.A. dNFT or <em>smart NFT</em>; its metadata and output animation changes based on live weather conditions pinpointing to a secret location. It reports temperature and visibility, and its animation depicts four weather conditions: sunny, overcast, rainy, and snowy.
                        </Text>
                    </Collapse>
                    <Box align="right" px={4}>
                        <MotionIconButton variants={buttonVariants}  className={styles.arrow} w="50" h="50" onClick={onToggle} variant="unstyled" color="black" >
                            {isOpen ?  <TbArrowBigUpLines w="20" h="20" /> : <TbArrowBigDownLines w="20" h="20" />}
                        </MotionIconButton>
                    </Box>
                </motion.div>
            </Box>

            <Center><TaurosDAOIcon /></Center>
            
            
            {/* <SimpleGrid columns={{sm: 1, md: 3}} gap={4} mt={20} mb={10} pt={4} px={4}>
                <Box className={styles.balances}>
                    <Heading pb={2} fontSize="18px" fontWeight="normal" color="#4A5568">TAUROS BALANCE</Heading>
                    <TaurosBalance />
                </Box>
                <Box className={styles.balances}>
                    <Heading pb={2} fontSize="18px" fontWeight="normal" color="#4A5568">ESTATES BALANCE</Heading>
                    <EstatesBalance fontWeight="normal" fontSize="xs" />
                </Box>
            </SimpleGrid> */}
            
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

        <Heading textStyle="title" pt={20}>
          <LU />
        </Heading>

        <Text textStyle="landingPageContent">
            Labyrinthine Unreal is the undergound space of Merca City. Players may move between worlds through hidden portals that can be accessed from a personal tablet (each player is equipped with one at the beginning of the game). However, to activate the portals, players need one of the Labyrinthine Unreal Initiation Masks; for no mortal may enter the Labyrinth without one!
            <br /><br />
            Characters undergo a transformation as they move between worlds; thus, the character one plays is not exactly the same in both worlds, although there are similarities that carry across, for example a character&apos;s gait and other recognizable traits. Their identity becomes hidden under a mask in the Labyrinth. This is the perfect environment to form teams and factions that span both worlds, as well as infiltrate and undermine enemy factions.
            <br /><br />
            <span style={{fontWeight: "400"}}>Initiation Masks</span> are the genesis assets of Labyrinthine Unreal, and the players&apos; ticket to the private alpha stage of the game. As stated above, OGs have a 50% chance of receiving a free Initiation Mask for each token they own. Archons have a 25% and Guardians a 10% chance. All TAUROS holders are automatically whitelisted for the sale, and those who own both a Mask and an Estate may move freely between worlds. Initiates will also be the first to receive the game&apos;s native token as rewards for completing tasks and/or solving various puzzles. The Labyrinth&apos;s game token is different from that of Merca City.
        </Text>
    </Box>
  );
}
