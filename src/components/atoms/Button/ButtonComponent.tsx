import React from "react";
import { Button, Label, SmallButton, SmallLabel } from "./Button";

const ButtonComponent = (props: any)  => {
  return (
    <Button onClick={props.handleClick}>
      <Label>{props.label}</Label>
    </Button>
  );
};


export const SmallButtonComponent = (props: any)  => {
  return (
    <SmallButton onClick={props.handleClick}>
      <SmallLabel>{props.label}</SmallLabel>
    </SmallButton>
  );
};
export default ButtonComponent;