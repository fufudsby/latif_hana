import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  typo: {
    fontWeight: 700,
    fontSize: 23,
    letterSpacing: 3,
    color: theme.palette.primary.main,
    transform: 'translateY(20px)',
    position: 'absolute',
    bottom: 0,
    left: theme.spacing(2),
  },
}));

const SectionOne = () => {
  console.log('render SectionOne');
  const classes = useStyles();
  return (
    <Box minHeight="100vh">
      <Box width={1} height={300} position="relative" marginX="auto">
        <Image
          src="/images/img-1.jpg"
          layout="fill"
          objectFit="cover"
        />
        <Typography
          classes={{root: classes.typo}}
        >
          SAVE OUR DATE
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(SectionOne);