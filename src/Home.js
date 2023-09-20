import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img className='home__image'
      src= "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg"
      alt=""
      />

      {/* Product id, title, price, rating, image*/}
    <div className="home__row">
      <Product
        id="123123"
        title="Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | Segment's Only 6000 mAh 5G Smartphone"
        price={14990}
        rating={4} 
        image="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m146bzshins/gallery/in-galaxy-m-sm-m146bzshins-front-silver-537267192?$2160_1728_PNG$"
      />
      <Product 
        id="123124"
        title="rts High Speed 25W Dual USB Universal Travel adapter "
        price={587}
        rating={4}
        image="https://m.media-amazon.com/images/I/61a2IUglMIL._SL1366_.jpg"
      />
    </div>

    <div className="home__row">
      <Product 
        id="123125"
        title="Whirlpool 7.5 Kg 5 Star Royal Fully-Automatic Top Load Washing Machine"
        price={16490.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/61nPxflwpcL._SY606_.jpg"
      />
      <Product 
        id="123126"
        title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback"
        price={1499}
        rating={4}
        image="https://m.media-amazon.com/images/I/61u1VALn6JL._SX425_.jpg"
      />
      <Product 
        id="123127"
        title="Think Straight: Change your thoughts, Change your life [Paperback] Foroux, Darius"
        price={125.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/71Yb9hJXocL._SY342_.jpg"
      />
    </div>

    <div className="home__row">
      <Product 
        id="123128"
        title="Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)"
        price={32990}
        rating={4}
        image="https://m.media-amazon.com/images/I/41KQf7HCDoL._SY300_SX300_QL70_FMwebp_.jpg"
      />
    </div>


      {/* Product */}
    </div>
  )
}

export default Home