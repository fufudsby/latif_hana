import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  container: {
    background: `${theme.palette.background.default} url('/images/img/img10.jpg') no-repeat center center`,
    backgroundSize: 'auto 120%',
  },
  name: {
    fontSize: 92,
    color: theme.palette.background.paper,
    lineHeight: 0.8,
    width: '92%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 'auto'),
    position: 'relative',
    textShadow: `0 3px 15px ${theme.palette.primary.dark}`,
    '& span': {
      fontSize: 36,
      margin: theme.spacing(0, 2.5),
    },
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 18,
    color: theme.palette.primary.dark,
    letterSpacing: 2,
    margin: theme.spacing(1, 0),
    '& span': {
      display: 'block',
      padding: theme.spacing(0, 1.5),
      position: 'relative',
      '&:before': {
        content: `''`,
        position: 'absolute',
        width: 5,
        height: 5,
        backgroundColor: theme.palette.primary.dark,
        left: 0,
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
      },
      '&:first-child:before': {
        display: 'none',
      },
    },
  },
  toGuest: {
    fontSize: 16,
    color: theme.palette.background.paper,
    fontStyle: 'italic',
    letterSpacing: 2,
    textTransform: 'capitalize',
    textShadow: `0 0px 5px ${theme.palette.primary.dark}`,
  },
  button: {
    fontSize: 15,
    marginTop: theme.spacing(3),
    borderRadius: '50%',
    letterSpacing: 10,
    lineHeight: 1.3,
    textAlign: 'center',
    padding: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden',
    position: 'relative',
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '92%',
      height: '92%',
      border: `1px solid ${theme.palette.background.paper}`,
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      '& div': {
        transform: 'translateX(5px)',
        whiteSpace: 'pre-line',
      },
    }
  },
}));

const Landing = ({ to, playMusic }) => {
  console.log('render Landing');
  const classes = useStyles();
  const playMusicOn = () => {
    playMusic();
  };
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      paddingY={5}
      className={classes.container}
    >
      <Box
        width={1}
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={1} marginBottom={3}>
          <Typography
            className="custom-font"
            classes={{root: classes.name}}
          >
            Latif <span>&amp;</span> Hana
            {/* <span>&amp;</span> */}
          </Typography>
          {/* <Typography
            className="custom-font"
            classes={{root: classes.name}}
            style={{textAlign: 'right'}}
          >
            Hana
          </Typography> */}
        </Box>
        {/* <Typography
          classes={{root: classes.date}}
        >
          <span>08</span>
          <span>23</span>
          <span>2021</span>
        </Typography> */}
        <Typography
          classes={{root: classes.toGuest}}
        >
          To {to ? to : 'Guest'}
        </Typography>
      </Box>
      <Button
        type="button"
        disableElevation
        fullWidth
        classes={{root: classes.button}}
        
      >
        <Link
          to="sectionOne"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div onClick={() => playMusicOn()}>{'OP\nEN'}</div>
        </Link>
      </Button>
    </Box>
  );
};

export default memo(Landing);