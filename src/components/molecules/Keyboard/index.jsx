import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import Letter from '../../atoms/Letter';

import {
  letterColumnOne,
  letterColumnTwo,
  letterColumnThree,
} from '../../../const/keyboard';

const Keyboard = ({ setLetterSelected }) => {
  return (
    <>
      <Flex
        w='70%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flexFlow='row wrap'
      >
        {letterColumnOne.map((letter) => {
          return (
            <Letter
              value={letter.toUpperCase()}
              key={letter}
              setLetterSelected={setLetterSelected}
            />
          );
        })}
      </Flex>
      <Flex
        w='70%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flexFlow='row wrap'
      >
        {letterColumnTwo.map((letter) => {
          return (
            <Letter
              value={letter.toUpperCase()}
              key={letter}
              setLetterSelected={setLetterSelected}
            />
          );
        })}
      </Flex>
      <Flex
        w='70%'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flexFlow='row wrap'
      >
        <Button
          bg='var(--bg-letters-dark)'
          w='4em'
          onClick={() => console.log('mandando las letras elegidas a jugar')}
        >
          Enter
        </Button>
        {letterColumnThree.map((letter) => {
          return (
            <Letter
              value={letter.toUpperCase()}
              key={letter}
              setLetterSelected={setLetterSelected}
            />
          );
        })}
        <Button
          bg='var(--bg-letters-dark)'
          w='4em'
          onClick={() => console.log('borrando ultima letra')}
        >
          Delete
        </Button>
      </Flex>
    </>
  );
};

export default Keyboard;
