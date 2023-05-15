import { Box, Flex, Grid, Heading, Text, UnorderedList, ListItem, Image, useColorModeValue, AspectRatio } from "@chakra-ui/react";
import Paragraph from "../textStyles/Paragraph";

export default function ArtCollectiveSection() {
    const bg = useColorModeValue("gray.50", "gray.800");
    const color = useColorModeValue("gray.700", "gray.50");

    return (
        <Flex
            direction={{ base: "column-reverse", lg: "row" }}
            justify="space-between"
            align="start"
            px={{ base: '8', md: '16', lg: '32' }}
            py={{ base: '8', md: '0', lg: '32'}}
            bg={bg}
            color={color}
        >
            <AspectRatio w="100%" maxW="xl" ratio={1} my={{ base: '0', md: '0', lg: '20'}}>
                <Image
                    src="/images/sections/artCollective/ArtCollective.webp"
                    alt="Art Collective"
                    borderRadius="md"
                    objectFit="cover"
                    w="full"
                    h="full"
                />
            </AspectRatio>
            <Box flex="1" maxW="lg" ml={{ md: '8', lg: '16' }} my={{md: '10', lg: '20'}}>
                <Heading
                fontFamily="Rufina, serif"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                mb="4"
                color="black"
                >
                A Creative Art Collective
                </Heading>
                <Paragraph>
                Here&apos;s what we&apos;re all about:
                </Paragraph>
                <UnorderedList 
                    ml="10" 
                    mb="4" 
                    spacing={2} 
                    fontFamily="PT Serif"
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    lineHeight="tall"
                >
                    <ListItem>
                        <Text as="span">
                            <b>Virtual Events:</b> We host exciting virtual events that bring our community together.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text as="span">
                            <b>Art Collections:</b> We cherish and collect extraordinary pieces of art that amaze and inspire.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text as="span">
                            <b>Art Galleries:</b> We create, manage, and curate digital galleries to showcase our members&apos; incredible works.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text as="span">
                            <b>Tech Innovations:</b> We harness blockchain and web3 technologies to deliver advanced digital solutions, including smart contracts, DeFi applications, and DApps.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text as="span">
                            <b>Metaverse Development:</b> We craft unique Metaverse real estate and immersive digital experiences, from 3-D digital art galleries to engaging Metaverse events.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Paragraph>
                    But TaurosDAO is more than just a platform. It&apos;s a movement, where artists have the freedom to showcase their creativity, and collectors can discover and acquire exceptional pieces of art.
                </Paragraph>
                <Paragraph>
                    Want to get more involved? Awesome! You&apos;ll need a TAUROS Card. They come in three types - OG, Archon, and Guardian. Each comes with its own benefits and voting rights in our organization&apos;s governance. Check out the members page for more details.
                </Paragraph>
                <Paragraph>
                    Keen to explore more about us? Dive into Merca City or navigate through Labyrinthine Unreal in our docs section.
                </Paragraph>
                <Paragraph>
                    We can&apos;t wait to see you around!
                </Paragraph>

            </Box>
        </Flex>
    );
}
