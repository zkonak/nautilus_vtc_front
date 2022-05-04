import { TextArea, TextField} from "./TextArea";

export const TextAreaComponent = ({ placeholder = "Discover more" }) => {
  return (
    <TextArea placeholder={placeholder}/>
  );
};

export const TextFieldComponent = ({ placeholder = "Discover more" }) => {
    return (
      <TextField placeholder={placeholder}/>
    );
  };

