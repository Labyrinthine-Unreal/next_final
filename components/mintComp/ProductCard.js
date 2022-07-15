import { Box } from "@chakra-ui/react";

export default function ProductCard({ product, setModalData }) {
  const { imageUrl, imageAlt, title, presalePrice, salePrice } = product;

  return (
    <Box
      maxW="350px"
      h="full"
      textAlign="left"
      cursor="pointer"
      bg="white"
      rounded="xl"
      shadow="lg"
      p={2}
      borderWidth="1px"
      onClick={() => setModalData(product)}
      opacity="0.9"
      _hover={{
        bg: "white",
        color: "teal.500",
        opacity: "1",
        transition: "transform 0.15s ease-in-out",
        transform: "scale3d(1.05, 1.05, 1.05)",
        boxShadow: 'dark-lg'
      }}
      _focus={{
        bg: "white",
        boxShadow: "outline",
        borderColor: "gray.300"}}
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
          <Box>{salePrice}</Box>
          <Box>{presalePrice}</Box>
        </Box>
      </Box>
    </Box>
  );
}