import React from 'react';

import {
  Box,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Icon from '@mdi/react';

import { mdiAlertDecagram } from '@mdi/js';

const ModalHelp = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>¿Como jugar?</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' flexFlow='column wrap'>
          <Center justifyContent='start'>
            <Icon path={mdiAlertDecagram} size={1} />
            <Text ml={5}>Tu objetivo es adivinar la palabra del día</Text>
          </Center>
          <Center mt={5} justifyContent='start'>
            <Icon path={mdiAlertDecagram} size={1} />
            <Text ml={5}>No sabrás cuantas letras tiene</Text>
          </Center>
          <Center mt={5} justifyContent='start'>
            <Icon path={mdiAlertDecagram} size={1} />
            <Text ml={5}>Tendrás pequeñas ayudas tras cada intento</Text>
          </Center>
          <Center mt={5} mb={5} justifyContent='start'>
            <Icon path={mdiAlertDecagram} size={1} />
            <Text ml={5}>Las palabras están en español</Text>
          </Center>
          <Center mt={5} mb={5} justifyContent='start'>
            <Box w='40px' h='40px' bg='var(--bg-correct-letter)' />
            <Text ml={5}>Correcto</Text>
          </Center>
          <Center mt={5} mb={5} justifyContent='start'>
            <Box w='40px' h='40px' bg='var(--bg-absent-letter)' />
            <Text ml={5}>No existe</Text>
          </Center>
          <Center mt={5} mb={5} justifyContent='start'>
            <Box w='40px' h='40px' bg='var(--bg-present-letter)' />
            <Text ml={5}>Lugar incorrecto</Text>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalHelp;
