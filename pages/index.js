import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SimpleBottomNavigation from '../components/simplebottomnavigation'
import TwoUp from '../components/TwoUp'
import Deck from '../pages/cards/tindercard'
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';
// import '../styles/deck.css'

export default function Index() {
  return (
    <Deck />
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <TwoUp />
    //     <SimpleBottomNavigation />
    //   </Box>
    // </Container>
  )
}
