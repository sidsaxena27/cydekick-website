import React from 'react';
import FeedbackForm from './components/FeedbackForm.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Demo from './components/Demo.jsx';
import GetStarted from './components/GetStarted.jsx';
import Team from './components/Team.jsx';


function App() {
  return (
    <div data-cy="app" className="App">
      <NavBar/>
      <Home/>
      <Features/>
      <Demo/>
      <GetStarted/>
      <Team/>

    </div>
  );
}

export default App;