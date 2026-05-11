import React from 'react';

function RightImage({imageUrl, productName, productDescription, learnMore}) {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More{" "}<i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className='col-2'></div>
        <div className='col-5'>
          <img src={imageUrl} alt='' style={{width: "90%"}}/>
        </div>
      </div>
    </div>
   );
}

export default RightImage;