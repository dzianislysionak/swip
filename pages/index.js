import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimpleBottomNavigation from '../components/simplebottomnavigation'
import TwoUp from '../components/TwoUp'
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TwoUp />
        <SimpleBottomNavigation />
        
      </Box>
    </Container>
  );
}