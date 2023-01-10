import { useEffect } from 'react';

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

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
