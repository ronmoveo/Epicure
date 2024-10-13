import { useState, useEffect } from 'react';

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const screenLgMin = "1280px"; 

    const mediaQuery = window.matchMedia(`(min-width: ${screenLgMin})`);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches);
    };

    setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isLargeScreen;
};

export default useIsLargeScreen;