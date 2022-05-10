import React from 'react';
import LetterKeyboard from './letterKeyboard';

import { Button, Flex, SimpleGrid } from '@chakra-ui/react';

import {
  letterColumnOne,
  letterColumnTwo,
  letterColumnThree,
} from '../../../const';

const Keyboard = ({ currentWord, setCurrentWord, onfinish }) => {
  const deleteLetter = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  };

  return (
    <SimpleGrid>
      <Flex
        w='100%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flexFlow='row wrap'
      >
        {letterColumnOne.map((letter, i) => {
          return (
            <LetterKeyboard
              value={letter?.letter?.toUpperCase()}
              key={i}
              setCurrentWord={setCurrentWord}
              currentWord={currentWord}
            />
          );
        })}
      </Flex>
      <Flex
        w='100%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flexFlow='row wrap'
      >
        {letterColumnTwo.map((letter, i) => {
          return (
            <LetterKeyboard
              value={letter?.letter?.toUpperCase()}
              key={i}
              setCurrentWord={setCurrentWord}
              currentWord={currentWord}
            />
          );
        })}
      </Flex>
      <Flex
        w='100%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flexFlow='row wrap'
      >
        <Button bg='var(--bg-letters-dark)' w='4em' onClick={() => onfinish()}>
          Enter
        </Button>
        {letterColumnThree.map((letter, i) => {
          return (
            <LetterKeyboard
              value={letter?.letter?.toUpperCase()}
              key={i}
              setCurrentWord={setCurrentWord}
              currentWord={currentWord}
            />
          );
        })}
        <Button bg='var(--bg-letters-dark)' w='4em' onClick={deleteLetter}>
          Delete
        </Button>
      </Flex>
    </SimpleGrid>
  );
};

export default Keyboard;
