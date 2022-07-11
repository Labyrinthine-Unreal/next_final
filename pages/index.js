import { useState } from "react"
import { cardVariant, parentVariant } from "../motion"
import ProductModal from "@/components/mintComp/ProductModal"
import { motion } from "framer-motion"
import properties from "@/components/data/properties/"
import ProductCard from "@/components/mintComp/ProductCard"
import { Box, SimpleGrid, Text, Link } from "@chakra-ui/react"
import Head from "next/head"

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

export default function Home() {
  const [modalData, setModalData] = useState(null)
  return (
    <>
      <Head>
          <title>
              Tauros | Dashboard
          </title>
      </Head>
    <Box align="center">
      <Box mt={5} py={5} maxW="900px" textAlign="left">
        <Text pt={10} pb={5} fontWeight="semibold" fontSize="2xl">
          Welcome to TaurosDAO
        </Text>
        <Text>TaurosDAO is an exclusive community of artists and collectors founded in January 2022 by <Link href="https://www.labyrinthineunreal.io/" target="_blank" rel="noreferrer" style={{color: "black", fontWeight: "500"}}>Labyrinthine Unreal</Link>. For purposes of governance and other membership privileges, members need to hold at least one TAUROS token.</Text>
      </Box>
      <Box py={5} maxW="900px" textAlign="left">
      <Text pb={10}>TAUROS Membership Cards are TaurosDAO&apos;s genesis assets. Other assets by TaurosDAO will be airdropped from time to time to existing members. The First of these are Merca City Estates (or land plots). For more details on Estate use cases inside the Merca City Metaverse/RTS Game World, click on the information button inside the Estates Card.</Text>
      </Box>
      </Box>
      <Box align="center"> 
        <Box maxW="900px">
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
        <Box mt={5} py={5} maxW="900px" textAlign="left">
        <Text pt={10} pb={5} fontWeight="semibold" fontSize="2xl">
          Lorem ipsum dolor sit anim
        </Text>
        <Text >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.
        </Text>
        </Box>
      </Box>
      </>
  );
}