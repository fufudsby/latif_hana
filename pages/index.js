import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, IconButton } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import Landing from 'components/landing';
import SectionOne from 'components/sectionOne';
import SectionTwo from 'components/sectionTwo';

const widthWindow = 500;
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: widthWindow,
    padding: 0,
  },
  boxContainer: {
    boxShadow: '0 0 48px 0 rgba(0,0,0,.2)',
    background: theme.palette.background.paper,
  },
  audioControl: {
    left: '50%',
    maxWidth: widthWindow,
    width: '100%',
    transform: `translateX(-50%)`,
    pointerEvents: 'none',
    '& .MuiIconButton-root': {
      pointerEvents: 'visible',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [ muted, setMuted ] = useState(false);
  const handleMuted = () => {
    setMuted(!muted);
  };
  return (
    <Container classes={{root: classes.container}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReactAudioPlayer
        src="/audio/sabda_alam.ogg"
        autoPlay
        loop={true}
        muted={muted}
      />
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
      <Box
        position="fixed"
        bottom={0}
        className={classes.audioControl}
        display="flex"
        justifyContent="end"
      >
        <IconButton color="primary" onClick={handleMuted}>
          {muted ? (
            <VolumeUpRoundedIcon size="small" />
          ) : (
            <VolumeOffRoundedIcon size="small" />
          )}
        </IconButton>
      </Box>
    </Container>
  )
}
