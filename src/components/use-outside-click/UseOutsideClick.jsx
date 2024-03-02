import React, { useEffect } from "react";

const UseOutsideClick = (ref, handler) => {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        // Do something if the click or touch is inside the container
        return;
      }
      // Do something if the click or touch is outside the container
      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default UseOutsideClick;
