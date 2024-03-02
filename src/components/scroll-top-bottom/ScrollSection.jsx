import React from "react";
import { useRef } from "react";

const ScrollSection = () => {
  const ref = useRef(null);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  const handleScrollToSection = () => {
    //ref.current: Accesses the current DOM element associated with the ref.
    // getBoundingClientRect(): Retrieves the size of the element and its position relative to the viewport.
    // .top: Returns the distance from the top of the element to the top of the viewport.
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1>Scroll to a particular Section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollSection;
