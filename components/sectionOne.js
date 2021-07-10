import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  boxContent: {
    background: theme.palette.background.default,
    transform: 'translateY(-50px)',
    padding: theme.spacing(4, 0),
  },
  boxTitle: {
    margin: theme.spacing(0, 4),
    '& h6': {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: 2,
      color: theme.palette.primary.main,
    },
    '& h5': {
      fontFamily: `'Playfair Display', serif`,
      fontSize: '28px',
      lineHeight: 1.3,
      margin: theme.spacing(1, 0),
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
        padding: theme.spacing(0, 4),
      },
    },
  },
  carouselItem: {
    textAlign: 'left',
    padding: theme.spacing(3, 0),
    '& .MuiTypography-root': {
      paddingBottom: theme.spacing(1.5),
      color: theme.palette.grey[800],
    },
  },
}));

const SectionOne = () => {
  console.log('render SectionOne');
  const classes = useStyles();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="flex-end">
      <Box width={1} height={300} position="relative" marginX="auto">
        <Image
          src="/images/img/img2.jpg"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box width="96%" className={classes.boxContent}>
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