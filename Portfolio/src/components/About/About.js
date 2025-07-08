import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Naveen Mallireddi</strong>. I'm form india andra pradesh. i did my b.tech in electronics and communication engineering in adarsh collge of engineering near to my city. 
            </ScrollAnimation>

            <br /> <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I'm a passionate and enthusiastic MERN Stack developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy solving real-world problems through clean, scalable, and maintainable code.

            I've built several personal projects including e-commerce apps, to-do lists, and recipe managers that showcase my skills in API development, database design, front-end UI, and full-stack integration.

            I'm a quick learner, team player, and always eager to explore new technologies. Currently seeking opportunities where I can contribute, grow, and build meaningful products.
            </ScrollAnimation>

            <br /> <br /> 

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
