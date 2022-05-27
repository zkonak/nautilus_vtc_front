
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ContactComponent from '../../organisms/Contact/ContactComponent';
import { Component } from 'react';
import { DashboardBase } from '../User/User';
import Sidebar from '../../organisms/SideBar/SideBar';
import { TextLight, TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
class About extends Component  {
  
  
    render() {
    return (<>
      <HeaderComponent/>
      <TextLightWithSpace>NAUTILUS VTC</TextLightWithSpace>
      <TextLight>A propos...</TextLight>
    
    </>
  );
}
}
export default About;