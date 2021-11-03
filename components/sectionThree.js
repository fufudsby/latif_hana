import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import Title2 from 'components/title2';
import TextIcon from 'components/textIcon';
import Gallery from 'components/gallery';
import Covid19 from 'components/covid19';

const useStyles = makeStyles((theme) => ({
  typo1: {
    position: 'relative',
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: 0.8,
    letterSpacing: theme.spacing(0.15),
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
    color: theme.palette.background.paper,
  },
  note: {
    '& p': {
      fontSize: 15,
      letterSpacing: 0.8,
    },
  },
  gridItem: {
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    '&:before': {
      content: `''`,
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      background: theme.palette.primary.dark,
      opacity: 0.3,
    },
  },
  bgImg: {
    background: `url('/images/bg_section3.png') no-repeat center bottom`,
    backgroundSize: 'auto 100%',
    position: 'relative',
    // '&:before': {
    //   content: `''`,
    //   position: 'absolute',
    //   left: 0,
    //   bottom: 0,
    //   width: '100%',
    //   height: '30px',
    //   background: `url('/images/bgSeparate.png') no-repeat center top`,
    //   backgroundSize: '100% 100%',
    //   transform: 'scaleY(-1)',
    // },
    // '&:after': {
    //   content: `''`,
    //   position: 'absolute',
    //   left: 0,
    //   top: 0,
    //   width: '100%',
    //   height: '30px',
    //   background: `url('/images/bgSeparate.png') no-repeat center top`,
    //   backgroundSize: '100% 100%',
    // },
  },
}));

const SectionThree = () => {
  console.log('render SectionThree');
  const classes = useStyles();
  return (
    <>
      <Box paddingX={3} paddingY={12} className={classes.bgImg}>
        <Title2 text="Resepsi &amp; Akad" isDark={true} />
        <Box className={classes.gridItem} marginTop={4} marginBottom={2}>
          <Typography
            classes={{root: classes.typo1}}
            variant="body1"
          >
            Akad Nikah
          </Typography>
          <TextIcon
            text="Rabu, 21 Juli 2021<br />Pukul 07.00 - Selesai"
            isDark={true}
          />
          <TextIcon
            text="Kediaman mempelai wanita"
            isDark={true}
          />
          <Box fontStyle="italic" className={classes.note}>
            <TextIcon
              text="* Khusus keluarga"
              isDark={true}
            />
          </Box>
        </Box>
        <Box className={classes.gridItem}>
          <Typography
            classes={{root: classes.typo1}}
            variant="body1"
          >
            Resepsi
          </Typography>
          <TextIcon
            text="Minggu, 14 November 2021<br />Pukul 12.00 - 13.00"
            isDark={true}
          />
          <TextIcon
            text="Gedung Asrama Haji Kota Madiun, Jl. Ring Road Barat, Manguharjo, Kota Madiun"
            link="https://www.google.com/maps/place/Wisma+H.+Kota+Madiun,+Jl.+Ring+Road+Barat,+Ngegong,+Kec.+Manguharjo,+Kota+Madiun,+Jawa+Timur+63125/@-7.6070356,111.5148691,17z/data=!4m2!3m1!1s0x2e79bfae51c34d55:0x56ae96045e3f2685"
            isDark={true}
          />
        </Box>
      </Box>
      <Covid19 />
      <Gallery />
    </>
  );
};

export default memo(SectionThree);