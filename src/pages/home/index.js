import React from 'react';
import Menu from '../../components/menu';
import BannerMain from '../../components/bannerMain';
import Carousel from '../../components/carousel';
import Footer from '../../components/footer';
import video_setup from '../../assets/data/video_setup.json'


function Home() {
  return (
    <div style = {{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle = {video_setup.category[0].videos[0].title}
        url = {video_setup.category[0].videos[0].url}
        videoDescription = {"O que é Front-end?"}
      />

      {/*}
      {video_setup.map(
        (cat, index) => {
          return (
            <Carousel
              ignoreFirstVideo
              category = {cat[index]}
            />
          )
        }
      )
      }
      */}

      <Carousel
        ignoreFirstVideo
        category = {video_setup.category[0]}
      />

      <Carousel
        ignoreFirstVideo
        category = {video_setup.category[1]}
      />

      <Carousel
        ignoreFirstVideo
        category = {video_setup.category[2]}
      />

      <Carousel
        ignoreFirstVideo
        category = {video_setup.category[3]}
      />

      <Carousel
        ignoreFirstVideo
        category = {video_setup.category[4]}
      />

      <Carousel
        ignoreFirstVideo
        category = {video_setup.category[5]}
      />
      
      <Footer />

    </div>
  );
}

export default Home;