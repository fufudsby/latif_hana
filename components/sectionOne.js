import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
}));

const SectionOne = () => {
  console.log('render SectionOne');
  const classes = useStyles();
  return (
    <Box height="100vh">
      tes
    </Box>
  );
};

export default memo(SectionOne);