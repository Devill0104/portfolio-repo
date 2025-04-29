import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import exp from '../assets/img/express.svg';
import mongodb from '../assets/img/mongodb.svg';
import node from '../assets/img/node.svg';
import c from '../assets/img/c.svg';
import sql from '../assets/img/sql.svg';
import css from '../assets/img/css.svg';
import javascript from '../assets/img/javascript.svg';
import html from '../assets/img/html.svg';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const containerRef = useRef(null);

  const skillsData = {
    row1: [
      { src: mongodb, alt: 'MongoDB', label: 'MongoDB' },
      { src: exp, alt: 'Express', label: 'Express' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React', label: 'React' },
      { src: node, alt: 'Node.js', label: 'Node.js' }
    ],
    row2: [
      { src: c, alt: 'C++', label: 'C++' },
      { src: sql, alt: 'SQL', label: 'SQL' }
    ],
    row3: [
      { src: html, alt: 'HTML', label: 'HTML' },
      { src: css, alt: 'CSS', label: 'CSS' },
      { src: javascript, alt: 'JavaScript', label: 'JavaScript' }
    ]
  };

  useEffect(() => {
    const animateRows = (rowRef) => {
      const icons = rowRef.current.querySelectorAll('img');
      const labels = rowRef.current.querySelectorAll('div > div');

      gsap.set([icons, labels], { opacity: 0, x: -100 });

      return [icons, labels];
    };

    const [icons1, labels1] = animateRows(row1Ref);
    const [icons2, labels2] = animateRows(row2Ref);
    const [icons3, labels3] = animateRows(row3Ref);

    const tl = gsap.timeline({
      ease:'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
        end: 'top 20%',
        toggleActions: 'play none reverse none', 
       
       }
    });

    tl.to([icons1, labels1], {
      opacity: 1,
      x: 0,
      stagger: 0.05,
      duration: 0.15,
      ease: 'power1.out'
    })
    .to([icons2, labels2], {
      opacity: 1,
      x: 0,
      stagger: 0.05,
      duration: 0.15,
      ease: 'power1.out'
    }, '+=0.2')
    .to([icons3, labels3], {
      opacity: 1,
      x: 0,
      stagger: 0.05,
      duration: 0.15,
      ease: 'power1.out'
    }, '+=0.2');
  }, []);

  return (
    <div id="skill-box" ref={containerRef}>
      <h2 className="skill-heading">My Skills</h2>

      {/* Skill Rows */}
      <div className="skill-row" ref={row1Ref}>
        {skillsData.row1.map((skill, i) => (
          <div key={`row1-${i}`} className="skill-item">
            <img src={skill.src} alt={skill.alt} className="skill-icon" />
            <div className="skill-label">{skill.label}</div>
          </div>
        ))}
      </div>

      <div className="skill-row" ref={row2Ref}>
        {skillsData.row2.map((skill, i) => (
          <div key={`row2-${i}`} className="skill-item">
            <img src={skill.src} alt={skill.alt} className="skill-icon" />
            <div className="skill-label">{skill.label}</div>
          </div>
        ))}
      </div>

      <div className="skill-row" ref={row3Ref}>
        {skillsData.row3.map((skill, i) => (
          <div key={`row3-${i}`} className="skill-item">
            <img src={skill.src} alt={skill.alt} className="skill-icon" />
            <div className="skill-label">{skill.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
