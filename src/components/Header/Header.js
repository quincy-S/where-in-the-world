import React from "react";
import StyledHeader, { StyledSection } from "./StyledHeader";
import sunImg from "../../assets/sunny-outline.svg";
import moonImg from "../../assets/moon-outline.svg";

const Header = ({ toggleTheme, selected }) => {
  console.log(selected);
  return (
    <StyledHeader>
      <StyledSection>
        <h3>Where in the world?</h3>
        {selected === 1 ? (
          <button onClick={toggleTheme}>
            <img src={sunImg} />
            Light Mode
          </button>
        ) : (
          <button onClick={toggleTheme}>
            <img src={moonImg} />
            Dark Mode
          </button>
        )}
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
