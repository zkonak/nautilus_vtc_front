

import { useState } from 'react';
import { Label } from '../../atoms/Button/Button';
import {TableComponent} from '../../atoms/Table/TableComponent';
import { TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';

import FooterComponent from '../../organisms/Footer/FooterComponent';
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ReservationList from '../../organisms/Reservation/ReservationList';
import Sidebar from '../../organisms/SideBar/SideBar';
import { DashboardBase, WelcomeDiv, WelcomeText } from './User';


 




const Dashboard = () => {

  const user=localStorage.getItem("user")
  const userState=user ? JSON.parse(user) : null;
  return (<>
     
      <DashboardBase>
          <Sidebar/>
        <WelcomeDiv><WelcomeText>Bienvenue {userState.name}</WelcomeText></WelcomeDiv>
      
     </DashboardBase>
     <TextLightWithSpace>Réservations A Venir</TextLightWithSpace>
     <ReservationList history/>
     <TextLightWithSpace>Réservations Passés</TextLightWithSpace>
     <ReservationList/>

  
    
   
    
    
  
    </>
  );
};

export default Dashboard;