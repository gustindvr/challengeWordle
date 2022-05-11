import React from 'react';

import { datagame, messages } from '../../../const';

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
          {messages?.map((message, index) => (
            <Center justifyContent='start' mt={2} mb={2} key={index}>
              <Icon path={mdiAlertDecagram} size={1} />
              <Text ml={5}>{message}</Text>
            </Center>
          ))}
          {datagame?.map((data, index) => (
            <Center mt={5} mb={5} justifyContent='start' key={index}>
              <Box w='40px' h='40px' bg={data?.bg} />
              <Text ml={5}>{data?.type}</Text>
            </Center>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalHelp;
