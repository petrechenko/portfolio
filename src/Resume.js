import React from "react";
import Popup from "reactjs-popup";

function Resume(props) {
  return (
    <div>
      <Popup
        trigger={<button className="button">Full Resume (pdf)</button>}
        modal
        closeOnDocumentClick
      >
        <embed src={"../Resume.pdf"} width="550px" height="750px" />
      </Popup>
      <h1 className="resume">RESUME</h1>
      <div className="IBM">
        <h3>IBM</h3>
        <p>2019 - Present, Baton Rouge, LA</p>
        <h6>
        ● Lead Application Developer used Python to successfully develop an application of converting an XML file from Solution Manager to various SAP systems.
        <br />
        ● Used Flask and REST to show the documentation in the browser and PySimpleGUI to make is a user-friendly desktop application. Applied for a patent of the product.
        <br />
        ● Completion of IBM Application development certificates in 6 months instead of 12:  Python, JS, React, jQuery, NodeJS, Docker, Kubernetes, IBM Cloud, Microservices. 
        <br />
        ● Build various projects showing my technical skills and fixing real-life problems.
        <br />
        ● Work seamlessly in an Agile team environment designing, testing, developing, deploying and maintaining high-quality software assets.
        </h6>
      </div>
      <div className="Seedcode">
        <h3>Seedcode</h3>
        <p>2018 - 2019, Remote</p>
        <h6>
          ● Optimized the process of customer support line by implementing personal auto-responses reducing the response time from 4 hours to 2.
          <br />
          ● Implemented new features to the DayBack Calendar using JavaScript
          and its frameworks (NodeJS, MomentJS, jQuery, React): tooltip with
          different cities and their time zones, messages to Slack and Twilio
          using webhooks, contact information list from Salesforce.
          <br />
          ● Provided excellent support to clients: constantly followed up with
          them, helped to debug their problems, advised on the best solution.
          <br />
          ● Work directly with developers, project leads and various business
          partners to understand and resolve issues.
          <br />
          ● Code, test, and maintain the software/scripts used to implement
          fixes. Provide basic technical support to staff and customers by
          testing software products.
          <br />
          ● Program clear and concise solutions.
          <br />● Presented clients solutions in videos and presentations.
        </h6>
      </div>
      <div className="BECU">
        <h3>BECU</h3>
        <p>2016 - 2018, Tukwila, WA</p>
        <h6>
          ● Became a top performer with my knowledge of products and providing
          excellent customer service, including the areas of business services,
          consumer lending, deposit servicing, IRA, POA, and Fiduciary accounts.
          <br />● Helped members open and manage their bank accounts and
          finances. Advise clients on financial services and resolve issues.
          Finding the best solutions to their financial problems and making sure
          everyone leaving happy and satisfied with my financial services
        </h6>
        <br />
      </div>
      <div className="Arsenal">
        <h3>Arsenal Factory</h3>
        <p>2012 - 2014, Kyiv, Ukraine</p>
        <h6>
          ● Participated in designing and implementing the back-end of the
          Research dashboard using Ajax, Express, NodeJS, SQL.
          <br />● Gathered data from API/web services via AJAX-JSON calls and
          updating the DOM within the result sets.
        </h6>
        <br />
      </div>
    </div>
  );
}

export default Resume;
