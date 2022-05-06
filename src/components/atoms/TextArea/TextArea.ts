import styled from "styled-components";

export const TextArea = styled.textarea`
background-color: ${props => props.theme.colors.grey};
width: 75%;
height: 140px;

border-radius: 30px;
resize: none;
padding:2%;
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




export const Input = styled.input`

background-color: ${props => props.theme.colors.grey};

width:25%;
height: 30px;
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