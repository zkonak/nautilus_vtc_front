import { TextArea, Input} from "./TextArea";

export const TextAreaComponent = ({ placeholder = "Discover more" }) => {
  return (
    <TextArea placeholder={placeholder}/>
  );
};

export const InputComponent = ({ placeholder = "Discover more",type="text" }) => {
    
    return (
      <Input type={type} placeholder={placeholder} />
    );
  };

