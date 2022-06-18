import styled from "styled-components";

export const DropDownList= styled.select`
background-color: ${props => props.theme.colors.grey};
width: 52%;
height: 35px;
margin:1%;
border-radius: 30px;
resize: none;
padding:1%;
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