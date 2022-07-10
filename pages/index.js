import Head from "next/head"
import { Flex, Box, Text, Center, Link } from "@chakra-ui/react"
import MintCards from "@/components/mintComp/MintCards"
import SlideEx from "@/components/navbars/Benefits"

export default function HomePage() {
    return(
      <Box>
        <Head>
          <title>Login | Dashboard</title>
          <meta name='description' content='Welcome to TaurosDAO, a community of artists and collectors by Labyrinthine Unreal' />
        </Head>
        
        <Flex direction="column" alignItems="center" width="100%" p={20}>
            <Text 
              pl={60} pr={40} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
              Welcome to TaurosDAO
            </Text>
            <Text pl={60} pr={40}>TaurosDAO is an exclusive community of artists and collectors founded in January 2022 by <Link href="https://www.labyrinthineunreal.io/" target="_blank" rel="noreferrer" style={{color: "black", fontWeight: "bold"}}>Labyrinthine Unreal</Link>. For purposes of governance and other membership privileges, members need to hold at least one TAUROS token.</Text>

            <Center alignSelf="flex-start" pl={60}><Text>For more info on membership benefits and privileges click</Text><SlideEx /></Center>

            <Text px={60} pr={40} pb={20}>TAUROS Membership Cards are TaurosDAO&apos;s genesis assets. All other assets by TaurosDAO will be airdropped the existing members. The First of these are Merca City Estates (or land plots). For more details on Estate use cases inside the Merca City Metaverse/RTS Game World, click on the information button inside the Estates Card.</Text>

            <MintCards />
            <Text 
              pl={60} pr={40} pt={20} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
              Lorem ipsum dolor sit amet
            </Text>
            <Text pl={60} pr={40}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
        </Flex>
      </Box>
    )
  }
