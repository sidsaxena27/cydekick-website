import React from "react";
import FeedbackForm from "./FeedbackForm.jsx";
import Profile from "./Profile.jsx";

const Team = () => {
  const teamInfo = [
    {
      firstname: "Jacob",
      lastname: "Sasser",
      image: "/assets/jacob.jpg",
      linkedin: "https://www.linkedin.com/in/jacob-sasser-11a424112",
      github: "https://github.com/jacobsasser",
    },
    {
      firstname: "Preston",
      lastname: "Mounivong",
      image: "/assets/preston.jpeg",
      linkedin: "https://www.linkedin.com/in/prestonmounivong/",
      github: "https://github.com/prrrrreston",
    },
    {
      firstname: "Quinn",
      lastname: "Craddock",
      image: "/assets/quinn.png",
      linkedin: "lhttps://github.com/quinnCraddock4",
      github: "https://github.com/quinnCraddock4",
    },
    {
      firstname: "Siddhant",
      lastname: "Saxena",
      image: "/assets/Sid.png",
      linkedin: "https://www.linkedin.com/in/siddhantsaxena27/",
      github: "https://github.com/sidsaxena27",
    },
  ];

  let teamCard = [];

  for (let i = 0; i < teamInfo.length; i++) {
    teamCard.push(<Profile firstname={teamInfo[i].firstname} lastname={teamInfo[i].lastname} image={teamInfo[i].image} linkedin={teamInfo[i].linkedin} github={teamInfo[i].github} id={i}/>)
  }

  return (
    <section data-cy="teamSection" id="team" className="section">
      <h1 data-cy="teamTitle">Team</h1>
      <div className="ProfileContainer">
      {teamCard}
      </div>
      <FeedbackForm />
    </section>
  );
};
export default Team;
