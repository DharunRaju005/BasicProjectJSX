import React, { useLayoutEffect, useState } from "react";

const UseWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  //useEffect only load when all the DOM elements are rendered in the browser whereas  useLayoutEffect willbe called before rendering the dom elemnets

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
};

export default UseWindowResize;
