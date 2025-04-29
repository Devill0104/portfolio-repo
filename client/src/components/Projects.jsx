import React, { useEffect } from 'react';
import '../App.css';
import img1 from '../assets/img/p1-img.png';
import img2 from '../assets/img/p2-img.jpg';
import img3 from '../assets/img/p3-img.jfif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {    const projectElements = document.querySelectorAll('.project-element');
    projectElements.forEach((element) => {
      gsap.fromTo(
        element, 
        {
          scale: 0.6, 
          opacity: 1, 
        },
        {
          scale: 1, 
          duration: 1,
          ease: 'power2.out', 
          opacity: 1,
          scrollTrigger: {
            trigger: element, 
            start: 'top 90%', 
            end: 'top 20%', 
            scrub: true, 
            toggleActions: 'play none none none', 
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" className="container project-container text-center">
      <h2>Projects</h2>

      <div className="row project-element">
        <div className="col col-md-6 col-12">
          <img className="project-img" src={img1} alt="" />
        </div>
        <div className="col col-md-6 col-12">
          <h4>
            <a href="https://airbnb-clone-oiv6.onrender.com/listings">
              Wanderlust, a travel and explore website&nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <br />
          </h4>
          <p>
            Wanderlust is an interactive travel and exploration platform
            designed to inspire wanderers and adventurers. Built with the
            MERN stack, this website allows users to explore new destinations,
            share travel experiences, and connect with fellow travelers. With a
            sleek and responsive design, Wanderlust offers seamless navigation
            and an engaging user experience, making it the perfect tool for those
            looking to plan their next adventure.
          </p>
        </div>
      </div>

      <div className="row project-element">
        <div className="col col-md-6 col-12">
          <img className="project-img" src={img2} alt="" />
        </div>
        <div className="col col-md-6 col-12">
          <h4>
            <a href="https://typing-test-by-aditya.netlify.app/">
              Simple Typing Speed Test&nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <br />
          </h4>
          <p>
            SpeedType is an interactive typing speed test website designed
            to help users improve their typing skills. Built using HTML,
            CSS, and JavaScript, this platform offers real-time feedback
            on typing speed and accuracy, allowing users to track their progress
            over time. With a clean and simple interface, SpeedType provides an
            engaging and user-friendly experience for typists of all levels
            looking to boost their typing efficiency.
          </p>
        </div>
      </div>

      <div className="row project-element">
        <div className="col col-md-6 col-12">
          <img className="project-img" src={img3} alt="" />
        </div>
        <div className="col col-md-6 col-12">
          <h4>
            <a href="https://simon-says-game-by-aditya.netlify.app/">
              Simon Says Game &nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <br />
          </h4>
          <p>
            Simon Says is a fun and interactive memory game built using
            HTML, CSS, and JavaScript. The game challenges players to follow
            sequence of colors and sounds, testing their memory and reaction
            time. With a simple yet engaging design, Simon Says offers an
            exciting and addictive experience, perfect for players looking
            to challenge their brain and improve their memory skills.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Projects;
