import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AudioPlayerProvider } from 'react-use-audio-player';
import 'styles/stylesheet.css';

function App({ Component, pageProps }) {
  const defaultTheme = createMuiTheme({
    typography: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontSize: 16,
    },
    palette: {
      background: {
        default: '#fcf1ef',
      },
      primary: {
        light: '#4488bf',
        dark: '#1e3647',
        main: '#e4b9a9',
      },
      warning: {
        light: '#f4f2c9',
        main: '#e3ba3f',
      },
      secondary: {
        main: '#fbe6dd',
      },
    },
  });
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <CssBaseline />
      <AudioPlayerProvider>
        <Component {...pageProps} />
      </AudioPlayerProvider>
    </MuiThemeProvider>
  );
};

export default App;
