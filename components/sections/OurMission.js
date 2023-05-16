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
      bgImage="url('/images/sections/ourMission/Our-Mission.jpeg')"
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
        bgGradient="linear(to-r, blackAlpha.700 50%, transparent)"
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
          color="white"
        >
          TaurosDAO: The Future of Art
        </Heading>
        <Text
          fontFamily="PT Serif, sans-serif"
          fontSize={{ base: "md", md: "lg", lg: "2xl" }}
          fontWeight="medium"
          lineHeight="short"
          color="white"
        >
          At TaurosDAO, we believe art has the power to extend beyond physical and temporal boundaries. Our mission is to provide a platform that allows everyone to effortlessly invest, share and collaborate on art projects, regardless of geographical boundaries. With our unique platform, you can create, promote, and support art projects and artists with ease. We are committed to providing artists with the tools to bring their beautiful, meaningful works of art to life. Our platform is designed to manage the complexities of promotion and business logistics, enabling artists to immerse themselves fully in their creative journey.
        </Text>
      </Box>
    </Flex>
  );
}