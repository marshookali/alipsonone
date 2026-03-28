import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard coordinates are much safer for cross-browser mobile support (iOS Safari)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
