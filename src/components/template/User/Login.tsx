
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
import { authLogin } from '../../../store/actions/user.action';
const Login = () => {
  let navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async () => {
      try {
        
          const response = await userServices.signIn({mail, password });
          const user = response.data;
          localStorage.setItem('access-token', user.refreshToken);
          localStorage.setItem('userId', user.user.id);
          dispatch(authLogin(user));

          navigate('/dashboard');
      } catch (error: any) {
          setError(true);
      }
  }




  return (<>
      <HeaderComponent/>
      <TextLightWithSpace>Se Connecter</TextLightWithSpace>
     <Form>
      <FormInput type='mail'  placeholder='E-Mail'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}></FormInput>
      <FormInput type='password'  placeholder='Mot de Pass'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></FormInput>
      <FormButtonComponent label="Se Connecter"  handleClick={handleClick}></FormButtonComponent>
      <FormLink href="/signup">Créer Mon Compte..</FormLink>
     </Form>
     
    </>
  );
};

export default Login;


