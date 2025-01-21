import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import vscode from "../assets/img/vscode.svg";
import cplus from "../assets/img/cplus.svg";
import postman from "../assets/img/postman.svg";
import flask from "../assets/img/flask.svg";
import react from "../assets/img/react.svg";
import mongodb from "../assets/img/mongodb.svg";
import mysql from "../assets/img/mysql.svg";
import node from "../assets/img/node.svg";
import git from "../assets/img/git.svg";
import docker from "../assets/img/docker.svg";
import python from "../assets/img/python.svg";
import java from "../assets/img/java.svg";
import js from "../assets/img/js.svg";
import php from "../assets/img/php.svg";
import css from "../assets/img/css.svg";
import html from "../assets/img/html.svg";

// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faPython,faJava,faJs,faPhp,faHtml5,faCss, faGithub, faDocker} from '@fortawesome/free-brands-svg-icons';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Proficient in diverse languages and tools,<br></br> I excel at solving complex problems and delivering effective solutions.</p>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Full Stack Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ML/AI Engineering</h5>
                            </div>
                        </Carousel> */}

                        <div class="skill-grid-container">
                          <div class="skill-item">
                            <h3>Programming Languages</h3>
                            <div className="skill-set">
                              <div className="skill-box">
                                <p>Python</p>
                                <img src={python} alt="Java Image" />
                              </div>
                              <div className="skill-box">
                                <p>Java</p>
                                <img src={java} alt="Java Image" />
                              </div>
                              <div className="skill-box">
                                <p>C++</p>
                                <img src={cplus} alt="Image" />
                              </div>
                              <div className="skill-box">
                                <p>  JS  </p>
                                <img src={js} alt="JS Image" />
                              </div>
                              <div className="skill-box">
                                <p>PHP</p>
                                <img src={php} alt="PHP Image" />
                              </div>
                              <div className="skill-box">
                                <p>HTML</p>
                                <img src={html} alt="HTML Image" />
                              </div>
                              <div className="skill-box">
                                <p>CSS</p>
                                <img src={css} alt="Css Image" />
                              </div>
                            </div>
                          </div>

                          <div class="skill-item">
                            <h3>Tools & Services</h3>
                            <div className="skill-set">
                              <div className="skill-box">
                                <p>Git</p>
                                <img src={git} alt="Image" />
                              </div>
                              <div className="skill-box">
                                <p>Docker</p>
                                <img src={docker} alt="Image" />
                              </div>
                              <div className="skill-box">
                                <p>VS Code</p>
                                <img src={vscode} alt="Image" />
                              </div>
                              <div className="skill-box">
                                <p>Postman</p>
                                <img src={postman} alt="Image" />
                              </div>
                            </div>
                          </div>

                          <div class="skill-item">
                            <h3>Frameworks</h3>
                              <div className="skill-set">
                                <div className="skill-box">
                                  <p>Flask</p>
                                  <img src={flask} alt="Image" />
                                </div>
                                <div className="skill-box">
                                  <p>ReactJS</p>
                                  <img src={react} alt="react Image" />
                                </div>
                                <div className="skill-box">
                                  <p>Node.js</p>
                                  <img src={node} alt="Node.js Image" />
                                </div>
                              </div>
                          </div>
                          <div class="skill-item">
                            <h3>Databases</h3>
                              <div className="skill-set">
                                <div className="skill-box">
                                  <p>MySQL</p>
                                  <img src={mysql} alt="mysql Image" />
                                </div>
                                <div className="skill-box">
                                  <p>MongoDB</p>
                                  <img src={mongodb} alt="mongodb Image" />
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
