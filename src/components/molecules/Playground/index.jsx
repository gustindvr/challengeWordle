import React from 'react';

import { Container, Text } from '@chakra-ui/react';

import Word from '../../atoms/index';
import Current from '../../atoms/Current';

const Playground = ({ gameStats, gameStatus, word, currentWord }) => {
  return (
    <Container maxW='100vw' textTransform='uppercase' justifyContent='center'>
      {gameStats === [] && <Text>Comencemos</Text>}
      {gameStats?.map((currentWord, index) => (
        <Word value={currentWord} solution={word} key={index} />
      ))}

      {gameStatus === 'playing' ? (
        <Current value={word} currentWord={currentWord} />
      ) : null}
    </Container>
  );
};

export default Playground;
