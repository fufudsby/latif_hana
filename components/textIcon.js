import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  text: {
    whiteSpace: 'pre-wrap',
    color: theme.palette.grey[800],
    '&.link': {
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
}));

const TextIcon = ({ text, icon, alignItems, link }) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems={alignItems ? alignItems : 'flex-start'} paddingBottom={1}>
      <Box paddingTop={0.5}>
        {icon}
      </Box>
      <Box paddingLeft={1}>
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
    </Box>
  );
};

export default memo(TextIcon);