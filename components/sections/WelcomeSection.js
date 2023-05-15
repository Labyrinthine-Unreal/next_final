import { Box, Flex, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";

export default function WelcomeSection() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex
      id="top"
      position="relative"
      h="100vh"
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "flex-start" }}
      align="center"
      bgImage="url('/images/sections/welcome/Welcome.jpeg')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bgGradient="linear(to-r, whiteAlpha.700 50%, transparent)"
      />
      <Box
        maxW="4xl"
        pl={{ base: '8', md: '16', lg: '32' }}
        my="auto"
        zIndex="1"
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}
          mb="8"
          color="black"
        >
          Welcome to TaurosDAO
        </Heading>
        <Text
          fontFamily="PT Serif, sans-serif"
          fontSize={{ base: "md", md: "lg", lg: "2xl" }}
          fontWeight="medium"
        //   lineHeight="tall"
        >
          Welcome to TaurosDAO, and thanks for stopping by! We&apos;re thrilled to have you here. We&apos;re a unique community of artists, collectors, developers, and designers, all brought together by a love of art and a vision for the future. Launched in 2022 by the innovative minds of The Ontological Game Team, we&apos;re reshaping the way art is created, curated, and collected in the digital world.
        </Text>
      </Box>
    </Flex>
  );
}