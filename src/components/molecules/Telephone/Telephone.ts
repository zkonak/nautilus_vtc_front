import styled from "styled-components";

export const Telephone = styled.div`
background-color: ${props => props.theme.colors.greyClair};
display: flex;
justify-content:space-between;
align-items: center;

`;

export const TelephoneIcon = styled.img`

width:50px;
@media only screen and (max-width: 520px) {
    width:30px;
  }
`;

