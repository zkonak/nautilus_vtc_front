import styled from "styled-components";
export const MenuItem = styled.p`
  color: ${props => props.theme.colors.green};
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