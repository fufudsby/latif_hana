import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, TextField, Button, Typography } from '@material-ui/core';
import { getSession } from 'lib/session';
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
  },
  form: {
    width: '90%',
    maxWidth: 360,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#FFF',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
  },
}));

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const [ values, setValues ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const handleChangeVal = useCallback((e) => {
    setValues({...values, [e.currentTarget.id]: e.currentTarget.value });
  }, [values]);
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetch(
      '/api/login',
      {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    const result = await data.json();
    console.log('result', result);
    if (result.statusCode == 'success') {
      router.push('/check', '/check');
    } else {
      setLoading(false);
    }
  }, [values]);
  return (
    <Container classes={{root: classes.container}}>
      <Head>
        <title>Login App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        className={classes.boxContainer}
        overflow="hidden"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <form className={classes.form} noValidate>
          <Typography classes={{root: classes.title}}>Login App</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="off"
            autoFocus
            size="small"
            disabled={loading}
            onChange={handleChangeVal}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            size="small"
            disabled={loading}
            onChange={handleChangeVal}
          />
          <Button
            type="button"
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req, res, withReturn: true });
  if (session) {
    return res.writeHead(302, {
      Location: '/',
    })
    .end();
  } else {
    return {
      props: {},
    };
  }
};