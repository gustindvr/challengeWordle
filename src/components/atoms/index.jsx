import { Box } from '@chakra-ui/react';
import React from 'react';
import Letter from '../atoms/Letter';

const Word = ({ value, solution }) => {
  const validateSolution = (letter, pos) => {
    if (solution.includes(letter)) {
      if (solution[pos] === letter) {
        return 'correct';
      } else {
        return 'present';
      }
    } else {
      return 'absent';
    }
  };

  return (
    <Box display='flex' flexFlow='row wrap' justifyContent='center' w='100%'>
      {Array.from(Array(value?.length)).map((letter, index) => (
        <Letter
          key={index}
          value={value[index]}
          status={validateSolution(value[index], index)}
        />
      ))}
    </Box>
  );
};

export default Word;
