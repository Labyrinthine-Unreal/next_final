import { Box, Text, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useToast, Flex, Grid, GridItem, Stack, VStack, HStack, Container, Center, Divider } from "@chakra-ui/react";
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
        <Grid
          height={{base: "389", md: "470"}}
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(9, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={5}>
            <video
                    autoPlay
                    muted
                    src={imageUrl}
                    alt={imageAlt}
                    objectfit="cover"
                    layout="fill"
                  />
          </GridItem>
          <GridItem rowSpan={1} colSpan={4}>
            <Text lineHeight="tight" layout="fill">
              <Box fontWeight="semibold" fontSize={{base: "14px", md: "18px"}}>{title}</Box>
              <Box fontSize={{base: "12px", md: "16px"}}>Price: {salePrice}</Box>
              <Box fontSize={{base: "12px", md: "16px"}}>{presalePrice}</Box>
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5}>
          <Box fontSize={{base: "12px", md: "16px"}}>
                {unclaimed}
            </Box>
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