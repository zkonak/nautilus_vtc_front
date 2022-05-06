import styled from "styled-components";
import image from "../../../assets/photo-paris.png";

export const Banner = styled.div`
  color: ${props => props.theme.colors.white};
  background-image : url(${image});
  width: 100%;
  min-height: 405px;
  text-align: center;
  filter: blur(4px);
  font-family: ${props =>
    props.theme.fonts.robotoGrandBold.family};
  font-size: ${props =>
    props.theme.fonts.robotoGrandBold.size};
  font-weight: ${props =>
    props.theme.fonts.robotoGrandBold.weight};
  line-height: ${props =>
    props.theme.fonts.robotoGrandBold.lineHeight};
   
  @media only screen and (max-width: 820px) {
    font-size: ${props =>
      props.theme.fonts.robotoRegularBold.size};
   } 
 
  
`;

export const Rectangle = styled.div`
position: absolute;
width: 40%;
height: 291px;
left: 430px;
top: 186px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: rgba(0, 0, 0, 0.6);
opacity: 0.7;
border: 1px solid rgba(0, 0, 0, 0.8);
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
float:left;
@media only screen and (max-width: 820px) {
  float:none;
  height: 230px;
  left: 198px;
  top: 200px;
  width: 60%;
  }
  @media only screen and (max-width: 520px) {
    float:none;
    height:190px;
    left:50px;
    top:250px;
    width: 80%;
    }
`;



