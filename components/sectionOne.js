import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  bgGradient: {
    background: 'linear-gradient(180deg, rgba(228,185,169,0.7511204310825893) 0%, rgba(252,241,239,1) 40%)',
  },
  boxContent: {
    padding: theme.spacing(4, 0),
    width: '100%',
  },
  boxTitle: {
    margin: theme.spacing(0, 2.5),
    '& h6': {
      fontSize: '13px',
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: 2,
      color: theme.palette.primary.main,
    },
    '& h5': {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.3,
      margin: theme.spacing(1, 0),
      letterSpacing: 0.8,
    },
    // '&:before': {
    //   content: `''`,
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: 2,
    //   height: 50,
    //   background: theme.palette.primary.main,
    //   transform: 'translateX(-20px)',
    // },
  },
  carousel: {
    '& .carousel': {
      paddingBottom: theme.spacing(3),
      '& ul.control-dots li': {
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.main,
      },
      '& ul.slider li.slide': {
        padding: theme.spacing(0, 2.5),
      },
    },
  },
  carouselItem: {
    textAlign: 'left',
    letterSpacing: 0.8,
    padding: theme.spacing(3, 0),
    '& .MuiTypography-root': {
      paddingBottom: theme.spacing(1.5),
      color: theme.palette.grey[800],
    },
  },
  imgTop: {
    width: '90%',
    height: 230,
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
  },
}));

const SectionOne = () => {
  console.log('render SectionOne');
  const classes = useStyles();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="flex-end" className={classes.bgGradient}>
      <Box
        position="relative"
        marginX="auto"
        marginTop={3}
        className={classes.imgTop}
      >
        <Image
          src="/images/img/img6.jpg"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box className={classes.boxContent}>
        <Box position="relative" className={classes.boxTitle}>
          <Typography variant="h6">
            The Story
          </Typography>
          <Typography variant="h5">
            Everything You Wanted To Know About
          </Typography>
        </Box>
        <Box className={classes.carousel}>
          <Carousel
            showThumbs={false}
            dynamicHeight={false}
            infiniteLoop={false}
            autoPlay={false}
            showArrows={false}
            showStatus={false}
          >
            <div className={classes.carouselItem}>
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
              <Typography variant="body2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </div>
            <div className={classes.carouselItem}>
              <Typography variant="body2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
              <Typography variant="body2">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</Typography>
            </div>
            <div className={classes.carouselItem}>
              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
              <Typography variant="body2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </div>
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(SectionOne);