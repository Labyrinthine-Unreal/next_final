import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useToast, Flex } from "@chakra-ui/react";
import MintButtonTauros from "./MintButtonTauros"
import MintButtonEstates from "./MintButtonEstates"

export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, presalePrice, salePrice, imageUrl, imageAlt } = modalData || {};
  const toast = useToast();

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
        <ModalHeader>Product Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Flex w="full" h="300px" position="relative">
            <video
            autoPlay
            muted
            src={imageUrl}
            alt={imageAlt}
            objectfit="cover"
            layout="fill"
            />
            </Flex>
            <Box pt="3">
              <Box mt="3" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {title}
              </Box>
              <Box>{presalePrice}</Box>
              <Box>{salePrice}</Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="cyan.700" color="white" w="150px" h="200px" size="lg" 
            // onClick={handleModalClose}
            _hover={{ bg: "cyan.800" }}
          >
            {title == "MERCA CITY ESTATES" ? <MintButtonEstates /> : <MintButtonTauros />}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}