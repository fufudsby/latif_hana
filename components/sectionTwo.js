import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
}));

const SectionTwo = () => {
  console.log('render SectionOne');
  const classes = useStyles();
  return (
    <Box height="100vh">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Box>
  );
};

export default memo(SectionTwo);