import React from "react";

function Contact(props) {
  return (
    <div className="contact">
      <h1 className="cont">
        Interested in working together? Let's have a talk.
      </h1>
      <h3>Phone number: +15086804587</h3>
      <h3>
        Email:{" "}
        <a href="mailto: anapetrechenko@gmail.com" target="_blank">
          anapetrechenko@gmail.com
        </a>
      </h3>
      <a
        href="https://www.facebook.com/nastyusha.petrechenko"
        class="fa fa-facebook"
        target="_blank"
      ></a>
      <a
        href="https://twitter.com/anapetrechenko"
        class="fa fa-twitter"
        target="_blank"
      ></a>
      <a
        href="https://www.linkedin.com/in/anastasiia-petrechenko-882627170/"
        class="fa fa-linkedin"
        target="_blank"
      ></a>
      <a
        href="https://www.instagram.com/petrechenko0215/"
        class="fa fa-instagram"
        target="_blank"
      ></a>
      <a
        href="https://github.com/petrechenko"
        class="fa fa-github"
        target="_blank"
      ></a>
    </div>
  );
}

export default Contact;
