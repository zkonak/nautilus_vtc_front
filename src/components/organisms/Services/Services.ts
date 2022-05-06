import styled from "styled-components";

export const Services = styled.div`
background-color: ${props => props.theme.colors.white};
display: flex;
justify-content:space-between;
align-items: center;
width:70%;
height:auto;
@media only screen and (max-width: 520px) {
    flex-direction:column;
    width:90%;
  }

`;