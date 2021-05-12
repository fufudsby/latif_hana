import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, IconButton, CircularProgress } from '@material-ui/core';
import { useAudioPlayer } from 'react-use-audio-player';
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
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      '& svg.MuiSvgIcon-root': {
        fontSize: 22,
      },  
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const AudioPlayer = () => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src: '/audio/sabda_alam.mp3',
        format: 'mp3',
        autoplay: true,
    });
    if (!ready && !loading) return null;
    if (loading) {
      return (
        <IconButton color="primary">
          <CircularProgress size={20} thickness={4.5} />
        </IconButton>
      );
    }
    return (
      <IconButton color="primary" onClick={togglePlayPause}>
        {playing ? (
          <VolumeOffRoundedIcon size="small" />
        ) : (
          <VolumeUpRoundedIcon size="small" />
        )}
      </IconButton>
    );
  };
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
        <Box className="sectionTwo">
          <SectionTwo />
        </Box>
      </Box>
      <Box
        position="fixed"
        bottom={0}
        className={classes.audioControl}
        display="flex"
        justifyContent="flex-end"
      >
        <AudioPlayer />
      </Box>
    </Container>
  )
}
