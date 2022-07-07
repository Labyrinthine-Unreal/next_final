import Head from 'next/head'
import { Box, Text, Flex } from "@chakra-ui/react"
import Sidebar from "../components/navbars/Sidebar"
import Footer from "../components/navbars/Footer"
import HeaderSignIn from '../components/navbars/HeaderSignIn'

export default function MembersPage() {
    return (
        <Box bgGradient="linear(to-br, teal.400,purple.300)">
            <Head>
                <title>
                    Tauros | Members
                </title>
            </Head>

            <HeaderSignIn />

            <Flex pb={20}>
                <Sidebar />
                <Flex direction="column" alignItems="center" width="100%" pt={70} p={20}>
                    <Text 
                        pl={40} pr={40} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
                        Requirements
                    </Text>
                    <Text pl={40} pr={40} pb={20}>This page should only open if the person signing in owns a TAUROS token. If not, perhaps a pop up window: `It seems you do not have permission to access this page. Would you like to purchase a TAUROS token? Yes/No.` If Yes, is clicked, proceed to the /tauros page. If No, close pop up window and stay where you are.</Text>
                </Flex>
            </Flex>
            <Footer />
        </Box>
    )
}