import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.elements};
  box-shadow: ${(props) => props.theme.shadow};
`;

export const StyledSection = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  h5 {
    cursor: pointer;
  }

  button {
    display: flex;
    flex-direction: row;
    border: none;
    gap: 1rem;
    align-items: center;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.text};
  }
  img {
    width: 2rem;
  }
`;

export default StyledHeader;
