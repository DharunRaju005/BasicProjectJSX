import React, { useEffect, useRef, useState } from "react";
import UseFetch from "../use-fetch-custom-hook/UseFetch";

const TopBottom = () => {
  const { data, error, pending } = UseFetch("https://dummyjson.com/products?limit=100", {});
  const bottomRef = useRef(null);
  //console.log(data);

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (error) {
    return <h1>Error occured !##! </h1>;
  }

  if (pending) {
    return <h2>Please wait!! Loading</h2>;
  }

  return (
    <div>
      <h1>Scroll to top and bottom feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to the bottom</button>
      <ul style={{ listStyle: "none" }}>{data && data.products.length && data.products ? data.products.map((item) => <li>{item.title}</li>) : null}</ul>
      <button onClick={handleScrollToTop}>Scrool to Top</button>
      <div ref={bottomRef}></div>
      <h3>U R in the bottom of the page</h3>
    </div>
  );
};

export default TopBottom;
