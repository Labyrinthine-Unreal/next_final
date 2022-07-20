import { Box, Text, Modal, ModalOverlay, ModalContent,Spacer, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Grid, GridItem, Center } from "@chakra-ui/react";
import MBE from "./MintButtonEstatesv2";
import MBT from "./MintButtonTaurosV2";
import * as s from "../../styles/globalStyles";
import styled from "styled-components";
import EstatesBalance from "./EstatesBalance";
import EstatesClaimed from "./EstatesClaimed";
export default function ProductModal({ isOpen, onClose, modalData }) {
  const { title, free, presalePrice, salePrice, imageUrl, imageAlt, description, unclaimed, glb } = modalData || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent rounded="xl">
        <ModalCloseButton />
        <ModalHeader>{title == "MERCA CITY ESTATE" ? "dNFT Details" : "NFT Details"}</ModalHeader>
        <ModalBody>
        <Grid
          height={{base: "140", md: "125"}}
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(9, 1fr)'
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
          <GridItem rowSpan={2} colSpan={4} boxShadow="inner" pl="4" rounded="2xl" textColor="teal.700" textShadow='0.5px 0.5px gray'>
            <Box fontSize={{base: "14px", md: "20px"}} fontWeight="semibold">{title}</Box>
            <Box fontWeight="light" fontSize={{base: "13px", md: "18px"}}>
              <Box>{title == "MERCA CITY ESTATE" ? free : salePrice}</Box>
              {/* <Box>{presalePrice}</Box>
              <Box>{salePrice}</Box> */}
              {title == "MERCA CITY ESTATE" && <EstatesBalance/>}
              {title == "MERCA CITY ESTATE" && <EstatesClaimed/>}
            </Box>
          </GridItem>
        </Grid>
        </ModalBody>
        <ModalFooter>
          <Spacer />

            <Box pb="10">
            {title == "MERCA CITY ESTATE" ? <MBE /> : <MBT />}
            </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}