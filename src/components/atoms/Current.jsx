import React from 'react';

import { Box } from '@chakra-ui/react';

import Letter from '../atoms/Letter';

const Current = (Props) => {
  const { value, currentWord } = Props;

  return (
    <Box display='flex' flexFlow='row wrap' justifyContent='center' w='100%'>
      {currentWord?.split('').map((letter, index) => (
        <Letter key={index} value={letter} status='edit' />
      ))}
      {Array.from(Array(currentWord?.length - currentWord?.length)).map(
        (letter, index) => (
          <Letter key={index} value='' status='empty' />
        )
      )}
    </Box>
  );
};

export default Current;
