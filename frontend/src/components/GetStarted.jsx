import React from "react";

const GetStarted = () => {
  return (
    <section data-cy="getStarted" id="getStarted" className="section">
      <h1 data-cy="getStartedTitle">Get Started</h1>
      <div className="getStartedContent">
        <ul><li>Download Cydekick for your appropriate OS</li>
        <div data-cy="downloadButtons" className="download-buttons">
          <button data-cy="downloadMac" className="DownloadButton">
            Download for Mac
          </button>
          <button data-cy="downloadWindows" className="DownloadButton">
            Download for Windows
          </button>
          <button data-cy="downloadLinux" className="DownloadButton">
            Download for Linux
          </button>
        </div>
        <li>
          Launch Cydekick. Enter your root component (ie. App.jsx) and where you
          are currently hosting your application
        </li>
        <li>
          Select which React Component you want to run tests with. It should be
          highlighted to the right of the hierarchy
        </li>
        <li>
          Click the HTML button on the hierarchy and select which HTML element
          you wish to write a test for.
        </li>
        <li>
          Enter the Test writer and name your describe block. Click create
          describe block when ready.
        </li>
        <li> Enter your it block name and click end it block when ready.</li>
        <li>
          Choose whichever queries or assertions you want to test for this
          particular html/component
        </li>
        <li>
          When satisfied, click end statement to transfer code into your
          generated test file.
        </li>
        <li>
          You can use end it block or end describe block buttons to create new
          code
        </li>
        <li>
          At anytime you can preview your current test file by clicking the
          Preview button at the top
        </li>
        <li>
          When you are finished, click save button at top right and follow
          prompts to save your cypress test file within your application's
          directory
          </li>
        </ul>
      </div>
    </section>
  );
};
export default GetStarted;
