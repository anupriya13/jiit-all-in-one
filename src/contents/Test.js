import { Component } from 'react';

import project3 from "../img/pp.jpg";
class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">JIIT Timetable Scheduler</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">What is <mark className="mark2">JIIT Timetable Scheduler?</mark></h2>
            <p>Virtual College Aid</p>
            <br></br>
            <p className="p10">Timetable Scheduling is a usefule tool for admins to schedule 
            classes for different batches and different teachers. It helps in saving a lot of
            time and effort manually. Just need to add batches, teachers and subjects and in One
            click we can get the desired result.
            </p>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="Edu">
            <div class="port_out port3">
          <div class="port_in">
            <a href="https://activity-scheduling.herokuapp.com/"  target="_blank">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
            </div>
            <h3>Click Below to use it:</h3>
         
          

            <h3 class="sk_head">Features</h3>
            <div class="sk">Time Saving</div>
            <div class="sk s2">Optimised Algo</div>
            <div class="sk s3">Scheduling</div>
            <div class="sk s4">Easy to use</div>

            </div>
            )
        }
    }
    
export default About
    
