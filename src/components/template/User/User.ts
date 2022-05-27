import styled from "styled-components";

export const DashboardBase = styled.div`
display:flex;
align-items: left;
width:100%
`;

export const WelcomeDiv = styled.div`
background-color: ${props => props.theme.colors.grey};
display: flex;
justify-content:right;
align-items: right;
width:100%;
height:auto;
`;

export const WelcomeText = styled.p`
  color: ${props => props.theme.colors.green};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoGrandBold.family};
  font-size: ${props =>
    props.theme.fonts.robotoGrandBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoGrandBold.weight};
  line-height: ${props =>
    props.theme.fonts.robotoGrandBold.lineHeight};
margin-right:1%;
  @media only screen and (max-width: 520px) {
    font-size: ${props =>
      props.theme.fonts.robotoRegularBold.size};
      line-height: ${props =>
        props.theme.fonts.robotoRegularBold.lineHeight};
      }
`;


