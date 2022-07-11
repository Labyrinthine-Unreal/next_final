import Head from 'next/head'
import { Box, Text, Flex } from "@chakra-ui/react"

export default function ApplicationPage() {
    return (
        <Box>
            <Head>
                <title>
                    Tauros | Apply
                </title>
            </Head>

            <Box align="center">
                <Box mt={5} py={5} maxW="900px" textAlign="left">
                <Text pt={10} pb={5} fontWeight="semibold" fontSize="2xl">
                    Lorem ipsum dolor sit amet
                </Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
                <Text 
                    pt={10} pb={5} fontWeight="semibold" fontSize="2xl">
                    Lorem ipsum dolor sit amet
                </Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
                </Box>
            </Box>
        </Box>
    )
}