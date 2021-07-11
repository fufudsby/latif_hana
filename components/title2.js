import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: 600,
    letterSpacing: 2,
    lineHeight: 1.2,
    textAlign: 'center',
  },
}));

const Title2 = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography variant="body1" classes={{root: classes.title}}>
      {text}
    </Typography>
  );
};

export default memo(Title2);