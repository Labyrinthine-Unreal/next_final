import React, { useState } from "react"
import { motion } from "framer-motion"
import { cardVariant, parentVariant } from "../motion"
import properties from "@components/data/properties/"
import ProductCard from "@components/mintComp/ProductCard"
import ProductModal from "@components/mintComp/ProductModal"
import { Box, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, Button, Center, IconButton } from "@chakra-ui/react"
import Head from "next/head"
import EstatesBalance from "@components/mintComp/EstatesBalance"
import EstatesClaimed from "@components/mintComp/EstatesClaimed"
import TaurosBalance from "@components/mintComp/TaurosBalance"
import styles from '@styles/MintButton.module.css'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io'
import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'


const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
        <Head>
            <title>
                TaurosDAO | Dashboard
            </title>
        </Head>

        <Heading textStyle="title" fontSize="3xl">Welcome to Taurosdao</Heading>

        <Box alignContent="center">
            <Box textStyle="landingPageContent" pb={0}>
                <Collapse in={isOpen} startingHeight={60}>
                    TaurosDAO is an exclusive community of artists and collectors founded in November 2021 by <Link href="https://www.labyrinthineunreal.io/" target="_blank" rel="noreferrer" style={{color: "black", fontWeight: "500"}}>Labyrinthine Unreal</Link>. For purposes of governance and other membership privileges, members need to hold at least one <span style={{color: "black", fontWeight: "500"}}>TAUROS</span> token.
                    <br /><br />
                    <span style={{color: "black", fontWeight: "500"}}>Merca City</span> is an open world Metaverse/RTS Game, where TaurosDAO members, artists, designers, developers, gamers, and collectors may come together to play, experiment, and collaborate. <span style={{color: "black", fontWeight: "500"}}>Estates</span> are Merca City&apos;s genesis assets.
                    <br /><br />
                    Upon release, TAUROS holders may claim the first 800 Estates for free out of a total of 4300. The rest (3300) will be whitelisted at a price of 0.1 ETH for the presale and 0.15 for the public sale. 200 Estates will be reserved by the team for special areas, public buildings, and institutions. You will have two days to mint one free Estate for each token you own until 800 have been claimed, after which the private sale will start.
                </Collapse>
                <Box align="right" px={4}>
                    <IconButton className={styles.arrow} w="50" h="50" onClick={onToggle} variant="unstyled" color="black" >
                        {isOpen ?  <TbArrowBigUpLines w="20" h="20" /> : <TbArrowBigDownLines w="20" h="20" />}
                    </IconButton>
                </Box>
            </Box>


            <SimpleGrid columns={{sm: 1, md: 3}} gap={4} mt={20} mb={10} pt={4} px={4} maxW={1000}>
                <Box className={styles.balances}>
                    <Heading pb={2} fontSize="18px" fontWeight="normal" color="#4A5568">TAUROS BALANCE</Heading>
                    <TaurosBalance />
                </Box>
                {/* <Box className={styles.balances}>
                    <Heading pb={2} fontSize="16px" fontWeight="normal" color="#4A5568">ESTATES BALANCE</Heading>
                    <EstatesBalance fontWeight="normal" fontSize="xs" />
                </Box> */}
                <Box className={styles.balances}>
                    <Heading pb={2} fontSize="18px" fontWeight="normal" color="#4A5568">UNCLAIMED ESTATES</Heading>
                    <EstatesClaimed />
                </Box>
            </SimpleGrid>
            
        </Box>

        <Box pt={20} pb={20} align="center">
          <MotionSimpleGrid
            mt="4"
            minChildWidth="250px"
            spacing="4em"
            minH="full"
            variants={parentVariant}
            initial="initial"
            animate="animate"
          >
            {properties.map((product, i) => (
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

        <Heading textStyle="title">
          Labyrinthine Unreal
        </Heading>

        <Text textStyle="landingPageContent">
            Labyrinthine Unreal is the undergound space of Merca City. Players may move between worlds through hidden portals that can be accessed from a personal tablet (each player is equipped with one at the beginning of the game). However, to activate the portals, players need one of the Labyrinthine Unreal Initiation Masks; for no mortal may enter the Labyrinth without one!
            <br /><br />
            Characters undergo a transformation as they move between worlds; thus, the character one plays is not exactly the same in both worlds, although there are similarities that carry across, for example a character&apos;s gait and other recognizable traits. Their identity becomes hidden under a mask in the Labyrinth. This is the perfect environment to form teams and factions that span both worlds, as well as infiltrate and undermine enemy factions.
            <br /><br />
            <span style={{color: "black", fontWeight: "500"}}>Initiation Masks</span> are the genesis assets of Labyrinthine Unreal, and the players&apos; ticket to the private alpha stage of the game. TAUROS token holders are automatically whitelisted for the Initiation Masks sale, and those who own both a Mask and an Estate will receive further upgrades to their assets in Merca City. Initiates will also be the first to receive the game&apos;s native token as rewards for completing tasks and/or solving various puzzles.
        </Text>
    </Box>
  );
}
