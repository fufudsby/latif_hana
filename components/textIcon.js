import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    whiteSpace: 'pre-wrap',
  },
}));

const TextIcon = ({ text, icon }) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="flex-start" paddingBottom={1}>
      <Box paddingTop={0.5}>
        {icon}
      </Box>
      <Box paddingLeft={1}>
        <Typography variant="body2" classes={{root: classes.text}}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(TextIcon);