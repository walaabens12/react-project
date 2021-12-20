import "./about.css";
import Award from "../../img/award.png";
import Image from '../../img/Inst-image-1.jpg'
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Image}
            alt="Edem Gheriani"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Web developper , Digital Markter , Data Analyst
        </p>
        <p className="a-desc">
          I am Edem Ghriani I study Buissness intelligence at IHEC I am a member in Club Radio Libertad 
          My hobbies are : Making Music , Designing Web Templates , and Scrape websites using Python
        </p>
      </div>
    </div>
  );
};

export default About;
