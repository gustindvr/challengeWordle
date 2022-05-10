import { Box } from '@chakra-ui/react';
import React from 'react';

const Letter = ({ value, status }) => {
  return (
    <Box
      fontSize="2xl"
      padding="0.5em"
      margin="0.2em"
      w="2em"
      h="2em"
      display="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      className={`status-letter-${status}`}
      border="1px solid black"
    >
      {value}
    </Box>
  );
};

export default Letter;
