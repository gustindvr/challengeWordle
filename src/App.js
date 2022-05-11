import React, { useState } from 'react';

import Navbar from './components/molecules/Navbar';
import Keyboard from './components/molecules/Keyboard';
import Playground from './components/molecules/Playground';
import ModalGame from './components/organisms/Modal';

import { Box, Heading, Text, useDisclosure, useToast } from '@chakra-ui/react';

import { elemToPlay, dictionary } from './const';
import AlertStats from './components/atoms/AlertStats';

const App = () => {
  const [word, setWord] = useState(elemToPlay.toUpperCase());
  const [turn, setTurn] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [gameStats, setGameStats] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');
  const [letterExact, setLetterExact] = useState(false);
  const [dataModal, setDataModal] = useState(undefined);
  const [openModalGame, setopenModalGame] = useState(undefined);
  const [openStats, setOpenStats] = useState(undefined);
  const [statsData, setStatsData] = useState(
    JSON.parse(localStorage.getItem('stats'))
  );

  const toast = useToast();
  const { onOpen, isOpen, onClose } = useDisclosure();

  /**
   * It validates the length of the word.
   * @returns the length of the word.
   */
  const validateLength = (item) => {
    if (word?.length < item.length) {
      toast({
        duration: 3000,
        isClosable: true,
        position: 'top',
        render: () => (
          <Box bg='rgba( 255, 216, 216 , 0.2)' p={3} textAlign='center'>
            <Heading as='p' fontSize='md' bg='transparent'>
              Menos es más
            </Heading>
            <Text bg='transparent'>Muchas letras</Text>
          </Box>
        ),
      });
      return;
    }

    if (item.length < word?.length) {
      toast({
        title: 'Faltante',
        duration: 3000,
        isClosable: true,
        position: 'top',
        render: () => (
          <Box bg='rgba( 255, 216, 216 , 0.2)' p={3} textAlign='center'>
            <Heading as='p' fontSize='md' bg='transparent'>
              Más es menos
            </Heading>
            <Text bg='transparent'>Te faltan algunas letras</Text>
          </Box>
        ),
      });
      return;
    }

    if (item.length === word?.length && !letterExact) {
      toast({
        duration: 3000,
        isClosable: true,
        position: 'top',
        render: () => (
          <Box bg='rgba( 255, 216, 216 , 0.2)' p={3} textAlign='center'>
            <Heading as='p' fontSize='md' bg='transparent'>
              El punto justo
            </Heading>
            <Text bg='transparent'>Ni más ni menos letras</Text>
          </Box>
        ),
      });
      setLetterExact(true);
      return;
    }
  };

  /**
   * It checks if the current word is equal to the word to guess, if it is, it sets the game status to
   * winner, if not, it checks if the turn is equal to the length of the word to guess, if it is, it sets
   * the game status to loser, if not, it validates the length of the current word, increments the turn
   * by one and sets the current word to an empty string
   * @returns the current word, the turn and the game status.
   */
  const onFinish = () => {
    if (currentWord === word) {
      setGameStats([...gameStats, currentWord]);
      setGameStatus('winner');
      setDataModal({
        title: 'Ganaste!',
        message: 'Se agregó un punto a tu lista de victorias.',
        messageButton: 'Seguir jugando',
      });
      setStatsData({
        ...statsData,
        winner: statsData?.winner + 1,
      });

      setopenModalGame(onOpen);
    }

    if (turn === word?.length) {
      setGameStats([...gameStats, currentWord]);
      setGameStatus('loser');
      setDataModal({
        title: 'Lo lamento',
        message: 'No te alcanzaron los turnos. Más suerte la próxima vez',
        messageButton: 'Volver a jugar',
      });
      setStatsData({
        ...statsData,
        loses: statsData?.loses + 1,
      });
      setopenModalGame(onOpen);
    }

    if (gameStatus !== 'playing') return;

    validateLength(currentWord);
    setGameStats([...gameStats, currentWord]);
    setTurn(turn + 1);
    setCurrentWord('');
    window.localStorage.setItem('stats', JSON.stringify(statsData));
  };

  const resetGame = () => {
    const newRandomValue = Math.floor(Math.random() * dictionary.length);
    const newValue = dictionary?.[newRandomValue];

    onClose();

    setWord(newValue.toUpperCase());
    setCurrentWord('');
    setGameStatus('playing');
    setTurn(0);
    setGameStats([]);
  };

  return (
    <>
      {openStats && <AlertStats statsData={statsData} />}
      <Navbar setOpenStats={setOpenStats} openStats={openStats} />
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

      <ModalGame
        openModalGame={openModalGame}
        dataModal={dataModal}
        isOpen={isOpen}
        onClose={onClose}
        setWord={setWord}
        resetGame={resetGame}
      />
    </>
  );
};

export default App;
