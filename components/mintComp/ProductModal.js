import { Box, Text, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useToast, Flex, Grid, Stack, VStack, HStack, Container, Center, Divider } from "@chakra-ui/react";
import MintButtonTauros from "./MintButtonTauros"
import MintButtonEstates from "./MintButtonEstates"

export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, presalePrice, salePrice, imageUrl, imageAlt, description, unclaimed } = modalData || {};
  // const toast = useToast();

  // const handleModalClose = () => {
    // toast({
    //   title: "Purchase successsful.",
    //   description: "Fashion ++",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true,
    // });
  //   setTimeout(() => {
  //     onClose();
  //   }, 1000);
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Grid templateColumns="repeat(2, 1fr)" gap={5} w="full%" position="relative" height={{base: "280", md: "350"}}>
              <Box>
                <video
                  autoPlay
                  muted
                  src={imageUrl}
                  alt={imageAlt}
                  objectfit="cover"
                  layout="fill"
                />
                <Box fontSize={{base: "12px", md: "18px"}} my={5}>
                  <Box fontWeight="semibold" as="h4" lineHeight="tight" layout="fill">
                    {title}
                  </Box>
                  <Box>{presalePrice}</Box>
                <Box>{salePrice}</Box>
              </Box>
              </Box>
              <Flex overflow="scroll" fontSize={{base: "12px", md: "16px"}}>
                {description}
              </Flex>
            </Grid>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Grid templateColumns="repeat(2, 1fr)" my={5} columnGap={10} w="full" h="full" alignItems="flex-end" fontSize={{base: "12px", md: "18px"}}>
            {unclaimed}
              <Center align="center">
                {title == "MERCA CITY ESTATES" ? <MintButtonEstates /> : <MintButtonTauros />}
              </Center>
          </Grid>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}