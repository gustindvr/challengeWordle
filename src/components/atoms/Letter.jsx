import { Box } from '@chakra-ui/react';
import React from 'react';

const Letter = (Props) => {
  const { value, setLetterSelected } = Props;

  return (
    <Box
      textAlign='center'
      verticalAlign='middle'
      borderRadius='lg'
      bgColor='var(--bg-letters-dark)'
      w='2em'
      h='2em'
      m='1em'
      cursor='pointer'
      onClick={() => setLetterSelected(value)}
    >
      {value}
    </Box>
  );
};

export default Letter;
