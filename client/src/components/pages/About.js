import React from "react";
import '../../assets/images/headshot.jpeg';
import '../../assets/css/style.css';

function About() {
  return (
    <div className="info" id="about">
        <h1>About</h1>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col 2 text-right">

                    <img width="200px" src={require('../../assets/images/headshot.jpeg')} alt="me" id="headshot" />
                </div>
                <div className="col 10">
                    A Swede turned Aussie with a giant passion for front end web development foremost focusing on the
                    user's experience
                    and web responsiveness. A quick learner, I enjoy consistently challenging myself to learn. Currently
                    completing the University
                    of Sydney Full Stack Development Boot Camp, focusing on languages such as HTML, CSS3, node.js,
                    JQuery, MySQL and Mongo.
                    My projects are listed under the 'portfolio' section of this webpage for your browsing pleasure.
                </div>
            </div>
        </div>
 </div>
  );
}

export default About;
