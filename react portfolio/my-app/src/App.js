import './App.css';
import React from 'react';
import styled from 'styled-components';
  
const StyledText = styled.h1`
  font-family: 'poppins', sans-serif;
  font-size: 16px;
`;
function App() {
  return ( 
    <div>
      <StyledText>
      <div className="header-div">
        <div className="flex-div">
          <div className="shivani-img-div">
            <img className="shivani-img" src="Assets/1694485028973.jpg" alt="Shivani"/>
          </div>
          <div className="header-content-div">
            <h1>Hey, I am Shivani</h1>
            <h3>Customer Experience Intern</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra massa non quam congue consectetur. Maecenas elementum nibh ut luctus tempor. Nunc laoreet eu turpis non interdum. Nullam ullamcorper est ac odio pharetra vestibulum. Quisque congue eu urna convallis laoreet. Praesent neque tellus, placerat eu mattis sed,</p>            </div>
        </div>
      </div>


      <div className="project-div">
        <h1>Projects</h1>
        <div className="project-flex">
          <div className="project-item">
            <img id="project-img" src="Assets/project.jpg" alt="project"/>
              <h3>Product design case study</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra massa non quam congue consectetur. Maecenas elementum nibh ut luctus tempor.</p>
          </div>

          <div className="project-item">
            <img id="project-img" src="Assets/project.jpg" alt="project"/>
              <h3>Machine Learning Project</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra massa non quam congue consectetur. Maecenas elementum nibh ut luctus tempor.</p>
          </div>

          <div className="project-item">
            <img id="project-img" src="Assets/project.jpg" alt="project"/>
              <h3>Juztnear Ideathon Project</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra massa non quam congue consectetur. Maecenas elementum nibh ut luctus tempor.</p>
          </div>

        </div>
      </div>


      <div className="skills-div">
        <div className="skills-flex">
          <div className="skills-item">
            <h2>Skills</h2>
            <ul>
              <li>HTML and CSS</li>
              <li>React</li>
              <li>Product design</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>

          <div className="skills-item">
            <h2>Contact Me @</h2>
            <ul>
              <li>+91 6384312236</li>
              <li>nshivani2002@gmail.com</li>
              <li>Salem, Tamilnadu</li>
              <li><a href="https://www.linkedin.com/in/shivani-n-523840203" target="_blank">My Linkedin</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="certi-div">
        <h1>Certifications</h1>
        <div className="certificates">
          Design and Implementation of HCI
           </div>
        <br/>
          <div className="certificates">
            Design and Implementation of HCI
          </div>
          <br/>
            <div className="certificates">
              Design and Implementation of HCI
            </div>
            <br/>
              <div className="certificates">
                Design and Implementation of HCI
                </div>
              <br/>
              </div>

              <div className="footer">
                <h4>Copyrights @shivani 2023</h4>
              </div>
              </StyledText>

            </div>
            );
}

            export default App;
