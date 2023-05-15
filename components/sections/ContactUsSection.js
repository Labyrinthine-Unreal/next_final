import { Box, Flex, Grid, FormControl, FormLabel, Input, Textarea, Button, Text, Spacer, useColorModeValue } from "@chakra-ui/react";

export default function ContactUsSection() {
    const bg = useColorModeValue("rgb(233, 246, 244)", "gray.800");
    const color = useColorModeValue("black", "white");

    return (
        <Grid 
            templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
            gap="8" 
            px={{ base: '8', md: '16', lg: '32' }} 
            py={{ base: '8', md: '16', lg: '32'}}
            bg={bg}
            color={color}
            alignItems="center"
        >
            <Flex direction="column" flex="1" maxW="xl" p={{ base: '4', md: '8' }} borderRadius="md">
                <Flex direction={{ base: "column", md: "row" }} mb="4" gap={{ md: '8' }}>
                    <FormControl id="name" flex="1">
                        <FormLabel fontSize="sm" fontWeight="light">Name</FormLabel>
                        <Input type="text" bg="rgba(0,0,0,0.07)" />
                    </FormControl>
                    <FormControl id="email" flex="1">
                        <FormLabel fontSize="sm" fontWeight="light">Email</FormLabel>
                        <Input type="email" bg="rgba(0,0,0,0.07)" />
                    </FormControl>
                </Flex>
                <FormControl id="message">
                    <FormLabel fontSize="sm" fontWeight="light">Message</FormLabel>
                    <Textarea bg="rgba(0,0,0,0.07)" />
                </FormControl>
                <Flex mt="4">
                    <Text fontSize="xs" as="span">
                        This site is protected by reCAPTCHA and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.
                    </Text>
                    <Spacer mx="4" />
                    <Button colorScheme="purple" px="12">Send</Button>
                </Flex>
            </Flex>


            <Box>
                <Text fontSize="2xl" mb="4">Contact TaurosDAO</Text>
                <Text fontSize="md">Get in touch with the team at TaurosDAO. Tell us what you need and we will respond as soon as possible.</Text>
            </Box>
        </Grid>
    );
}
