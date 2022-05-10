import React from 'react';
import { Text } from '@chakra-ui/react';

const LetterKeyboard = Props => {
  const { value, currentWord, setCurrentWord } = Props;

  return (
    <Text
      textAlign="center"
      verticalAlign="middle"
      borderRadius="lg"
      bgColor="var(--bg-letters-dark)"
      w="2em"
      h="2em"
      m="1em"
      cursor="pointer"
      onClick={() => setCurrentWord(currentWord + value)}
    >
      {value}
    </Text>
  );
};

export default LetterKeyboard;
