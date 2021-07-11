import React, { memo } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import CardWishes from 'components/cardWishes';
import Title2 from 'components/title2';

const Wishes = ({ messages, loadingMessage }) => {
  return (
    <Box paddingY={3}>
      <Title2 text="Wishes" />
      {messages.length > 0 && messages.map((d, i) => (
        <CardWishes key={i} message={d} />
      ))}
      {loadingMessage &&
        <Box display="flex" justifyContent="center" paddingTop={3} paddingBottom={1.5}>
          <CircularProgress size={22} thickness={4.5} />
        </Box>
      }
    </Box>
  );
};

export default memo(Wishes);