import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/bannerMain';
import Carousel from '../../components/carousel';
import categoryRepository from '../../repositories/categories';
import PageDefault from '../../components/pageDefault';

function Home() {
  const [videoSetup, setVideoSetup] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos().then(
      (serverResponse) => {
        setVideoSetup(serverResponse);
      },
    ).catch(
      (err) => {
        console.log(err.message);
      },
    );
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {videoSetup.length === 0 && (<div>Loading...</div>)}

      {videoSetup.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={videoSetup[0].videos[0].title}
                url={videoSetup[0].videos[0].url}
                videoDescription="O que é Front-end?"
              />

              <Carousel
                ignoreFirstVideo
                category={videoSetup[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

      {/*  <BannerMain
        videoTitle={videoSetup.categories[0].videos[0].title}
        url={videoSetup.categories[0].videos[0].url}
        videoDescription="O que é Front-end?"
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.categories[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.categories[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.categories[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.categories[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.categories[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={videoSetup.categories[5]}
      /> */}
    </PageDefault>
  );
}

export default Home;
