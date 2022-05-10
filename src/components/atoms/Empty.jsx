import { Box } from '@chakra-ui/react';
import React from 'react';
import Letter from '../Letter/Letter';

const Empty = ({ value }) => {
  return (
    <Box display="flex" flexFlow="row wrap" justifyContent="center" w="100%">
      {Array.from(Array(value?.length)).map((_, index) => (
        <Letter key={index} value="" status="empty" />
      ))}
    </Box>
  );
};

export default Empty;
