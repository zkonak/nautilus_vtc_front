import styled from "styled-components";

export const ContactBase = styled.div`
background-color: ${props => props.theme.colors.white};
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:80%;
height:auto;
margin-top:2%;
padding:2%;
`;

export const ContactDiv = styled.div`
background-color: ${props => props.theme.colors.white};
display: flex;
justify-content:space-around;
align-items: center;
width:80%;
height:auto;
margin-top:2%;
padding:2%;
`;