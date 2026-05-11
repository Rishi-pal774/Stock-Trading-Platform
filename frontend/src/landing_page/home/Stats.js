import React from 'react';

function Stats() {
  return ( 
    <div className='container p-3 mt-3'>
       <div className='row'>
        <div className='col-6 p-5'>
          <h1 className='fs-3 mb-5'>Trust with confidence</h1>
          <h2 className='fs-5'>Customer-first always</h2>
          <p className='text-muted fs-6'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>
          <h2 className='fs-5'>No spam or gimmicks</h2>
          <p className='text-muted fs-6'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h2 className='fs-5'>The Zerodha universe</h2>
          <p className='text-muted fs-6'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h2 className='fs-5'>Do better with money</h2>
          <p className='text-muted fs-6'>With initiatives like Nudge and kill Switch, we don't jsut facilitates transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6 p-5 ml-3'>
          <img src='media/images/ecosystem.png' alt='ecosystem' style={{width: "90%"}}/>
          <div className='text-center'>
            <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href='' style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
       </div>
    </div>
   );
}

export default Stats;