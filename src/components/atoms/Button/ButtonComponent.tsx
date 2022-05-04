import React from "react";
import { Button, Label, SmallButton, SmallLabel } from "./Button";

const ButtonComponent = ({ label = "Discover more" }) => {
  return (
    <Button>
      <Label>{label}</Label>
    </Button>
  );
};


export const SmallButtonComponent = ({ label = "Discover more" }) => {
  return (
    <SmallButton>
      <SmallLabel>{label}</SmallLabel>
    </SmallButton>
  );
};
export default ButtonComponent;