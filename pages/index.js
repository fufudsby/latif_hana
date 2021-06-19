import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, IconButton, CircularProgress } from '@material-ui/core';
import { useAudioPlayer } from 'react-use-audio-player';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import Landing from 'components/landing';
import SectionOne from 'components/sectionOne';
import SectionTwo from 'components/sectionTwo';
import SectionThree from 'components/sectionThree';
import SectionRSVP from 'components/sectionRSVP';
import { initializeApollo } from 'lib/apolloClient';
import { GET_MESSAGES } from 'graphql/message';
import { useRouter } from 'next/router';

const widthWindow = 500;
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: widthWindow,
    padding: 0,
  },
  boxContainer: {
    boxShadow: '0 0 48px 0 rgba(0,0,0,.2)',
    background: theme.palette.background.paper,
    '& .sectionTwo': {
      paddingBottom: theme.spacing(6),
    },
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

export default function Home({ data }) {
  console.log('messages', data);
  const classes = useStyles();
  const router = useRouter();
  const { to, shift } = router.query;
  const [ messages, setMessages ] = useState(data);
  const [ loading, setLoading ] = useState(false);
  const [ values, setValues ] = useState({});
  const [ success, setSuccess ] = useState(false);
  console.log('values', values);
  const handleChangeVal = useCallback((e) => {
    setValues({...values, [e.currentTarget.id]: e.currentTarget.value });
  }, [values]);
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    const v = await fetch(
      '/api/message/new',
      {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    const result = await v.json();
    console.log('result', result);
    if (result.createMessage) {
      setValues({});
      setSuccess(true);
    }
    setLoading(false);
  }, [values]);
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
        <Landing to={to} />
        <Box className="sectionOne">
          <SectionOne />
        </Box>
        <Box className="sectionTwo">
          <SectionTwo />
        </Box>
        <Box className="sectionThree">
          <SectionThree shift={shift} />
        </Box>
        <Box className="sectionRSVP">
          <SectionRSVP
            messages={messages}
            onChangeVal={handleChangeVal}
            onSubmit={handleSubmit}
            values={values}
            loading={loading}
            success={success}
          />
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
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  var messages = [];
  
  await apolloClient.query({
    query: GET_MESSAGES,
  }).then((v) => {
    messages = v.data.getMessages;
  }).catch(err => {
    console.log('Error', err);
  });

  return {
    props: { data: messages },
  };
};