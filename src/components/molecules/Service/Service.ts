import styled from "styled-components";

export const Service = styled.div`
background-color: ${props => props.theme.colors.greyClair};
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
width:20%;
height:250px;

`;
export const ServiceIcon = styled.img`
padding-top:10%;
`;

export const ServiceTextBold = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoRegularBold.family};
  font-size: ${props =>
    props.theme.fonts.robotoRegularBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoRegularBold.weight};
  line-height: ${props =>
    props.theme.fonts.robotoRegularBold.lineHeight};
`;

export const ServiceText = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoRegularLight.family};
  font-size: ${props =>
    props.theme.fonts.robotoRegularBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoRegularLight.weight};
  line-height: ${props =>
    props.theme.fonts.robotoRegularLight.lineHeight};
`;