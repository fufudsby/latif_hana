import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import Title from 'components/title';

const useStyles = makeStyles((theme) => ({
  avatar: {
    maxWidth: theme.spacing(33),
    maxHeight: theme.spacing(33),
    width: '85%',
    height: '85%',
  },
  name: {
    fontFamily: `'Playfair Display', serif`,
    fontSize: '28px',
    lineHeight: 1.3,
    marginBottom: theme.spacing(2),
  },
  desc: {
    fontSize: '16px',
  },
}));

const SectionTwo = () => {
  console.log('render SectionOne');
  const classes = useStyles();
  return (
    <Box minHeight="100vh">
      <Title text="Once upon a time" />
      <Box display="flex" flexDirection="column" alignItems="center" paddingY={3}>
        <Avatar src="/images/img2.jpg" classes={{root: classes.avatar}} />
        <Box marginTop={3} paddingX={2} maxWidth="420px" textAlign="center">
          <Typography variant="h4" classes={{root: classes.name}}>
            John Henry
          </Typography>
          <Typography variant="body1" classes={{root: classes.desc}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque.
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" paddingY={3}>
        <Avatar src="/images/img3.jpg" classes={{root: classes.avatar}} />
        <Box marginTop={3} paddingX={2} maxWidth="420px" textAlign="center">
          <Typography variant="h4" classes={{root: classes.name}}>
            Carol Colin
          </Typography>
          <Typography variant="body1" classes={{root: classes.desc}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(SectionTwo);