import { TextArea, Input} from "./TextArea";

export const TextAreaComponent = (props:any) => {
  return (
    <TextArea placeholder={props.placeholder} onChange={props.onChange}/>
  );
};

export const InputComponent = (props:any) => {
    
    return (
      <Input type={props.type} placeholder={props.placeholder}  onChange={props.onChange} />
    );
  };

