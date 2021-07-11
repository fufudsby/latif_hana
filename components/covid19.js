import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import Title2 from 'components/title2';

const useStyles = makeStyles((theme) => ({
  img: {
    height: 88,
  },
  text: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    whiteSpace: 'pre-wrap',
    fontSize: 15,
    letterSpacing: 0.5,
  },
}));

const vImg = [
  'cek_suhu.png',
  'masker.png',
  'cuci_tangan.png',
  'jaga_jarak.png',
];

const vText = [
  'Suhu tubuh di bawah 27.5 ºC',
  'Wajib memakai masker',
  'Wajib cuci tangan',
  'Menjaga jarak\n1-1.5 meter',
];

const Covid19 = () => {
  console.log('render SectionThree');
  const classes = useStyles();
  return (
    <Box paddingY={3} paddingX={3}>
      <Title2 text="Protokol Pernikahan Masa Adaptasi Kebiasaan Baru" />
      <Box marginTop={4}>
        <Grid container spacing={3}>
          {[0, 1, 2, 3].map((v) => (
            <Grid item xs={6} key={v}>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <img src={`/images/${vImg[v]}`} className={classes.img} />
                <Typography variant="body2" className={classes.text}>
                  {vText[v]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(Covid19);