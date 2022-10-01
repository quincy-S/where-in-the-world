import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0 2px 10px rgb(0 0 0 / 17%);
  width: 280px;
  height: 370px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.elements};
`;

export const StyledSection = styled.section`
  padding: 0 1.5rem;
  margin-top: 0.2rem;

  h1 {
    font-size: 1.3rem;
  }

  ul {
    margin-top: 0.5rem;
  }
  li {
    list-style-type: none;
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }
`;

export const StyledHeader = styled.header`
  img {
    width: 100%;
    height: 180px;
  }
`;

export default StyledCard;
