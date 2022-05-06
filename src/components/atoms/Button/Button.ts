import styled from "styled-components";

export const Button = styled.button`
background-color: ${props => props.theme.colors.green};
border-width :1px;
border-radius: 30px;
box-shadow: 4px 4px 4px 4px #00000040 inset;
border:0px 0px 0px 0px;
display: flex;
align-items: center;
width: 276px;
height: 62px;
justify-content: center;
cursor: pointer;
opacity: 1;
@media only screen and (max-width: 520px) {
  width: 126px;
  height: 42px;
  }
`;

/* identical to box height */




export const Label = styled.p`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoGrandBold.family};
  font-size: ${props =>
    props.theme.fonts.robotoGrandBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoGrandBold.weight};
  line-height: ${props =>
    props.theme.fonts.robotoGrandBold.lineHeight};
  @media only screen and (max-width: 520px) {
    font-size: ${props =>
      props.theme.fonts.robotoRegularBold.size};
      line-height: ${props =>
        props.theme.fonts.robotoRegularBold.lineHeight};
      }
`;



export const SmallButton = styled.button`
background-color: ${props => props.theme.colors.green};
border-width :1px;
border-radius: 30px;
box-shadow: 4px 4px 4px 4px #00000040 inset;
border:0px 0px 0px 0px;
display: flex;
align-items: center;
width: 20%;
height: 40px;
justify-content: center;
cursor: pointer;

`;

export const SmallLabel = styled.p`
  color: ${props => props.theme.colors.white};
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