import React from "react";
import { useState, useRef } from "react";
import UseOutsideClick from "./UseOutsideClick";
const OutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Some random stuff</h1>
          <p>CLick outside to close this to close</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default OutsideClickTest;
