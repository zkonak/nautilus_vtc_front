import styled from "styled-components";
export const TextLightWithSpace = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoRegularLightWithSpace.family};
  font-size: ${props =>
    props.theme.fonts.robotoRegularLightWithSpace.size};
  font-weight: ${props =>
    props.theme.fonts.robotoRegularLightWithSpace.weight};
  line-height: ${props =>
    props.theme.fonts.robotoRegularLightWithSpace.lineHeight};
  letter-spacing:${props =>
    props.theme.fonts.robotoRegularLightWithSpace.letterspacing};
  margin-top:5%;
`;

export const TextLight = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props =>
    props.theme.fonts.robotoRegularLight.family};
  font-size: ${props =>
    props.theme.fonts.robotoRegularLight.size};
  font-weight: ${props =>
    props.theme.fonts.robotoRegularLight.weight};
  line-height: ${props =>
    props.theme.fonts.robotoRegularLight.lineHeight};
`;