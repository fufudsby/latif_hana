import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import Title from 'components/title';
import TextIcon from 'components/textIcon';
import Gallery from 'components/gallery';
import Covid19 from 'components/covid19';

const useStyles = makeStyles((theme) => ({
  typo1: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: 0.8,
    letterSpacing: theme.spacing(0.15),
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
  },
  note: {
    '& p': {
      fontSize: 15,
      letterSpacing: 0.8,
    },
  },
  gridItem: {
    position: 'relative',
    '&.with-line': {
      '&:before': {
        content: `''`,
        position: 'absolute',
        top: '50%',
        right: 6,
        width: 1,
        height: '84%',
        background: theme.palette.grey[700],
        transform: 'translateY(-50%)',
      },  
    },
  },
}));

const SectionThree = ({ shift }) => {
  console.log('render SectionThree');
  const classes = useStyles();
  return (
    <>
      <Box paddingX={3}>
        <Title text="Resepsi &amp; Akad" />
        <Grid container spacing={3}>
          <Grid item xs={shift ? 6 : 12} className={`${classes.gridItem} ${shift ? 'with-line' : ''}`}>
            <Typography
              classes={{root: classes.typo1}}
              variant="body1"
            >
              Akad Nikah
            </Typography>
            <TextIcon
              text="Rabu, 21 Juli 2021<br />Pukul 07.00 WIB - Selesai"
            />
            <TextIcon
              text="Kediaman mempelai wanita"
            />
            <Box fontStyle="italic" className={classes.note}>
              <TextIcon
                text="* Khusus keluarga"
              />
            </Box>
          </Grid>
          {shift == 'pagi' &&
            <Grid item xs={6}>
              <Typography
                classes={{root: classes.typo1}}
                variant="body1"
              >
                Resepsi
              </Typography>
              <TextIcon
                text="Minggu, 08 Agustus 2021"
              />
              <TextIcon
                text="Gedung Asrama Haji Kota Madiun, Jawa Timur"
                link="https://www.google.com/maps/place/Wisma+H.+Kota+Madiun,+Jl.+Ring+Road+Barat,+Ngegong,+Kec.+Manguharjo,+Kota+Madiun,+Jawa+Timur+63125/@-7.6070356,111.5148691,17z/data=!4m2!3m1!1s0x2e79bfae51c34d55:0x56ae96045e3f2685"
              />
            </Grid>
          }
        </Grid>
      </Box>
      <Gallery />
      <Covid19 />
    </>
  );
};

export default memo(SectionThree);