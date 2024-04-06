import React from 'react';
import "./ModalInfo.css"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'


// export default function ChakraBasic() {
//     return (
//         <div className="ChakraBasic">
//             testing
           
//         </div>
//     );
// }

export default function ModalInfo(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <div className="chakra">
        <Button onClick={onOpen}>{props.data["name"]}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.data["address"]}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
     
      </div>
      </>
    )
  }