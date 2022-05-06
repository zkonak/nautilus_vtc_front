import styled from "styled-components";

export const Header = styled.div`
background-color: ${props => props.theme.colors.greyClair};
display: flex;
justify-content:space-around;
align-items: center;
width:100%;
height:auto;
@media only screen and (max-width: 520px) {
    flex-direction:column;
  }
`;