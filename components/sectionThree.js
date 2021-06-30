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
  },
  note: {
    '& p': {
      fontSize: 15,
    },
  },
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
          text="Rabu, 21 Juli 2021<br />Pukul 07.00 WIB - Selesai"
          icon={<AccessTimeIcon fontSize="small" />}
        />
        <TextIcon
          text="Lokasi kediaman mempelai wanita"
          icon={<LocationOnIcon fontSize="small" />}
          alignItems="center"
        />
        <Box fontStyle="italic" className={classes.note}>
          <TextIcon
            text="* Khusus keluarga"
            icon="&nbsp;&nbsp;&nbsp;&nbsp;"
            alignItems="center"
          />
        </Box>
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
            text="Minggu, 08 Agustus 2021"
            icon={<AccessTimeIcon fontSize="small" />}
            alignItems="center"
          />
          <TextIcon
            text="Gedung Asrama Haji Kota Madiun, Jawa Timur"
            link="https://www.google.com/maps/place/Wisma+H.+Kota+Madiun,+Jl.+Ring+Road+Barat,+Ngegong,+Kec.+Manguharjo,+Kota+Madiun,+Jawa+Timur+63125/@-7.6070356,111.5148691,17z/data=!4m2!3m1!1s0x2e79bfae51c34d55:0x56ae96045e3f2685"
            icon={<LocationOnIcon fontSize="small" />}
          />
        </Box>
      }
    </Box>
  );
};

export default memo(SectionThree);