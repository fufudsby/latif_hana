import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  name: {
    fontSize: 125,
    color: theme.palette.primary.main,
    lineHeight: 0.8,
    width: '90%',
    maxWidth: 250,
    margin: theme.spacing(0, 'auto'),
    position: 'relative',
    '& span': {
      fontSize: 15,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      transform: 'translateY(-30px)',
      letterSpacing: 4,
      paddingLeft: theme.spacing(2),
    },
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 18,
    color: theme.palette.primary.main,
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
        backgroundColor: theme.palette.primary.main,
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
    color: theme.palette.primary.main,
    fontStyle: 'italic',
    letterSpacing: 2,
    textTransform: 'capitalize',
  },
  button: {
    fontSize: 12,
    marginTop: theme.spacing(5),
    borderRadius: 0,
    maxWidth: 250,
    letterSpacing: 2,
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

const Landing = () => {
  console.log('render Landing');
  const classes = useStyles();
  const router = useRouter();
  const { to } = router.query;
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      paddingY={5}
      className={classes.container}
    >
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        <Box width={1} marginBottom={1}>
          <Typography
            className="custom-font"
            classes={{root: classes.name}}
            style={{textAlign: 'left'}}
          >
            Latif
            <span>AND</span>
          </Typography>
          <Typography
            className="custom-font"
            classes={{root: classes.name}}
            style={{textAlign: 'right'}}
          >
            Hana
          </Typography>
        </Box>
        <Typography
          classes={{root: classes.date}}
        >
          <span>08</span>
          <span>23</span>
          <span>2021</span>
        </Typography>
        <Typography
          classes={{root: classes.toGuest}}
        >
          To {to ? to : 'Guest'}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        color="primary"
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
          Open Invitation
        </Link>
      </Button>
    </Box>
  );
};

export default memo(Landing);