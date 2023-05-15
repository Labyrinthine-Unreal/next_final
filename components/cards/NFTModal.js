// src/components/cards/NFTModal.js
import { Box, Modal, ModalOverlay, ModalContent,Spacer, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Grid, GridItem } from "@chakra-ui/react";
import MBE from "../mint/MintButtonEstatesV2";
import MBT from "../mint/MintButtonTaurosV2";
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
          height="125"
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(9, 1fr)'
        >
          <GridItem rowSpan={3} colSpan={2}>
            <video
                    controls
                    src={imageUrl}
                    alt={imageAlt}
                    objectfit="cover"
                    layout="fill"
                  />
          </GridItem>
          <GridItem rowSpan={2} colSpan={4} boxShadow="inner" pl="4" rounded="2xl" textColor="teal.700" textShadow='0.5px 0.5px gray'>
            <Box fontSize={{base: "14px", md: "20px"}} fontWeight="semibold">{title}</Box>
            <Box fontWeight="light" fontSize={{base: "13px", md: "18px"}}>
              {/* <Box>{title == "MERCA CITY ESTATE" ? free : salePrice}</Box> */}
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