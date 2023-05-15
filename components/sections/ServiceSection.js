import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import Paragraph from "../textStyles/Paragraph";

const services = [
    {
        title: "Web Development (frontend and backend)",
        description: "We create visually engaging websites, prioritizing user experience and functionality. From inception to launch, we ensure your site combines aesthetic appeal with a solid, high-performance foundation.",
        image: "/images/sections/services/Web-Design.webp",
    },
    {
        title: "Solidity Contracts (Testing & Deployment)",
        description: "Our team specializes in creating, testing, and deploying smart contracts using Solidity. We ensure secure, efficient, and transparent digital agreements that serve as a strong pillar for your blockchain-based business.",
        image: "/images/sections/services/Solidity-Contracts.webp",
    },
    {
        title: "Web2 and Web3 Backend Integration",
        description: "We bridge the gap between traditional web services and the decentralized web, ensuring your business is ready for the future. Our services include integrating existing web2 backends with emerging web3 technologies for seamless operation.",
        image: "/images/sections/services/Web2-and-Web3-Backend.webp",
    },
    {
        title: "Crypto Wallet Integration",
        description: "We facilitate seamless integration of cryptocurrency wallets into your platform, enabling easy and secure transactions for your users within the blockchain ecosystem.",
        image: "/images/sections/services/Crypto-Wallet-Integration.webp",
    },
    {
        title: "Non-Fungible Tokens",
        description: "From creation to marketplace integration, we provide comprehensive services in the realm of NFTs. This includes tokenizing digital assets, implementing NFT standards, and setting up NFT marketplaces.",
        image: "/images/sections/services/NFTs.webp",
    },
    {
        title: "2-D and 3-D Assets",
        description: "We create stunning 2-D and 3-D assets, whether you need individual elements or comprehensive collections. Our designs are geared towards enhancing the visual aesthetics and interactivity of your platform.",
        image: "/images/sections/services/2D-and-3D-Assets.webp",
    },
    {
        title: "Rarity Trait Generation",
        description: "We offer unique rarity trait generation services for your 3-D collections. This ensures that each piece in your collection maintains its uniqueness and value, fueling user excitement and engagement.",
        image: "/images/sections/services/Rarity-Trait-Generation.webp",
    },
    {
        title: "3-D Digital Art Galleries",
        description: "Experience our immersive 3-D digital art galleries, compatible with platforms like Oncyber, New Art City, and Spatial.io. We bring your digital art to life in a virtual space, fostering interactive and engaging experiences for your audience.",
        image: "/images/sections/services/3D-Art-Galleries.webp",
    },
    {
        title: "Metaverse Digital Events",
        description: "From concept to reality, we handle planning, organization, and execution of digital events in the Metaverse. Be it an art event, live music, puzzles, or games, we host them on a platform of your choice, or even in a dedicated section of Merca City.",
        image: "/images/sections/services/MetaVerse-Digital-Events.webp",
    },
    {
        title: "Music Genres to Choose From",
        description: "With a vast spectrum of music genres available, we cater to all tastes. Whether you prefer the rhythm of dub, the intensity of techno, the relaxed vibes of reggae, the dynamic beats of hip-hop, the energy of metal, the finesse of classical music, or the grandeur of opera, we've got you covered.",
        image: "/images/sections/services/Music-Genres.webp",
    }

];

export default function OurServicesSection() {
    return (
        <Box px={{ base: '8', md: '16', lg: '32' }} py={{ base: '8', md: '16', lg: '32' }} bgColor="rgb(149, 255, 238)">
            <Box maxW="600" mx="start">
                <Heading
                    fontFamily="Rufina, serif"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight="bold"
                    textAlign="left"
                    color="black"
                    mb="4"
                >
                    Our Services
                </Heading>
                <Paragraph>
                    At TaurosDAO, we serve as a catalyst in the web3 universe, offering a diverse array of services that empower both budding startups and established enterprises. We&apos;re not just service providers, but partners in your journey, helping you navigate the intricate labyrinth of blockchain, NFTs, metaverse and beyond. With our blend of creativity, technical expertise, and passion for innovation, we turn your ideas into tangible realities, propelling you to new digital frontiers.
                </Paragraph>
            </Box>

            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} pt={{ base: "8", md: '16', lg: "16" }}>
                {services.map((service, i) => (
                    <Box key={i}>
                        <Image
                            borderRadius="md"
                            mb="4"
                            src={service.image}
                            alt={service.title}
                            objectFit="cover"
                            w="384px"
                            h="384px"
                        />
                        <Heading size="lg" mb="2">
                            {service.title}
                        </Heading>
                        <Text fontSize="sm">
                            {service.description}
                        </Text>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}
