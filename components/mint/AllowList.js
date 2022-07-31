import React from 'react'
import { Box, useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Input } from '@chakra-ui/react'
import { useState } from 'react';
import { createWhitelistItem } from '@src/api';
export default function AllowList() {
    // const useStyles = makeStyles({
    //   root: {
    //     marginTop: 80,
    //     margin: 20,
    //     flexGrow: 1
    //   },
    //   list: {
    //     marginTop: 20
    //   }
    // });
    // const classes = useStyles();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [whitelistDetail, setWhitelistDetail] = useState('');
    const [whitelist, setwhitelist] = useState([]);

    function handleWhitelistDetailChange(event) {
      console.log(event.target.value);
      setWhitelistDetail(event.target.value);
    }
    function handleSubmit(event) {
      // event.preventDefault();
      event.preventDefault();
      createWhitelistItem(whitelistDetail).then(res => {
        console.log('Whitelist details added to the database');
      });
    }
    function resetInputField() {
      setWhitelistDetail('');
    }

  
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