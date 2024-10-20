import { useState, useEffect, useCallback } from 'react';
import { useIsDesktopProps } from '../../interfaces';
import { SCREEN_XL_MIN } from '../../utils/constants';



const useIsDesktop = ({ screenWidth }: useIsDesktopProps = {}): boolean => {
  
  const [IsDesktopScreen, setIsDesktopScreen] = useState(false);
  const handleMediaQueryChange = useCallback((event: MediaQueryListEvent) => {
    setIsDesktopScreen(event.matches);
  }, []);

  useEffect(() => {
    const screenDesktopWidth = screenWidth ?? SCREEN_XL_MIN;
    const mediaQuery = window.matchMedia(`(min-width: ${screenDesktopWidth}px)`);

    setIsDesktopScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [handleMediaQueryChange, screenWidth]);

  return IsDesktopScreen;
};

export default useIsDesktop;