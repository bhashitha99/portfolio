import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import skeck_detection from "../assets/img/skeck_detection.png";
import parcel_tracking from "../assets/img/parcel_tracking.png";
import bus from "../assets/img/bus.jpeg";
import action_recog from "../assets/img/action_recog.png";
import hrm from "../assets/img/hrm.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "GNN for Bus Arrival Time Forecasting ",
      description: "Final year research focused on developing a graph neural network-based model to predict bus arrival times, leveraging spatial and temporal data for enhanced accuracy",
      imgUrl: bus,
    },
    {
      title: "Garment Sketch Detection System",
      description: "Developed a computer vision-based system to retrieve visually similar clothing sketches from a database, enabling accurate similarity assessments for dress production.",
      imgUrl: skeck_detection,
    },
    {
      title: "parcel tracking system",
      description: "A web-based tool for tracking and managing parcels, streamlining handovers, and enhancing transparency with automated notifications and detailed documentation",
      imgUrl: parcel_tracking,
    },
    {
      title: "Real-Time Human Activity Detection",
      description: "Developed a computer vision-based platform for real-time human detection and activity classification under low-light conditions using CCTV footage.",
      imgUrl: action_recog,
    },
    {
      title: "Human Resource Management System",
      description: "Designed to streamline and automate HR processes, enhancing efficiency and accuracy in workforce management",
      imgUrl: hrm,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects span across data science, computer vision, and software development, including the prediction of bus arrival times using graph neural networks. I contributed to a garment sketch detection system, an HR management solution, and a parcel tracking system. These experiences allowed me to apply machine learning, AI, and backend development to solve real-world problems.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
