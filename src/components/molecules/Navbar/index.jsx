import React from 'react';

import {
  Button,
  Grid,
  GridItem,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';

import { mdiChartBoxOutline, mdiCog, mdiHelpCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import ModalHelp from '../ModalHelp';

const Navbar = ({ setOpenStats, openStats }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateColumns='repeat(3, 1fr)'
        pt='1em'
        className='text-shadow-letter'
      >
        <GridItem colSpan={1} left={0} ml='1em'>
          <Button>
            <Icon path={mdiHelpCircleOutline} size='2em' onClick={onOpen} />
          </Button>
        </GridItem>
        <GridItem colSpan={1} textAlign='center'>
          <Heading as='h1' size='lg'>
            Dynamic Wordle
          </Heading>
        </GridItem>
        <GridItem
          colSpan={1}
          textAlign='end'
          mr='1em'
          display='flex'
          flexFlow='row wrap'
          justifyContent='end'
        >
          <Icon
            path={mdiChartBoxOutline}
            size='2em'
            style={{ cursor: 'pointer' }}
            onClick={() =>
              openStats ? setOpenStats(false) : setOpenStats(true)
            }
          />
          <Icon path={mdiCog} size='2em' />
        </GridItem>
      </Grid>
      <ModalHelp isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
