//Custom Hooks

import { useEffect, useState } from "react";

const UseLocalStorage = (key, defaultValue) => {
  // console.log("UseLocalStorage hook called");
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (eror) {
      console.log(eror);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;
