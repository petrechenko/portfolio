// App.jsx
import React from "react";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route} from "react-router-dom";
import Resume from "./Resume.js";
import About from "./About.js";
import Contact from "./contact.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css?family=Advent+Pro:300|Bebas+Neue|Anton|Permanent+Marker|Roboto+Slab|Roboto+Condensed:300i&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="node_modules/lib/bootstrap2-toggle.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="App">
        <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="/">
              <img className="logo" src="icon.png"></img>
            </a>
          <div class="navbar-nav ml-auto">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
          <div
            class="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/resume">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/anastasiia-petrechenko-882627170/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://github.com/petrechenko"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </div>
    </BrowserRouter>
  );
}

export default App;
