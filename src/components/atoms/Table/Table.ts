import React from "react";
import styled from "styled-components";

export const TableBase = styled.div `
  display:flex;
  flex-direction:column;
  align-items:center;
  
  margin:2%;
  padding:1%
`

export const SearchBar = styled.input`

background-color: ${props => props.theme.colors.white};
type:text;
width:70%;
height: 30px;
placeholder:Rechercher..;
border-radius: 30px;
border:1px 1px 1px 1px ${props => props.theme.colors.green};
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

    export const TableButton = styled.button`
    background-color: ${props => props.theme.colors.green};
    border-width :1px;
    border-radius: 30px;
    box-shadow: 4px 4px 4px 4px #00000040 inset;
    border:0px 0px 0px 0px;
    display: flex;
    align-items: center;
    width: 80%;
    height: 30px;
    justify-content: center;
    cursor: pointer;
    color:${props => props.theme.colors.white};
    
    `;