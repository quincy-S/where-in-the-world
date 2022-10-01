import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import StyledDetail, {
  StyledSection,
  StyledFirstList,
  StyledSecondList,
  StyledButton,
  StyledLink,
  StyledBorderSection,
} from "./StyledDetail";
import backImg from "../../assets/arrow-back-outline.svg";

const Detail = ({ countries }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selected = countries.find(
    (country) => country.cca3.toLowerCase() === id.toLowerCase()
  );

  function fullName(abbrev) {
    const found = countries.find(
      (country) => country.cca3.toLowerCase() === abbrev.toLowerCase()
    );
    return found.name.common;
  }

  return (
    <StyledDetail>
      <StyledButton onClick={() => navigate(-1)}>
        <img src={backImg} />
        Back
      </StyledButton>
      <StyledSection>
        <img src={selected.flags.png} />
        <h1>{selected.name.common}</h1>
        <StyledFirstList>
          <ul>
            <li>
              Native Name:
              {Object.values(selected.name.nativeName).map((el, idx) => (
                <span key={idx}> {el.common}, </span>
              ))}
            </li>
            <li>
              Population:<span> {selected.population}</span>
            </li>
            <li>
              Region:<span> {selected.region}</span>
            </li>
            <li>
              Sub Region:<span> {selected.subregion}</span>
            </li>
            <li>
              Capital:<span> {selected.capital}</span>
            </li>
          </ul>
        </StyledFirstList>
        <StyledSecondList>
          <ul>
            <li>
              Top Level Domain:
              {selected.tld &&
                selected.tld.map((el) => <span key={el}> {el}</span>)}
            </li>
            <li>
              Currencies:
              {Object.values(selected.currencies) &&
                Object.values(selected.currencies).map((el) => (
                  <span key={el.name}> {el.name}</span>
                ))}
            </li>

            <li>
              Languages:
              {Object.values(selected.languages) &&
                Object.values(selected.languages).map((el) => (
                  <span key={el}> {el}</span>
                ))}
            </li>
          </ul>
        </StyledSecondList>

        <StyledBorderSection>
          <h4>Border Countries:</h4>
          {selected.borders &&
            selected.borders.map((el) => (
              <StyledLink key={el} onClick={() => navigate(`/details/${el}`)}>
                {fullName(el)}
              </StyledLink>
            ))}
        </StyledBorderSection>
      </StyledSection>
    </StyledDetail>
  );
};

export default Detail;
