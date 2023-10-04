// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'

function App() {
  return (
    <div id='app'>
     <section id='hero'>
      <nav>
        <span><img src='/images/logo-light.svg' alt='workit'/></span>
        <button className='secondarybtn'> apply for access</button>
        </nav>
      <div> 
        <h1>Data <span>tailored</span> to your needs</h1>
        <button>learn more</button>
      </div>
     </section>

     <section id='company-info'>
      <div>
        <span>1</span>
         <div>
          <h2>Actionable insights</h2>
           <p>Optimize your products, improve customer satisfaction and 
            stay ahead of the competition with our product data analytics.</p>
          </div>
      </div>
      <div>
        <span>2</span>
        <div>
        <h2>Data-driven decisions</h2>
        <p>Make data-driven decisions with our product data analytics. 
          Our AI-generated reports help you unlock insights hidden in your 
          product data.</p>
          </div>
      </div>
      <div>
        <span>3</span>
        <div>
        <h2>Always affordable</h2>
        <p>Always affordable pricing that scales with your business. Get 
          top-quality product data analytics services without hidden costs or 
          unexpected fees.</p>
        </div>
      </div>
     </section>

     <section>
      <div className='about-us'>
      <img src='/images/image-founder.webp' alt='founder of company'/>
      <div id='get-access'>
        <h3>be the first to test</h3>
         {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me 
          to become a beta tester for our app and kickstart your company. Apply for access 
          below and I’ll be in touch to schedule a call.</p>
        <button> apply for access</button>
      </div>
      </div>
     </section>

     <section id='footer'>
      <span><img src='/images/logo-dark.svg' alt='workit'/></span>
      <ol>
        <li><button><img src='/images/icon-facebook.svg' alt='facebook'/></button></li>
        <li><button><img src='/images/icon-twitter.svg' alt='twitter'/></button></li>
        <li><button><img src='/images/icon-instagram.svg' alt='instagram'/></button></li>
      </ol>
     </section>
    </div>
  )
}

export default App
