import { SmallLabel } from "../Button/Button";
import { Form, FormButton } from "./Form";

 const FormComponent = ({label=""}) => {
  return (<> <Form>
      {label}

  </Form>
  </>
   
  );
};

export const FormButtonComponent = (props: any) => {
    return (
      <FormButton onClick={props.handleClick}>
        <SmallLabel>{props.label}</SmallLabel>
      </FormButton>
    );
  };
 
export default FormComponent;