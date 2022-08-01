import React from 'react'
import { Box, useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Input } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import {getAllWhitelist ,createWhitelistItem } from '@src/api';
import {useToast} from '@chakra-ui/react'

export default function AllowList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [whitelistDetail, setWhitelistDetail] = useState('');
    const [whitelist, setwhitelist] = useState([]);
    const toast = useToast()

    function handleWhitelistDetailChange(event) {
      console.log(event.target.value);
      setWhitelistDetail(event.target.value);
    }
    function handleSubmit(event) {
      toast({
        title: 'Submission Successful',
        description: "Whitelist Submission Succesful",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      // event.preventDefault();
      event.preventDefault();
      createWhitelistItem(whitelistDetail).then(res => {
        console.log('Whitelist details added to the database');
      });
    }
    function resetInputField() {
      setWhitelistDetail('');
    }
    useEffect(() => {
      getAllWhitelist.then(res => {
        setwhitelist(res);
        console.log(res);
      });
    }, []);
  
    return (
      <Box pl={5} pb={4}>
        <Button colorScheme="teal" onClick={onOpen}>Enter Allowlist</Button>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Paste in your address & save</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Input 
              type="text" 
              name={whitelistDetail}
              value={whitelistDetail}
              placeholder="Enter your address here"
              onChange={handleWhitelistDetailChange}
               />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleSubmit}>
                Save
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    )
  }