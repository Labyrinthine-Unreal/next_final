import { Box, Text, Modal, ModalOverlay, ModalContent,Spacer, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Grid, GridItem, Center } from "@chakra-ui/react";
import MBE from "./MintButtonEstatesv2";
import MBT from "./MintButtonTaurosV2";
import * as s from "../../styles/globalStyles";
import styled from "styled-components";
// import EstatesBalance from "./EstatesBalance";

export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, free, presalePrice, salePrice, imageUrl, imageAlt, description, unclaimed, glb } = modalData || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent rounded="xl">
        <ModalCloseButton />
        <ModalHeader>Details</ModalHeader>
        <ModalBody>
        <Grid
          height={{base: "250", md: "280"}}
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
            <Box fontSize={{base: "14px", md: "20px"}} fontWeight="semibold">{title}</Box>
            <Box fontWeight="light" fontSize={{base: "13px", md: "18px"}}>
              <Box>{free}</Box>
              <Box>{presalePrice}</Box>
              <Box>{salePrice}</Box>
            </Box>
          </GridItem>
        </Grid>
        </ModalBody>
        <ModalFooter>
          <Spacer />
            {/* <EstatesBalance/> */}
            {title == "MERCA CITY ESTATE" ? <MBE /> : <MBT />}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}