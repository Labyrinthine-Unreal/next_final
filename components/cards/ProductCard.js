import { Box } from "@chakra-ui/react";

export default function ProductCard({ product, setModalData }) {
  const { imageUrl, imageAlt, title, free, presalePrice, salePrice, active } = product;

  return (
    <Box
      maxW="350px"
      h="full"
      textAlign="left"
      cursor="pointer"
      bg="white"
      rounded="xl"
      boxShadow='dark-lg'
      filter='auto'
      brightness='90%'
      p={2}
      borderWidth="1px"
      onClick={() => setModalData(product)}
      _hover={{
        bg: "white",
        color: "teal",
        transition: "transform 0.15s ease-in-out",
        transform: "scale3d(1.05, 1.05, 1.05)",
        boxShadow: 'dark-lg',
        brightness: '100%'
      }}
      >
      <Box w="full" h="full">
        <Box
          w="100%"
          height="300px"
          position="relative"
          overflow="hidden"
          roundedTop="lg"
        >
        <video
            autoPlay
            muted
            src={imageUrl}
            alt={imageAlt}
            objectfit="cover"
            layout="fill"
            />
        </Box>
        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight">
            {title}
          </Box>
            <Box>{free}</Box>
            <Box>{presalePrice}</Box>
            <Box>{salePrice}</Box>
            <Box pt={5}>{active}</Box>
        </Box>
      </Box>
    </Box>
  );
}
