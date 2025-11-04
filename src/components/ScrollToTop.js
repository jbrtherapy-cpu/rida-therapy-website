import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // This hook gets the current page's URL "pathname"
  const { pathname } = useLocation();

  // This effect will run every time the "pathname" changes
  useEffect(() => {
    // This command scrolls the window to the very top
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  // This component doesn't render any visible HTML
  return null;
}

export default ScrollToTop;