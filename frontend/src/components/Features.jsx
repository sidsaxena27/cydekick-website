import React from 'react';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Features = () => (
<section data-cy="features" id="features" className='section'>
  <h1 data-cy="featuresTitle">Features</h1>
  <div data-cy="featuresContent" className='featuresContent'>
    <div data-cy="featureItem1" className="feature-item">
      <h2 data-cy="hVizTitle">Hierarchy Visualization</h2>
      <SchemaOutlinedIcon data-cy="featureIcon1" className="feature-icon"/>
      <p data-cy="hVizText">Explore the hierarchy of your application's components and HTML structure.</p>
    </div>
    <div data-cy="featureItem2" className="feature-item">
      <h2 data-cy="hCompTitle">Highlight Components</h2>
      <HighlightOutlinedIcon data-cy="featureIcon2" className='feature-icon'/>
      <p data-cy="hCompText">Highlight specific components and HTML elements on the page for easy identification.</p>
    </div>
    <div data-cy="featureItem3" className="feature-item">
      <h2 data-cy="genTestsTitle">Generate Tests</h2>
      <CodeOutlinedIcon data-cy="featureIcon3" className='feature-icon'/>
      <p data-cy="genTestsText">Create Cypress-compatible test files that suit your testing needs effortlessly.</p>
    </div>
    <div data-cy="featureItem4" className="feature-item">
      <h2 data-cy="pAndS_Title">Preview & Save</h2>
      <VisibilityOutlinedIcon data-cy="featureIcon4" className='feature-icon'/>
      <p data-cy="pAndS_Text">Preview, edit and save the generated code directly to your project directory.</p>
    </div>
  </div>
</section>

  );
  export default Features;
  