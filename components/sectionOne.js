import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  bgGradient: {
    background: 'linear-gradient(180deg, rgba(228,185,169,0.7511204310825893) 0%, rgba(252,241,239,0) 40%)',
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
    textAlign: 'justify',
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
            Sebuah Cerita
          </Typography>
          <Typography variant="h5">
            Sesuatu yang Mungkin Kau Belum Tahu
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
              <Typography variant="body2"><strong>Untuk: Hana</strong></Typography>
              <Typography variant="body2">Kaulah istriku, yang percaya pada hal-hal sepele dan paling remeh dari mimpi-mimpiku. Yang tidak peduli pada hal-hal yang disanjung orang lain dariku, tapi begitu memperhatikan hal-hal yang tak dilihat orang lain dari diriku. “Orang lain mana tahu kalau kamu suka joget-joget waktu mandi,” katamu suatu hari, “Mereka juga nggak tahu kalau ambil baju selalu bikin berantakan dan nggak nutup lemari,”</Typography>
              <Typography variant="body2">Kemudian kamu menutup lemari baju, sembari mengomel “Hmmm..  Kebiasaan.. Latif Hendra Sukmana, angel nemen dikandani,”. Aku masih masih mengeringkan rambut saat itu, saat kamu bertanya, “Hari ini mau dibuatin sarapan apa?”. Kepalaku menyembul dari dalam kamar, melihatmu yang sedang sibuk merapikan tumpukan baju. “Terserah,” jawabku.</Typography>
            </div>
            <div className={classes.carouselItem}>
              <Typography variant="body2">Saat orang lain memuji hal yang tampak di permukaan, mereka tidak pernah memperhatikan hal-hal yang membuat semua itu ada. Karena semua yang kamu lakukan padahal hal lainnya, yang lebih hebat dari semua itu.</Typography>
              <Typography variant="body2">Kaulah istriku, yang selalu menatapku dengan cara yang berbeda dari cara orang lain memandangku. Yang memperlakukanku tidak seperti orang lain memperlakukannya. Yang berbicara padaku dengan bahasa yang tidak diucapkan siapapun lagi di dunia ini. Yang percaya pada semua mimpi-mimpiku, sebodoh apapun itu.</Typography>
            </div>
            <div className={classes.carouselItem}>
              <Typography variant="body2"><strong>Untuk: Mas Latif</strong></Typography>
              <Typography variant="body2">“Beruntung banget ya kamu, Han. Hubungannya seru banget. Ada saja yang bikin hidup suasana,” kata seorang temanku. Kadang aku juga merasa sebel kalau ada yang bilang begitu. Mereka tidak tahu saja bahwa kamu itu seringkali sangat menyebalkan. Mereka juga tidak tahu saja bahwa terkadang hubungan kita pun seringkali penuh drama. Begitulah risiko seorang anak tunggal yang menikahi anak laki-laki pertama sekaligus cucu pertama di keluarganya.</Typography>
              <Typography variant="body2">Mereka yang mengira kamu sering menggombaliku setiap hari, tidak pernah tahu bahwa caramu bicara kepadaku lebih sering tanpa tata bahasa yang sempurna. Misalnya, “Yang, jam tangan,” itu artinya kamu bertanya di mana kacamatamu. Atau “Yang, aku budrek,” itu artinya kamu mau minta waktu me time dengan bermain PS4 tanpa diganggu.</Typography>
            </div>
            <div className={classes.carouselItem}>
              <Typography variant="body2">Dan sering juga sambil menunjuk sebuah barang, kamu bilang “Yang, itunya tolong anuin,” yang artinya kamu minta aku untuk melakukan sesuatu, entah men-charge baterai handphone atau mengambilkan sesuatu. Meskipun kadang-kadang kamu cuma ketawa-ketawa saat aku tegur berulang kali, tapi ikutan marah kalau aku cuekin. Aku tidak apa-apa. Aku tahu pengorbanan dan hal yang telah kamu lalui lebih berat dariku.</Typography>
              <Typography variant="body2">Kalau kamu mau tahu, sejak jadi istrimu banyak hal yang harus aku sesuaikan dalam hidupku, karena banyak kekacauan terjadi di sana. Tiba-tiba aku harus berdoa ribuan kali lebih banyak, sujud lebih lama, seringkali menangis diam-diam, khawatir berlebihan. Karena aku takut hal buruk menimpamu atau ketidakberuntungan merundungmu.</Typography>
              <Typography variant="body2">Hm.. seandainya suami—suami tahu, pikiran dan perasaan seorang istri kadang-kadang sekacau itu. Tapi tetap saja, mencintaimu adalah kekacauan paling indah di hidupku.</Typography>
            </div>
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(SectionOne);