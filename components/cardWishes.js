import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Title from 'components/title';

const useStyles = makeStyles((theme) => ({
  typo1: {
    fontSize: 16,
    letterSpacing: 0.8,
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
  },
  typo2: {
    fontSize: 16,
    letterSpacing: 0.8,
  },
}));

const CardWishes = ({ message }) => {
  const classes = useStyles();
  return (
    <Box paddingY={1}>
      <Typography classes={{root: classes.typo1}}>
        {message.name}
      </Typography>
      <Typography classes={{root: classes.typo2}}>
        {message.message}
      </Typography>
    </Box>
  );
};

export default memo(CardWishes);