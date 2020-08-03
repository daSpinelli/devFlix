import React from 'react';
import Menu from '../../components/menu';
import BannerMain from '../../components/bannerMain';
import Carousel from '../../components/carousel';
import Footer from '../../components/footer';
import videoSetup from '../../assets/data/video_setup.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={videoSetup.category[0].videos[0].title}
        url={videoSetup.category[0].videos[0].url}
        videoDescription="O que é Front-end?"
      />

      {/* {videoSetup.map(
        (cat) => (
          <Carousel
            ignoreFirstVideo
            category={cat}
          />
        ),
      )} */}

      <Carousel
        ignoreFirstVideo
        category={videoSetup.category[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.category[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.category[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.category[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.category[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.category[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
