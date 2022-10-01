import styled from "styled-components";

const StyledDetail = styled.div`
  padding: 5vh 5vw;
  min-height: 90vh;

  @media (max-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const StyledSection = styled.article`
  margin-top: 10vh;
  display: grid;
  gap: 2vh 5vw;
  grid-template-areas: "flag name name" "flag data1 data2" "flag borders borders";

  img {
    grid-area: flag;
    width: Min(500px, 90vw);
    align-self: stretch;
  }

  h1 {
    margin-top: 1rem;
    grid-area: name;
    font-size: 1.5rem;
  }
  ul {
    list-style-type: none;
  }

  li {
    margin: 0.5rem 0;
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 986px) {
    grid-template-rows: repeat(4, auto);
    grid-template-areas: unset;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  box-shadow: 0 2px 10px rgb(0 0 0 / 17%);
  letter-spacing: 1px;
  border: none;
  width: 7rem;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 2rem;
  }
`;

export const StyledInfoSection = styled.section`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledFirstList = styled.div`
  grid-area: data1;
`;

export const StyledSecondList = styled.div`
  grid-area: data2;
`;

export const StyledBorderSection = styled.div`
  display: flex;
  gap: 1rem;
  grid-area: borders;
  flex-flow: wrap;
  align-items: flex-start;
`;

export const StyledLink = styled.button`
  cursor: pointer;
  box-shadow: 0 2px 10px rgb(0 0 0 / 17%);
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 0.5rem;
`;

export default StyledDetail;
