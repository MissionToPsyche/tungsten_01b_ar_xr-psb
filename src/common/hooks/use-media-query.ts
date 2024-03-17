import { useState, useEffect } from 'react';

const useMediaQuery = (minWidth: number) => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWinddowWidth = window.innerWidth;
      const isDesiredWidth = currentWinddowWidth < minWidth;
      setState({
        windowWidth: currentWinddowWidth,
        isDesiredWidth
      });
    };
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [minWidth, state.windowWidth]);

  return state.isDesiredWidth;
};

export default useMediaQuery;
