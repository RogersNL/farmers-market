import React from 'react';
import marketImage from '../assets/images/market.jpg';

function Home(){
  return(
    <div>
      <img src={marketImage}/>
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Home;
