import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import Landing from 'components/landing';
import SectionOne from 'components/sectionOne';
import SectionTwo from 'components/sectionTwo';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 500,
    padding: 0,
  },
  boxContainer: {
    boxShadow: '0 0 48px 0 rgba(0,0,0,.2)',
    background: theme.palette.background.paper,
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container classes={{root: classes.container}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        className={classes.boxContainer}
        overflow="hidden"
        minHeight="100vh"
      >
        <Landing />
        <Box className="sectionOne">
          <SectionOne />
        </Box>
      </Box>
    </Container>
  )
}
