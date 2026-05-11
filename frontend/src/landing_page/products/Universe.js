import React from 'react';

function Universe() {
  return ( 
   <div className='container mt-5'>
      <div className='row text-center'>
        <h4 className='text-muted'>The Zerodha Universe</h4>
        <p>Extend your trading and investment experience even further with our partner platforms.</p>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/zerodhaFundhouse.png' alt='' width="50%"/>
          <p className='text-xs text-muted mt-4' style={{fontSize: "10px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/sensibullLogo.svg' alt='' width="60%"/>
          <p className='text-xs text-muted mt-4' style={{fontSize: "10px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/goldenpiLogo.png' alt=''/>
          <p className='text-xs text-muted mt-4' style={{fontSize: "10px"}}>Bonds trading platform</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/streakLogo.png' alt='' width="40%"/>
          <p className='text-xs text-muted mt-4' style={{fontSize: "10px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/smallcaseLogo.png' alt='' width="50%"/>
          <p className='text-xs text-muted mt-4' style={{fontSize: "10px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/dittoLogo.png' alt='' width="30%"/>
          <p className='text-xs text-muted mt-4' style={{fontSize: "10px"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>

        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Sign up Now</button>
      </div>
    </div>
   );
}

export default Universe;