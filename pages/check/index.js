import React, { useState, useCallback, createContext, useMemo } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { getSession } from 'lib/session';
import { initializeApollo } from 'lib/apolloClient';
import { GET_ALL_MESSAGES } from 'graphql/message';
import CardMessages from 'components/cardMessages';

export const GlobalContext = createContext({});
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
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Check({ data }) {
  console.log('DATA', data);
  const classes = useStyles();
  const [ loading, setLoading ] = useState(false);
  const [ messages, setMessages ] = useState(data);
  const [ messageId, setMessageId ] = useState();
  const handleUpdateStatus = useCallback(async (e, id, isActive) => {
    e.preventDefault();
    setLoading(true);
    setMessageId(id);
    const v = await fetch(
      `/api/message/${id}`,
      {
        body: JSON.stringify({ isActive: !isActive }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }
    );
    const result = await v.json();
    console.log('v', result);
    if (result.data) {
      setMessages((c) =>
        c.map((item) => {
          if (item.id == id) {
            item.isActive = !isActive;
            return { ...item };
          }
          return item;
        }),
      );
    }
    setLoading(false);
  }, []);
  const memoizedValue = useMemo(() => ({
    data: messages,
    loading,
    handleUpdateStatus,
}), [messages, loading, handleUpdateStatus]);
const memoBackdrop = useMemo(() => {
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" size={25} />
    </Backdrop>
  );
}, [loading]);
  return (
    <Container classes={{root: classes.container}}>
      <Head>
        <title>Administrator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        className={classes.boxContainer}
        minHeight="100vh"
        paddingY={3}
      >
        <Typography classes={{root: classes.title}}>Messages</Typography>
        <Box paddingX={2}>
          <GlobalContext.Provider value={memoizedValue}>
            <CardMessages context={GlobalContext} messageId={messageId} />
          </GlobalContext.Provider>
        </Box>
      </Box>
      {memoBackdrop}
    </Container>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req, res });
  const apolloClient = initializeApollo();
  var messages = [];
  await apolloClient.query({
    query: GET_ALL_MESSAGES,
    context: { headers: session },
  }).then((v) => {
    messages = v.data.getAllMessages;
  }).catch(err => {
    console.log('Error', err);
  });
  return {
    props: {
      data: messages,
    },
  };
};