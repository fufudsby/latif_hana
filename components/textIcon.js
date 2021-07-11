import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  text: {
    whiteSpace: 'pre-wrap',
    color: theme.palette.grey[800],
    fontSize: 16,
    letterSpacing: 0.8,
    '&.link': {
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
}));

const TextIcon = ({ text, link }) => {
  const classes = useStyles();
  return (
    <Box paddingBottom={1}>
      {link ? (
        <Link href={link}>
          <a className={`link ${classes.text}`} target="_blank">
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </a>
        </Link>
      ) : (
        <Typography variant="body2" classes={{root: classes.text}}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </Typography>
      )}
    </Box>
  );
};

export default memo(TextIcon);