import React from 'react';

function LeftImage({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-5'>
          <img src={imageUrl} alt='img'  style={{width: "90%"}}/>
        </div>
        <div className='col-2'></div>
        <div className='col-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo{" "}<i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft: "50px"}}>Learn More{" "}<i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='googlePlay'/></a>
            <a href={appStore} style={{marginLeft: "50px"}}><img src='media/images/appstoreBadge.svg' alt='' /></a>
          </div>
        </div>
      </div>
    </div>
   );
}

export default LeftImage;