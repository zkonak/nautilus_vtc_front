import { SmallLabel } from "../Button/Button";
import { Form, FormButton } from "./Form";

 const FormComponent = ({label=""}) => {
  return (<> <Form>
      {label}

  </Form>
  </>
   
  );
};

export const FormButtonComponent = ({ label = "Discover more" }) => {
    return (
      <FormButton>
        <SmallLabel>{label}</SmallLabel>
      </FormButton>
    );
  };
 
export default FormComponent;