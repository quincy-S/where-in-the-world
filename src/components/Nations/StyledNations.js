import styled from "styled-components";

const StyledNations = styled.section`
  padding: 1rem 2rem;
  ${"" /* padding: 5vh 5vw 0; */}
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export default StyledNations;
