import styled from "styled-components";

export const GammePanelBase = styled.div`

  background-color: ${props => props.theme.colors.greyClair} ;
  display: flex;
  justify-content:center;
  align-items: center;
  width:80%;
  margin-top:2%;
  padding:0.5%
  `;


  export const GammePanelDiv = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width:25%;
  `;

  export const GammePanelImg = styled.img`
  width:15%;
  `;

  export const GammePanelText = styled.p`
color: ${props => props.theme.colors.black} ;
text-align: center;
display : inline;
font-family: ${props =>
  props.theme.fonts.robotoRegularLight.family};
font-size: ${props =>
  props.theme.fonts.robotoRegularBold.size};
font-weight: ${props =>
  props.theme.fonts.robotoRegularLight.weight};
line-height: ${props =>
  props.theme.fonts.robotoRegularLight.lineHeight};
  cursor: pointer;
`;