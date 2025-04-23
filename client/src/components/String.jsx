// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const String = () => {
//   const containerRef = useRef(null);
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const path = pathRef.current;

//     const updatePath = () => {
//       const width = container.offsetWidth;
//       const height = container.offsetHeight;

//       const startX = 0;
//       const endX = width;
//       const midX = width / 2;
//       const midY = height / 2;

//       const finalPath = `M ${startX} ${midY} Q ${midX} ${midY} ${endX} ${midY}`;
//       path.setAttribute('d', finalPath);

//       return { startX, endX, midY, finalPath };
//     };

//     let { startX, endX, midY, finalPath } = updatePath();

//     const handleMouseMove = (e) => {
//       const rect = container.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const curvedPath = `M ${startX} ${midY} Q ${x} ${y} ${endX} ${midY}`;
//       gsap.to(path, {
//         attr: { d: curvedPath },
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(path, {
//         attr: { d: finalPath },
//         duration: 1.2,
//         ease: 'elastic.out(1, 0.3)', // bouncy return
//       });
//     };

//     container.addEventListener('mousemove', handleMouseMove);
//     container.addEventListener('mouseleave', handleMouseLeave);

//     // Handle responsive updates
//     const handleResize = () => {
//       ({ startX, endX, midY, finalPath } = updatePath());
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       container.removeEventListener('mousemove', handleMouseMove);
//       container.removeEventListener('mouseleave', handleMouseLeave);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="stringdiv" ref={containerRef}>
//       <svg
//         viewBox="0 0 1000 100"
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           ref={pathRef}
//           stroke="white"
//           fill="transparent"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );
// };

// export default String;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const String = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const startX = 10;
    const endX = width - 10;
    const midX = (startX + endX) / 2;
    const midY = height / 2;

    const finalPath = `M ${startX} ${midY} Q ${midX} ${midY} ${endX} ${midY}`;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const animatedPath = `M ${startX} ${midY} Q ${x} ${y} ${endX} ${midY}`;

      gsap.to(path, {
        attr: { d: animatedPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Set initial path
    path.setAttribute("d", finalPath);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className='stringdiv'
      ref={containerRef}
    >
       
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          stroke="white"
          fill="transparent"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default String;
