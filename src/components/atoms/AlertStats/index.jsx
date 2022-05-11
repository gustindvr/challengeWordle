import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const AlertStats = ({ statsData }) => {
  return (
    <Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
      bg='transparent'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Tus estadísticas
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        <Text>Ganados: {statsData?.winner}</Text>
        <Text>Perdidos: {statsData?.loses}</Text>
      </AlertDescription>
    </Alert>
  );
};

export default AlertStats;
