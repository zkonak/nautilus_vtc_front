import styled from "styled-components";


interface IProps {
    
    isActive?: boolean;
    onClick?: () => void;
    
  }

export const GammeTitleDivBase = styled.div`

  background-color: ${props => props.theme.colors.greyClair} ;
  display: flex;
  justify-content:center;
  align-items: center;
  width:80%;
  margin-top:5%
  `;

export const GammeTitleDiv = styled.div<IProps>`

background-color: ${props => props.isActive ? props.theme.colors.green : props.theme.colors.greyClair} ;
display: flex;
justify-content:center;
align-items: center;
width:33%;

`;


export const GammeTitleText = styled.p<IProps>`
color: ${props => props.isActive ? props.theme.colors.white : props.theme.colors.black} ;
text-align: center;
display : inline;
font-family: ${props =>
  props.theme.fonts.robotoRegularBold.family};
font-size: ${props =>
  props.theme.fonts.robotoRegularBold.size};
font-weight: ${props =>
  props.theme.fonts.robotoRegularBold.weight};
line-height: ${props =>
  props.theme.fonts.robotoRegularBold.lineHeight};
  cursor: pointer;
`;