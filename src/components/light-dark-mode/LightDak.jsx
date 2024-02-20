// LightDark.jsx

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import UseLocalStorage from "./UseLocalStorage";

const LightDark = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      <LightDarkMode data-theme={theme}>
        <Container>
          <p>Hello World</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </Container>
      </LightDarkMode>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --text-primary: #000;
    --button-bg: #000;
    --button-text: #ffffff;
  }

  body {
    margin: 0; /* Reset default margin */
  }

  [data-theme="dark"] {
    --background: #000;
    --text-primary: #fff;
    --button-bg: #fff;
    --button-text: #000;
  }
`;

const LightDarkMode = styled.div`
  background-color: ${(props) => (props["data-theme"] === "light" ? "#ffffff" : "var(--background)")};
  color: ${(props) => (props["data-theme"] === "light" ? "#000000" : "#565656")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  transition: all 0.5s;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    color: var(--text-primary);
    font-size: 40px;
    margin: 0px;
  }

  & button {
    background-color: var(--button-bg);
    border: 1px solid var(--button-bg);
    color: var(--button-text);
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default LightDark;
