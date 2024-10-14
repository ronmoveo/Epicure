import { useState, useEffect, useCallback } from 'react';
import { UseIsLargeScreenProps } from '../../interfaces';
import { SCREEN_XL_MIN } from '../../utils/constants';



const useIsLargeScreen = ({ size }: UseIsLargeScreenProps = {}): boolean => {
  
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const handleMediaQueryChange = useCallback((event: MediaQueryListEvent) => {
    setIsLargeScreen(event.matches);
  }, []);

  useEffect(() => {
    const screenLgMin = size ?? SCREEN_XL_MIN;
    const mediaQuery = window.matchMedia(`(min-width: ${screenLgMin}px)`);

    setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [handleMediaQueryChange, size]);

  return isLargeScreen;
};

export default useIsLargeScreen;