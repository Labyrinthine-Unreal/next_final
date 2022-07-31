import React from 'react'
import { Box, useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Input } from '@chakra-ui/react'

export default function AllowList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <Box pt={5}>
        <Button variant="outline" onClick={onOpen}>Enter Allowlist</Button>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Paste in your address & save</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Input type="text" />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Save
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    )
  }