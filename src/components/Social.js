import { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://jiit.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-university"></i>
        </a>
        <a
          class="btnsame btn1"
          href="https://webportal.jiit.ac.in/jiitwebkiosk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-file-word-o"></i>
        </a>
        <a
          class="btnsame btn2"
          href="https://twitter.com/jiitofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://www.linkedin.com/school/jaypee-institute-of-information-technology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://www.instagram.com/jiit.official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
