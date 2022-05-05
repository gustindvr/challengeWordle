import { useContext, useState } from 'react';

import { Box, Divider } from '@chakra-ui/react';

import Navbar from './components/molecules/Navbar';
import { ThemeContext } from './components/contexts/ThemeContext';
import Keyboard from './components/molecules/Keyboard';

function App() {
  const [letterSelected, setLetterSelected] = useState(undefined);

  const { themeSelected } = useContext(ThemeContext);

  return (
    <Box backgroundColor={themeSelected.background} color={themeSelected.color}>
      <Navbar />
      <Divider />
      <Keyboard setLetterSelected={setLetterSelected} />
    </Box>
  );
}

export default App;
