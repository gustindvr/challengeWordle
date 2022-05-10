import React, { useState } from 'react';

import Navbar from './components/molecules/Navbar';

import { elemToPlay } from './const';
import Keyboard from './components/molecules/Keyboard';
import Playground from './components/molecules/Playground';
import { Box, useToast } from '@chakra-ui/react';

function App() {
  const [word, setWord] = useState(elemToPlay.toUpperCase());
  const [turn, setTurn] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [gameStats, setGameStats] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const toast = useToast();

  const validateLength = (item) => {
    console.log(item.length);
    console.log(word.length);
    if (item.length > word?.length) {
      toast({
        variant: 'subtle',
        title: 'Exceso',
        description: 'Te pasaste por pocas letras',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else if (item.length + 3 > word?.length) {
      toast({
        variant: 'subtle',
        title: 'Exceso',
        description: 'Te pasaste por más de 3 letras, mínimo',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else if (item.length < word?.length) {
      toast({
        variant: 'subtle',
        title: 'Faltante',
        description: 'Te faltan pocas letras',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else if (item.length < word?.length - 3) {
      toast({
        variant: 'subtle',
        title: 'Faltante',
        description: 'Te faltan más de 3 letras, mínimo',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const onFinish = () => {
    if (currentWord === word) {
      setGameStats([...gameStats, currentWord]);
      setGameStatus('winner');
    }

    if (turn === word?.length) {
      setGameStats([...gameStats, currentWord]);
      setGameStatus('loser');
    }

    if (gameStatus !== 'playing') return;

    validateLength(currentWord);
    setGameStats([...gameStats, currentWord]);
    setTurn(turn + 1);
    setCurrentWord('');
  };

  return (
    <>
      <Navbar />
      <Box mt='2em' mb='5em' minH='40vh'>
        <Playground
          gameStats={gameStats}
          gameStatus={gameStatus}
          word={word}
          currentWord={currentWord}
        />
      </Box>
      <Box display='flex' justifyContent='center' mb='1em'>
        <Keyboard
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          onfinish={() => onFinish()}
        />
      </Box>
    </>
  );
}

export default App;
