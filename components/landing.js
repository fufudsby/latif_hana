import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
  },
  name: {
    fontSize: 130,
    color: theme.palette.warning.light,
    lineHeight: 0.8,
    width: '90%',
    maxWidth: 250,
    margin: theme.spacing(0, 'auto'),
    position: 'relative',
    display: 'flex',
    alignItems: 'end',
    '& span': {
      fontSize: 15,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      transform: 'translateY(-30px)',
      letterSpacing: 4,
    },
  },
  date: {
    display: 'flex',
    fontSize: 20,
    color: theme.palette.warning.light,
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
        backgroundColor: theme.palette.warning.light,
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
    fontSize: 18,
    color: theme.palette.warning.light,
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  button: {
    fontSize: 14,
    marginTop: theme.spacing(5),
    padding: theme.spacing(1.3, 1),
    borderRadius: 0,
    maxWidth: 250,
    letterSpacing: 2,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

const Landing = () => {
  console.log('render Landing');
  const classes = useStyles();
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className={classes.container}
    >
      <Box width={1}>
        <Typography
          className="custom-font"
          classes={{root: classes.name}}
          style={{justifyContent: 'space-between'}}
        >
          Latif
          <span>AND</span>
        </Typography>
        <Typography
          className="custom-font"
          classes={{root: classes.name}}
          style={{justifyContent: 'end'}}
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
        To Rizkia Nurjannah
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
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