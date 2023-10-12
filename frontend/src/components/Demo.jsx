import React from 'react';
// import './Demo.css';  // Make sure to create this file

const Demo = () => (
  <section data-cy="demo" id="demo" className='section'>
    <h1 data-cy="demoTitle">Demo</h1>
    <div className="video-grid">
      {['Entering your react project and port', 'Visualizing Components', 'Generating tests', 'Previewing and editing tests'].map((text, index) => (
        <div className="video-container" key={index}>
          <p>{text}</p>
          <img className="demoButton" src={`/assets/DemoGif${index + 1}.gif`} alt={`${text} gif`} />
        </div>
      ))}
    </div>
  </section>
);

export default Demo;
