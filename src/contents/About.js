import { Component } from 'react';

import project3 from "../img/project3.png";
class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">JIIT Meet</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">What is <mark className="mark2">JIIT MEET?</mark></h2>
            <p>Virtual College Aid</p>
            <br></br>
            <p className="p10">No need to use any other third party apps. We can easily connect 
            with each other on one platform. It is useful for online classes, teachers meet, students 
            meet, event or fest organisation committee meet, etc.
            </p>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="Edu">
            <div class="port_out port3">
          <div class="port_in">
            <a href="https://meetify-a0446.firebaseapp.com/"  target="_blank">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
            </div>
            <h3>Click Below to use it:</h3>
         
          

            <h3 class="sk_head">Features</h3>
            <div class="sk">Video Call</div>
            <div class="sk s2">Notes</div>
            <div class="sk s3">Chat group</div>
            <div class="sk s4">Whiteboard</div>
            <div class="sk s5">Attendance</div>
            <div class="sk s6">Screenshare</div>
            </div>
            )
        }
    }
    
export default About
    
