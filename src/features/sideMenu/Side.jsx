import { useState } from 'react';
import MenuList from './MenuList-v1';

function Side() {
  const [ishover, sethover] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 z-50 ml-2 flex h-full grid-rows-[1/-1] flex-col overflow-hidden border-none bg-sidebg 
                    ${ishover ? 'translate-x-0 transition-transform duration-700' : ''}`}
        onMouseOver={() => {
          sethover(true);
        }}
        onMouseOut={() => sethover(false)}
      >
        <img
          src="Logo.png"
          alt="Logo"
          className={`mx-auto my-6 ${!ishover ? 'w-16' : 'w-32 duration-300'}`}
        />
        <MenuList ishover={ishover} />
      </div>
    </>
  );
}

export default Side;

// import React, { useState, useEffect } from 'react';
// import MenuList from './MenuList-v1';

// function Side() {
//   const [ishover, sethover] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       sethover((prevHover) => !prevHover); // Toggle hover state
//     }, 1000); // Interval duration in milliseconds

//     return () => clearInterval(intervalId); // Cleanup function
//   }, []); // Run effect only once on component mount

//   return (
//     <>
//       <div
//         className={`sticky top-0 z-50 ml-2 flex h-dvh grid-rows-[1/-1] flex-col border-none bg-sidebg
//                     ${ishover ? 'translate-x-0 transition-transform duration-700' : ''}`}
//       >
//         <img
//           src="public/Logo.png"
//           alt="Logo"
//           className={`mx-auto my-6 ${!ishover ? 'w-16' : 'w-32 duration-300'}`}
//         />
//         <MenuList ishover={ishover} />
//       </div>
//     </>
//   );
// }

// export default Side;
