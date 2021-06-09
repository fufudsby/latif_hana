import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Title from 'components/title';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextIcon from 'components/textIcon';

const maxWidth = 330;
const useStyles = makeStyles((theme) => ({
  typo1: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: theme.spacing(0.15),
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
  }
}));

const SectionThree = ({ shift }) => {
  console.log('render SectionThree');
  const classes = useStyles();
  return (
    <Box paddingX={3}>
      <Title text="Resepsi &amp; Akad" />
      <Box marginBottom={5} marginX="auto" maxWidth={maxWidth}>
        <Typography
          classes={{root: classes.typo1}}
          variant="body1"
        >
          Akad Nikah
        </Typography>
        <TextIcon
          text="Minggu, 06 Juni 2020<br />Pukul 07.00 - Selesai"
          icon={<AccessTimeIcon fontSize="small" />}
        />
        <TextIcon
          text="Jl. Karangrejo Sawah IV No. 19 Surabaya, Jawa Timur"
          icon={<LocationOnIcon fontSize="small" />}
        />
      </Box>
      {shift == 'pagi' &&
        <Box marginX="auto" maxWidth={maxWidth}>
          <Typography
            classes={{root: classes.typo1}}
            variant="body1"
          >
            Resepsi
          </Typography>
          <TextIcon
            text="Minggu, 06 Juni 2020<br />Pukul 07.00 - Selesai"
            icon={<AccessTimeIcon fontSize="small" />}
          />
          <TextIcon
            text="Jl. Karangrejo Sawah IV No. 19 Surabaya, Jawa Timur"
            icon={<LocationOnIcon fontSize="small" />}
          />
        </Box>
      }
    </Box>
  );
};

export default memo(SectionThree);