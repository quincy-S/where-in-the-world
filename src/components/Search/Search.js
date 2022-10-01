import React, { useState } from "react";
import StyledSection, {
  StyledInput,
  StyledFilter,
  StyledList,
} from "./StyledSearch";
import { ReactComponent as ArrowImg } from "../../assets/chevron-down-outline.svg";

const Search = ({ query, handleChange, addFilter }) => {
  const [show, setShow] = useState(false);

  return (
    <StyledSection>
      <StyledInput
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        value={query}
      />
      <StyledFilter>
        <span>
          Filter by Region
          <ArrowImg onClick={() => setShow(!show)} />
        </span>
        <StyledList show={show}>
          <ul>
            <li onClick={addFilter}>Africa</li>
            <li onClick={addFilter}>America</li>
            <li onClick={addFilter}>Asia</li>
            <li onClick={addFilter}>Europe</li>
            <li onClick={addFilter}>Oceania</li>
          </ul>
        </StyledList>
      </StyledFilter>
    </StyledSection>
  );
};

export default Search;
