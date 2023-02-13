import { useEffect, useState } from 'react';

export const useClickOutside = (ref: any, handler: CallableFunction) => {
  useEffect(() => {
    const listener = (e: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref?.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    };
  }, [handler, ref]);
};

// export function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

// export default function useWindowDimensions() {
//   const hasWindow = typeof window !== 'undefined';

//   function getWindowDimensions() {
//     const width = hasWindow ? window.innerWidth : null;
//     const height = hasWindow ? window.innerHeight : null;
//     return {
//       width,
//       height,
//     };
//   }

//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     if (hasWindow) {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }

//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, [hasWindow]);

//   return windowDimensions;
// }
