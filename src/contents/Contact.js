import { Component } from 'react';

import project3 from "../img/oo.png";
class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">JIIT Notice Board</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">What is <mark className="mark2">JIIT Notice Board?</mark></h2>
            <p>Virtual College Aid</p>
            <br></br>
            <p className="p10">It is kind of a calendar which will display all the upcoming
            events / conference in the college. It can be updated. Events details can be
            added and deleted. All the notice of college will remain in one place according to 
            date and time.
            </p>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="Edu">
            <div class="port_out port3">
          <div class="port_in">
            <a href="https://react-google-calendar-clone.netlify.app/"  target="_blank">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
            </div>
            <h3>Click Below to use it:</h3>
         
          

            <h3 class="sk_head">Features</h3>
            <div class="sk">Calendar</div>
            <div class="sk s2">Notice</div>
            <div class="sk s3">CRUD</div>
            <div class="sk s4">Fast Access</div>
          
            </div>
            )
        }
    }
    
export default About
    
