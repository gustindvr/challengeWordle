import React from 'react';

import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

const ModalGame = ({ openModalGame, isOpen, onClose, dataModal, setWord }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{dataModal?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{dataModal?.message}</ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Salir
          </Button>
          <Button
            variant='outline'
            _hover={{
              background: 'var(--principal-dark-text)',
              color: 'var(--principal-dark-bg)',
            }}
            onClick={() => window?.location?.reload()}
          >
            {dataModal?.messageButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalGame;
