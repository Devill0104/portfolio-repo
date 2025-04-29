import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ConnectorPath = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
        scrub: 1
      },
    });
  }, []);

  return (
    <div
      className="containerPath"
      ref={containerRef}
      style={{
        width: '100%',
        padding: '0 5vw',
        boxSizing: 'border-box',
        marginTop: '100px',
      }}
    >
      <svg
        width="100%"
        height="100px"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Start Circle */}
        <circle cx="0" cy="50" r="6" fill="#ffffff" />

        {/* Path - start from left (0,50), angle up (38,12), then flat line */}
        <path
          ref={pathRef}
          d="M 0 50 L 38 12 L 1000 12"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ConnectorPath;
