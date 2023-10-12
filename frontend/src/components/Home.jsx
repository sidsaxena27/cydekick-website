import React from 'react';
import AWS from 'aws-sdk';

const Home = () =>{ 
  const downloadFile = (key) => {

const s3 = new AWS.S3({
  accessKeyId: 'AKIAVVKH7VVULB2JO45H',
  secretAccessKey: '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',
  region: 'us-east-1',
})
  
    // Specify the S3 bucket and file key you want to download
    const params = {
      Bucket: 'bucketeer-8e95956c-51fb-498f-b9a8-65dfa52f709f',
      Key: `public/${key}`,
    };
  
    // Use the AWS SDK to download the file directly from S3
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error('Error downloading file:', err);
      } else {
        const blob = new Blob([data.Body]);
  
        // Create a URL for the blob and trigger the download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = key; // Specify the desired file name
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  };
  
  const handleDownloadMac = () => {
    downloadFile('mac.zip');
  };

  return(
  <section data-cy="home" id="home" className='section'>
    <div data-cy="homeContent" className='home_content'>
      <h1 data-cy="homeh1" id='homeh1'>Meet Your New Testing Sidekick</h1>
      <p data-cy="homep" id='homep'>Unleash the full potential of your React applications with Cydekick, your intuitive Cypress test code generator. Visualize component hierarchies, interact with your UI, and generate precise test scripts with a breeze. Dive into a hassle-free testing experience tailored for the modern developer.</p>
      <img data-cy="homeimg" src='/assets/home.png' id='homeimg'/>
    </div>
    <div data-cy="downloadButtons" className="download-buttons">
      <button data-cy="downloadMac" className="DownloadButton" onClick={handleDownloadMac}>Download for Mac</button>
      <button data-cy="downloadWindows" className="DownloadButton">Download for Windows</button>
      <button data-cy="downloadLinux" className="DownloadButton">Download for Linux</button>
    </div>
  </section>
)};
export default Home;