import React from 'react';

const Features = () => (
<section id="features" className='section'>
  <h1>Features</h1>
  <div className='featuresContent'>
    <div className="feature-item">
      <h2>Hierarchy Visualization</h2>
      <div className="feature-icon">🌲</div> {/* Replace with your desired icon */}
      <p>Explore the hierarchy of your application's components and HTML structure.</p>
    </div>
    <div className="feature-item">
      <h2>Highlight Components</h2>
      <div className="feature-icon">🎨</div> {/* Replace with your desired icon */}
      <p>Highlight specific components and HTML elements on the page for easy identification.</p>
    </div>
    <div className="feature-item">
      <h2>Generate Tests</h2>
      <div className="feature-icon">📋</div> {/* Replace with your desired icon */}
      <p>Create Cypress-compatible test files that suit your testing needs effortlessly.</p>
    </div>
    <div className="feature-item">
      <h2>Preview & Save</h2>
      <div className="feature-icon">💾</div> {/* Replace with your desired icon */}
      <p>Preview and save the generated code directly to your project directory.</p>
    </div>
  </div>
</section>

  );
  export default Features;
  