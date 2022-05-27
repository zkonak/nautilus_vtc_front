
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import FooterComponent from '../../organisms/Footer/FooterComponent';
import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userServices } from '../../../services';
const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async () => {
      try {
          const response = await userServices.signIn({ email, password });
          const user = response.data;

          localStorage.setItem('access-token', user.access_token);
          dispatch(login(user));

          navigate('/dashboard');
      } catch (error: any) {
          setError(true);
      }
  }




  return (<>
      <HeaderComponent/>
      <TextLightWithSpace>Se Connecter</TextLightWithSpace>
     <Form>
      <FormInput type='mail'  placeholder='E-Mail'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></FormInput>
      <FormInput type='password'  placeholder='Mot de Pass'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></FormInput>
      <FormButtonComponent label="Se Connecter"  onClick={handleClick}></FormButtonComponent>
      <FormLink href="/signup">Créer Mon Compte..</FormLink>
     </Form>
     
    </>
  );
};

export default Login;

function login(user: any): any {
  throw new Error('Function not implemented.');
}
