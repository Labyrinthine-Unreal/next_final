import { Box, Text, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useToast, Flex, Grid } from "@chakra-ui/react";
import Refresh from "./Refresh";
import MBE from "./MintButtonEstatesv2";
import MBT from "./MintButtonTaurosV2";

// import MBE from "./MBE";

export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, presalePrice, salePrice, imageUrl, imageAlt } = modalData || {};
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
            <Grid templateColumns="repeat(2, 1fr)" gap={5} w="full%" h="300px" position="relative">
              <Box>
              <video
              autoPlay
              muted
              src={imageUrl}
              alt={imageAlt}
              objectfit="cover"
              layout="fill"
              />
              </Box>
              <Flex>
                <Text>Merca City is a Metaverse/RTS Game where players own their assets.</Text>
              </Flex>
            </Grid>
            <Box>
              <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {title}
              </Box>
              <Box>{presalePrice}</Box>
              <Box>{salePrice}</Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Box>
            {title == "MERCA CITY ESTATES" ? <MBE /> : <MBT />}
            <Refresh />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}