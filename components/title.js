import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: 600,
    letterSpacing: 2,
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    marginBottom: theme.spacing(3),
    position: 'relative',
    '& span': {
      position: 'absolute',
      left: '50%',
      bottom: '55%',
      width: '36px',
      transform: 'translate(-50%)',
      '& img': {
        width: '100%',
      },
    },
  },
}));

const Title = ({ text }) => {
  console.log('render Title');
  const classes = useStyles();
  return (
    <Typography variant="h4" classes={{root: classes.title}}>
      {text}
      <span>
        <img src="/images/2195597.png" />
      </span>
    </Typography>
  );
};

export default memo(Title);