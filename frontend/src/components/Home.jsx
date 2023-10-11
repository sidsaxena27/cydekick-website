import React from 'react';

const Home = () => (
  <section id="home" className='section'>
    <div className='home_content'>
      <h1 id='homeh1'>Meet Your New Testing Sidekick</h1>
      <p id='homep'>Unleash the full potential of your React applications with Cydekick, your intuitive Cypress test code generator. Visualize component hierarchies, interact with your UI, and generate precise test scripts with a breeze. Dive into a hassle-free testing experience tailored for the modern developer.</p>
      <img src='/assets/home.png' id='homeimg'/>
    </div>
    <div className="download-buttons">
      <button className="DownloadButton">Download for Mac</button>
      <button className="DownloadButton">Download for Windows</button>
      <button className="DownloadButton">Download for Linux</button>
    </div>
  </section>
);
export default Home;
