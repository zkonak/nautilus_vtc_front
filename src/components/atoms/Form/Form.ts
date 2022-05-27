import styled from "styled-components";

export const Form = styled.div`
background-color: ${props => props.theme.colors.white};
border-width :1px;
border-radius: 30px;
box-shadow: 4px 4px 4px 4px ${props => props.theme.colors.green} inset;
border:0px 0px 0px 0px ${props => props.theme.colors.green};
display: flex;
flex-direction:column;
align-items: center;
width:60%;
text-align:left;
justify-content: center;
padding:1%;
margin:1%;
@media only screen and (max-width: 520px) {
  width: 80%;
  
  }
`;

export const FormInput = styled.input`

background-color: ${props => props.theme.colors.grey};
padding:1%;
margin:1%;
width:50%;
height: 20px;
placeholder:Votre Message..;
border-radius: 30px;
border:none;
font-family: ${props =>
    props.theme.fonts.robotoRegularLight.family};
  font-size: ${props =>
    props.theme.fonts.robotoRegularBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoRegularLight.weight};
  line-height: ${props =>
    props.theme.fonts.robotoRegularLight.lineHeight};
    &:focus { 
        outline: none !important;
        border-color: ${props => props.theme.colors.green};
        box-shadow: 0 0 10px ${props => props.theme.colors.green};;
    }
    `;

    export const FormButton = styled.button`
        background-color: ${props => props.theme.colors.green};
        border-width :1px;
        border-radius: 30px;
        box-shadow: 4px 4px 4px 4px #00000040 inset;
        border:0px 0px 0px 0px;
        display: flex;
        align-items: center;
        width: 52%;
        height: 30px;
        justify-content: center;
        cursor: pointer;

`;

export const FormLink = styled.a`
color: ${props => props.theme.colors.green};
font-family: ${props =>
    props.theme.fonts.robotoRegularLight.family};
  font-size: ${props =>
    props.theme.fonts.robotoRegularBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoRegularBold.weight};
  line-height: ${props =>
    props.theme.fonts.robotoRegularLight.lineHeight};
cursor: pointer;
text-decoration:none;
margin-top:1%;

`;
