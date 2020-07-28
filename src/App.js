import React from 'react';
import Menu from './components/menu';
import BannerMain from './components/bannerMain';
import Carousel from './components/carousel';
import Footer from './components/footer';
import dadosIniciais from './assets/data/dados_iniciais.json'


function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"O que é Front-end?"}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default App;