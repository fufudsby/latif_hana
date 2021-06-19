import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import CardWishes from 'components/cardWishes';

const useStyles = makeStyles((theme) => ({
  typo1: {
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: 2,
    textAlign: 'center',
  },
}));

const Wishes = ({ messages }) => {
  const classes = useStyles();
  return (
    <Box paddingY={3}>
      <Typography classes={{root: classes.typo1}}>
        Wishes
      </Typography>
      {messages.length > 0 && messages.map((d, i) => (
        <CardWishes key={i} message={d} />
      ))}
    </Box>
  );
};

export default memo(Wishes);