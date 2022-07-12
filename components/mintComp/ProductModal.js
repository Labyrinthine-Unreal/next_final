import { Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Grid, GridItem, Center } from "@chakra-ui/react";
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
      <ModalContent layout="fill">
        <ModalCloseButton />
        <ModalHeader>Details</ModalHeader>
        <ModalBody>
        <Grid
          height={{base: "380", md: "470"}}
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(9, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={3} colSpan={5}>
            <video
                    autoPlay
                    muted
                    src={imageUrl}
                    alt={imageAlt}
                    objectfit="cover"
                    layout="fill"
                  />
          </GridItem>
          <GridItem rowSpan={3} colSpan={4}>
            <Text lineHeight="tight" layout="fill">
              <Box fontWeight="semibold" fontSize={{base: "14px", md: "18px"}}>{title}</Box>
              <Box fontSize={{base: "12px", md: "16px"}}>Price: {salePrice}</Box>
              <Box fontSize={{base: "12px", md: "16px"}}>{presalePrice}</Box>
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5}>
          <Text align="left" fontSize={{base: "16px", md: "16px"}}>
                {unclaimed}
          </Text>
          <Text pt={5} color="red.600" fontWeight='semibold'>Free Mint ends on July 30th!</Text>
            
          </GridItem>
          <GridItem rowSpan={1} colSpan={4}>
            <Center align="center">
              {title == "MERCA CITY ESTATES" ? <MintButtonEstates /> : <MintButtonTauros />}
            </Center>
          </GridItem>
        </Grid>
                </ModalBody>
                <ModalFooter>
                      
                </ModalFooter>
              </ModalContent>
    </Modal>
  );
}


{/* <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Details</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Grid templateColumns="repeat(2, 1fr)" gap={5} w="full%" position="relative" height="340">
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
                    {unclaimed}
                </Box>
              </Box>
                <Flex>
                  <Text lineHeight="tight" layout="fill">
                    <Box pb={1} fontWeight="semibold" fontSize={{base: "14px", md: "18px"}}>{title}</Box>
                    <Box fontSize={{base: "12px", md: "16px"}}>Price: {salePrice}</Box>
                    <Box fontSize={{base: "12px", md: "16px"}}>{presalePrice}</Box>
                    <Box py={10} fontSize={{base: "14", md: "18"}}><Text>Free Mint ends on July 30th!</Text></Box>
                    <Flex align="center">
                      <Center py={10} align="center">
                        {title == "MERCA CITY ESTATES" ? <MintButtonEstates /> : <MintButtonTauros />}
                      </Center>
                    </Flex>
                  </Text>
                </Flex>
            </Grid>
          </Box>
          
        </ModalBody>
        <ModalFooter>
              
        </ModalFooter>
      </ModalContent>
    </Modal> */}