import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/my.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "AI/ML Engineer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <h4 className="txt-name">Hello, I'm</h4>
                <h4 className="txt-name2">Bhashitha Viduranga</h4>
                <p>BSc Eng Hons, Computer Science & Engineering <br></br> University of Moratuwa</p>
                <h1> <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Full Stack Developer", "ML/AI Engineer" ]'><span className="wrap">{text}</span></span></h1>
                <p className="description">Motivated Computer Science Engineering undergraduate specializing in Data Science Engineering. Proficient in machine learning, full-stack development, software solutions,
                     artificial intelligence, and data analysis. Passionate about leveraging data-driven solutions to address real-world challenges and drive innovation.</p>
                <div className="button-div">
                  <a href="/portfolio/Bhashitha_Mendis.pdf" download="Bhashitha_Viduranga_CV.pdf" style={{ textDecoration: 'none' }}>
                    <span className="download_cv">Download CV </span>
                  </a>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div className="header-img">
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
