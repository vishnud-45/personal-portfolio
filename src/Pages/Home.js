import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, My Name is Vishnu Siddarth</h2>
      <div className="prompt">
        <p>A student with a passion for learning, creating and dicovering new solutions.</p>
        <LinkedInIcon />
        <EmailIcon />
        <a href="https://github.com/vishnud-45/" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>

      </div>
    </div>
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> PROGRAMMING LANGUAGES</h2>
          <span>
          C, C++, Java, Python, JavaScript
          </span>
        </li>
        <li className="item">
          <h2>SOFTWARE TOOLS</h2>
          <span>
            AWS
          </span>
        </li>
        <li className="item">
          <h2>OTHER KNOWN SKILLS</h2>
          <span>HTML, CSS, JavaScript, ReactJS, MySQL, Machine Learning, Internet Of Things, Arduino</span>
        </li>
      </ol>
    </div>
  </div>
  )
}

export default Home