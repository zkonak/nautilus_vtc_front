import styled from "styled-components";

export const Footer = styled.div`
background-color: ${props => props.theme.colors.greyClair};
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:100%;
height:auto;
`;
export const FooterDiv = styled.div`
background-color: ${props => props.theme.colors.grey};
display: flex;
justify-content:left;
align-items: left;
width:100%;
height:auto;
`;

export const SmallTextLight = styled.p`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoSmallLight.family};
  font-size: ${props =>
    props.theme.fonts.robotoSmallLight.size};
  font-weight: ${props =>
    props.theme.fonts.robotoSmallLight.weight};
  line-height: ${props =>
    props.theme.fonts.robotoSmallLight.lineHeight};
  margin:2%
`;