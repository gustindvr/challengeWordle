import React from 'react';

import { Button, Grid, GridItem, Heading } from '@chakra-ui/react';

import { mdiChartBoxOutline, mdiCog, mdiHelpCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

const Navbar = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' pt='1em'>
      <GridItem colSpan={1} left={0} ml='1em'>
        <Button>
          <Icon path={mdiHelpCircleOutline} size='2em' />
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
        <Icon path={mdiChartBoxOutline} size='2em' />
        <Icon path={mdiCog} size='2em' />
      </GridItem>
    </Grid>
  );
};

export default Navbar;
