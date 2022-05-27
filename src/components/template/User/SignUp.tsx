
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
import { login } from '../../../store/actions/user.action';
import ErrorAlert from '../../atoms/ErrorAlert/ErrorAlert';
const SignUp = () => {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = async (props: any) => {
      try {
          const type="U";
          if(email===''||email==null){
            setMessage("Email est invalid");
            setError(true)
          }
          else if(lastname===''||lastname==null){
            setMessage("Nom est invalid");
            setError(true)
          }
          else if(name===''||name==null){
            setMessage("Prénom est invalid");
            setError(true)
          }
          else if(password===''||password==null){
            setMessage("Prénom est invalid");
            setError(true)
          }
          else{
            setMessage("");
            setError(false)
          }


          const response = await userServices.signUp({ email, password,name,lastname,address,tel,type});
          const user = response.data;
          console.log("user",user)
          //localStorage.setItem('access-token', user.access_token);
          //dispatch(login(user));
          // if(error===false){
          //    navigate('/login');
          // }
           
      } catch (error: any) {
          setError(true);
      }
  }



  return (<>
      <HeaderComponent/>
      <TextLightWithSpace>S'inscrire</TextLightWithSpace>
     <Form>
     <ErrorAlert error={error} setError={setError} message={message} />
      <FormInput type='mail'  placeholder='E-Mail'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></FormInput>
      <FormInput type='text'  placeholder='Nom'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}></FormInput>
      <FormInput type='text' placeholder='Prénom'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></FormInput>
      <FormInput type='password'  placeholder='Mot de Pass'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></FormInput>
      <FormInput type='password' placeholder='Confirmez Mot de Passe'></FormInput>
      <FormInput type='text'  placeholder='Adress'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}></FormInput>
      <FormInput type='telephone'   placeholder='Tél'  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)}></FormInput>
      <FormButtonComponent label="Créer Mon Compte" handleClick={handleClick}></FormButtonComponent>
      <FormLink href="/login">Si vous êtes déjà inscrit cliquer pour se connecter..</FormLink>
     </Form>
    
    </>
  );
};

export default SignUp;