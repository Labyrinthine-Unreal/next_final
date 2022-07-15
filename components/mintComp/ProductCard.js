import { Box, Flex } from "@chakra-ui/react";

export default function ProductCard({ product, setModalData }) {
  const { imageUrl, imageAlt, title, presalePrice, salePrice } = product;

  return (
    <Flex
      maxW="300px"
      h="full"
      textAlign="left"
      cursor="pointer"
      bg="white"
      rounded="xl"
      shadow="lg"
      border="1px solid white" p={0.5}
      borderWidth="1px"
      onClick={() => setModalData(product)}
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
    </Flex>
  );
}