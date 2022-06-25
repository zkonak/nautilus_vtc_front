

import { Label } from '../../atoms/Button/Button';
import {TableComponent} from '../../atoms/Table/TableComponent';
import { TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';

import FooterComponent from '../../organisms/Footer/FooterComponent';
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ReservationList from '../../organisms/Reservation/ReservationList';
import SidebarAdmin from '../../organisms/SideBar/SideBarAdmin';
import { DashboardBase, WelcomeDiv, WelcomeText } from './User';


const DashboardAdmin = () => {
  return (<>
     
      <DashboardBase>
          <SidebarAdmin/>
        <WelcomeDiv><WelcomeText>Bienvenue admin!</WelcomeText></WelcomeDiv>
      
     </DashboardBase>
     <TextLightWithSpace>Réservations A Venir</TextLightWithSpace>
     <ReservationList history/>
     <TextLightWithSpace>Réservations Passés</TextLightWithSpace>
     <ReservationList/>

  
    
   
    
    
  
    </>
  );
};

export default DashboardAdmin;