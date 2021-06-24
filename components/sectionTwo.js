import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import Title from 'components/title';

const useStyles = makeStyles((theme) => ({
  avatar: {
    maxWidth: theme.spacing(30),
    maxHeight: theme.spacing(30),
    width: '85%',
    height: '85%',
  },
  name: {
    fontFamily: `'Playfair Display', serif`,
    fontSize: '22px',
    lineHeight: 1.3,
    marginBottom: theme.spacing(1.5),
  },
  desc: {
    maxWidth: 300,
    lineHeight: 1.2,
    fontSize: '16px',
    color: theme.palette.grey[600],
    '& span': {
      padding: theme.spacing(1.5, 0, 0),
      display: 'block',
      fontWeight: 600,
      color: theme.palette.grey[800],
    },
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
            Latif Hendra Sukmana, S.Ikom.
          </Typography>
          <Typography variant="body1" classes={{root: classes.desc}}>
            Putra Bapak Herry Suherman, S.H. dan Ibu Purwati, S.H.
            <span>Solo</span>
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" paddingY={3}>
        <Avatar src="/images/img3.jpg" classes={{root: classes.avatar}} />
        <Box marginTop={3} paddingX={2} maxWidth="420px" textAlign="center">
          <Typography variant="h4" classes={{root: classes.name}}>
            Rohana Zuraida, S.Ikom.
          </Typography>
          <Typography variant="body1" classes={{root: classes.desc}}>
            Putri Bapak Mahmudi, S.Pd., M.Si. dan Ibu Elfi Ida Istiqomah, S.Pd.
            <span>Madiun</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(SectionTwo);