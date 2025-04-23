import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/h7.png';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['front-end developer', 'coder', 'full-stack developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 1000;
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      {/* ✅ Using container-fluid for full width, keeping grid alignment */}
      <Container fluid>
        <Row className="align-items-center px-3 px-md-5">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              <span className="txt-rotate">
                {`Hi, I am Aditya`} <br /> a <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I am a passionate developer with expertise in the development field. I
              am eager to be a part of the tech community and contribute ideas that
              have meaningful impact.
            </p>
            <a href="/Aditya_Kumar_Maurya.pdf" download="Aditya_resume.pdf">
              <button>
                Download my resume <ArrowDownCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Banner" className='himg' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
