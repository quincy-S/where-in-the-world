import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Content from "./components/Content/Content";
import { theme } from "./theme/themes";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [selected, setSelected] = useState(0);

  const themes = {
    0: "lightMode",
    1: "darkMode",
  };
  function toggleTheme() {
    if (selected == 0) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme[themes[selected]]}>
        <GlobalStyle />
        <Content toggleTheme={toggleTheme} selected={selected} />
      </ThemeProvider>
    </>
  );
};

export default App;
