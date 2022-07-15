import { Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Grid, GridItem, Center } from "@chakra-ui/react";
import MBE from "./MintButtonEstatesv2";
import MBT from "./MintButtonTaurosV2";
import * as s from "../../styles/globalStyles";
import styled from "styled-components";
// import MBE from "./MBE";

export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, presalePrice, salePrice, imageUrl, imageAlt, description, unclaimed, glb } = modalData || {};
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
      <ModalContent rounded="xl">
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
              {title == "MERCA CITY ESTATES" ? <MBE /> : <MBT />}
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