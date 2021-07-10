import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Slider from 'react-slick';

const useStyles = makeStyles((theme) => ({
  container: {
    '& .slick-track': {
      display: 'flex',
      '& .slick-slide': {
        minWidth: '180px',
        '& .img-container': {
          height: theme.spacing(38),
          padding: theme.spacing(0, 0.3),
          '& img': {
            maxHeight: '100%',
            maxWidth: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        },
      },
    },
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const settings = {
    className: 'slider variable-width',
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  return (
    <Box className={classes.container} paddingTop={7} paddingBottom={3}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
          <div key={v} className="img-container">
            <img src={`/images/img/img${v}.jpg`} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default memo(Gallery);