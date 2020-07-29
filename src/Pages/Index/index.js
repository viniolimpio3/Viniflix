import React from 'react';

import Header from '../../Components/Header';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';

import firstData from '../../dados_iniciais.json';//esses dados devem vir de um backend

const Home = () =>{
    console.log(firstData)
    return(
        <div style={{background:'#141414'}}>
            <Header />

            <BannerMain
                videoTitle={firstData.categorias[1].videos[2].titulo}
                url={firstData.categorias[1].videos[2].url}
                videoDescription={"Será que em alguum dia, os robôs realmente substituirão os Programadores? Para saber mais, assista o vídeo de Felipe Deschamps "}
             />

            <Carousel 
                ignoreFirstVideo
                category={firstData.categorias[0]}
            />

            <Carousel
                category={firstData.categorias[1]}
            />
            
            <Carousel
                category={firstData.categorias[2]}
            />
            <Carousel
                category={firstData.categorias[3]}
            />
            
            <Carousel
                category={firstData.categorias[4]}
            />

            <Footer />
        </div>
    );
}
export default Home;