import { useState } from "react"
import { motion } from "framer-motion"
import { cardVariant, parentVariant } from "../motion"
import properties from "@components/data/properties/"
import ProductCard from "@components/mintComp/ProductCard"
import ProductModal from "@components/mintComp/ProductModal"
import { Box, SimpleGrid, Text, Link, Heading} from "@chakra-ui/react"
import Head from "next/head"


const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const [modalData, setModalData] = useState(null)

  return (
    <Box>
      <Head>
          <title>
              TaurosDAO | Dashboard
          </title>
      </Head>

      <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
        Welcome to Taurosdao
      </Heading>

      <Text>
        TaurosDAO is an exclusive community of artists and collectors founded in November 2021 by <Link href="https://www.labyrinthineunreal.io/" target="_blank" rel="noreferrer" style={{color: "black", fontWeight: "500"}}>Labyrinthine Unreal</Link>. For purposes of governance and other membership privileges, members need to hold at least one <span style={{color: "black", fontWeight: "500"}}>TAUROS</span> token.
        <br /><br />
        <span style={{color: "black", fontWeight: "500"}}>Merca City</span> is an open world Metaverse/RTS Game, where TaurosDAO members, artists, designers, developers, gamers, and collectors may come together to play, experiment, and collaborate. <span style={{color: "black", fontWeight: "500"}}>Estates</span> are Merca City&apos;s genesis assets.
        <br /><br />
        Upon release, TAUROS holders may claim the first 800 Estates for free out of a total of 4300. The rest (3300) will be whitelisted at a price of 0.1 ETH for the presale and 0.15 for the public sale. 200 Estates will be reserved by the team for special areas, public buildings, and institutions. If you have one or more TAUROS tokens, click on the Merca City Estate card below to check if you have any unclaimed Estates. You will have two days to mint one free Estate for each token you own until 800 have been claimed, after which the private sale will start.
      </Text>

      <Box pt={10} pb={20} align="center">
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

      <Heading pb={5} fontSize="3xl" textShadow='0.5px 0.5px white'>
        Labyrinthine Unreal
      </Heading>

      <Text>
        Labyrinthine Unreal is the undergound space of Merca City. Players may move between worlds through hidden portals that can be accessed from a special personal tablet (each player is equipped with one at the beginning of the game). However, to activate the portals, players need one of the Labyrinthine Unreal Initiation Masks; for no mortal may enter the Labyrinth without one!
        <br /><br />
        Characters undergo a transformation as they move between worlds; thus, the character one plays is not exactly the same in both worlds, although there are similarities that carry across, for example a character&apos;s gait and other recognizable traits. Their identity becomes hidden under a mask in the Labyrinth. This is the perfect environment to form teams and factions that span both worlds, as well as infiltrate and undermine enemy factions.
        <br /><br />
        <span style={{color: "black", fontWeight: "500"}}>Initiation Masks</span> are the genesis assets of Labyrinthine Unreal, and the players&apos; ticket to the private alpha stage of the game. TAUROS token holders are automatically whitelisted for the Initiation Masks sale, and those who own both a Mask and an Estate will receive further upgrades to their assets in Merca City. Initiates will also be the first to receive the game&apos;s native token as rewards for completing tasks and/or solving various puzzles.
      </Text>
    </Box>
  );
}
