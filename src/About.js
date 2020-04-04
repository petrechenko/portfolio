import React from "react";
import { ReactTinyLink } from "react-tiny-link";

function About(props) {
  return (
    <div className="intro">
      <div className="info">
        <div className="img"></div>
        <h1 className="name">Anastasiia Petrechenko</h1>
        <h3 className="interes">Full-Stack Web Developer</h3>
        <h2 >
          I love to solve real problems and improve products, organizations, and
          industries through technology
        </h2>
        </div>
        <div className="projects">
          <h3>Here are some projects I've done:</h3>
          <div className="parks">
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              header=<img src="Capture1.png" />
              description="Only useful information about National Parks"
              maxLine={2}
              minLine={1}
              url="https://petrean-nat-parks.herokuapp.com/"
            />
          </div>
          <div className="jobs">
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              header=<img src="Capture2.PNG" />
              description="Automated job search using python webscraping on indeed"
              maxLine={2}
              minLine={1}
              url="https://job-search-apetrech.herokuapp.com"
            />
          </div>
          <div className="movies">
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              header=<img src="Capture3.PNG" />
              description="A small website for movie notes, movie information, and easy access to Fandango website"
              maxLine={2}
              minLine={1}
              url="https://petrean-movie-app.herokuapp.com/"
            />
          </div>
          <div className="maps">
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              header=<img src="Capture4.PNG" />
              description="Small App showing nearby restaurants in your current location"
              maxLine={2}
              minLine={1}
              url="https://petrean-restaurants-nearby.herokuapp.com/"
            />
          </div>
          <div className="brian">
            <ReactTinyLink
              cardSize="small"
              showGraphic={false}
              header=<img src="brian.png" />
              description="A website for Upper Left Detailing Business"
              maxLine={2}
              minLine={1}
              url="https://brian-uld.herokuapp.com/"
            />
          </div>
        </div>
      </div>
  );
}

export default About;
