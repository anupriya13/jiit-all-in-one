import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile_photo.jpg";
import Social from "../components/Social";
import Map from "../img/21.jpeg";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Jaypee <mark>Institute of Information Technology</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Sector 62, Noida",
            "Engineering and Business college",
            "Giving wings to dreams",
          ]}
          speed={60}
          eraseDelay={80}
        />
      
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        
        <div class="con_in">
            <img src={Map} class="co1" alt="Map"></img>
         </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/>
       
        <Social />
      </div>
    );
  }
}

export default Home;
