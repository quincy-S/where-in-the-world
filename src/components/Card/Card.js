import React from "react";
import StyledCard, { StyledSection, StyledHeader } from "./StyledCard";

const Card = ({ country }) => {
  return (
    <StyledCard>
      <StyledHeader>
        <img src={country.flags.png} />
      </StyledHeader>
      <StyledSection>
        <h1>{country.name.common}</h1>
        <ul>
          <li>
            Population:<span> {country.population}</span>
          </li>

          <li>
            Region:<span> {country.region}</span>
          </li>

          <li>
            Capital:<span> {country.capital}</span>
          </li>
        </ul>
      </StyledSection>
    </StyledCard>
  );
};

export default Card;
