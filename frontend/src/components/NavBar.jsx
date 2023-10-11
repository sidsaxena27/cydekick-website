import React from "react";

const NavBar = () => {

  function scrollToSection(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
    }
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var top = window.scrollY;
        var offset = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        if (top >= offset - 50 && top < offset + height - 50) {
            history.replaceState(null, null, '#' + id);
        }
    });
  });

  return (
    <div className="NavBar">
      <img src="/assets/logo.png" className="logo" />
      <h1 className="Title">CYDEKICK</h1>
      <div id="navbar" className="NavBarButtons">
        <a className="NavButton" href="#home" onclick="scrollToSection('home')">
          Home
        </a>
        <a
          className="NavButton"
          href="#features"
          onclick="scrollToSection('features')"
        >
          Features
        </a>
        <a className="NavButton" href="#demo" onclick="scrollToSection('demo')">
          Demo
        </a>
        <a
          className="NavButton"
          href="#getStarted"
          onclick="scrollToSection('getStarted')"
        >
          Get Started
        </a>
        <a className="NavButton" href="#team" onclick="scrollToSection('team')">
          Team
        </a>
        <a href="https://www.linkedin.com/company/cydekick/">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
        </svg>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
