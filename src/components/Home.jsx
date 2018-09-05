import React from 'react';
import marketImage from '../assets/images/market.jpg';

function Home(){
  return(
    <div>
      <img src={marketImage}/>
      <style jsx>{`
        img {
          width: 100%;
          border-radius: 60%;
          border: 2px solid #f1f1f1;
        }
      `}</style>
    </div>
  );
}

export default Home;
