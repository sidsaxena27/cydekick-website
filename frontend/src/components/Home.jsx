import React from 'react';

const Home = () => (
  <section data-cy="home" id="home" className='section'>
    <div data-cy="homeContent" className='home_content'>
      <h1 data-cy="homeh1" id='homeh1'>Meet Your New Testing Sidekick</h1>
      <p data-cy="homep" id='homep'>Unleash the full potential of your React applications with Cydekick, your intuitive Cypress test code generator. Visualize component hierarchies, interact with your UI, and generate precise test scripts with a breeze. Dive into a hassle-free testing experience tailored for the modern developer.</p>
      <img data-cy="homeimg" src='/assets/home.png' id='homeimg'/>
    </div>
    <div data-cy="downloadButtons" className="download-buttons">
      <button data-cy="downloadMac" className="DownloadButton">Download for Mac</button>
      <button data-cy="downloadWindows" className="DownloadButton">Download for Windows</button>
      <button data-cy="downloadLinux" className="DownloadButton">Download for Linux</button>
    </div>
  </section>
);
export default Home;
