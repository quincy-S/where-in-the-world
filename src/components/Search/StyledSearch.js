import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  padding: 1rem 2rem;

  flex-flow: row wrap;
  justify-content: space-between;

  margin: 2rem 0;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.elements};
  margin-right: 5vw;
  margin-bottom: 5vw;
  padding: 0 2rem;
  width: Min(90vw, 550px);
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  box-shadow: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.text};

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    font-family: "Nunito Sans", sans-serif;
  }
`;

export const StyledFilter = styled.div`
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 5px;
    padding: 1rem 2rem;
    width: Min(50vw, 250px);
    display: flex;
    font-weight: 300;
    letter-spacing: 1px;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.elements};
  }

  svg {
    width: 2rem;
    margin-left: auto;
    stroke: ${(props) => props.theme.text};
  }
`;

export const StyledList = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 5px;
  padding: 1rem 2rem;
  width: Min(50vw, 250px);
  display: flex;
  font-weight: 300;
  letter-spacing: 1px;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.elements};
  margin-top: 0.5rem;
  position: absolute;
  width: Min(50vw, 250px);
  display: ${(props) => (props.show ? `block` : `none`)};
  ul {
    list-style-type: none;
    cursor: pointer;
  }

  li {
    margin: 0.3rem 0;
  }
`;

export default StyledSection;
