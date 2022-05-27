
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ContactComponent from '../../organisms/Contact/ContactComponent';
import { Component } from 'react';
import { DashboardBase } from '../User/User';
import Sidebar from '../../organisms/SideBar/SideBar';
class Contact extends Component  {
  
  
    render() {
    return (<>
      <HeaderComponent/>
      <DashboardBase>
      <Sidebar/>
      </DashboardBase>
      <ContactComponent/>
    
    </>
  );
}
}


export default Contact;