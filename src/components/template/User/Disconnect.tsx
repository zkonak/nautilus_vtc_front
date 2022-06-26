

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/user.action';
import { useEffect } from 'react';

const Disconnect = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(logout());
    navigate('/');
   

  }, []);
 
      
  
   return(<></>)
        }

 






export default Disconnect;




