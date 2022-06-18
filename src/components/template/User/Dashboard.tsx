

import {TableComponent} from '../../atoms/Table/TableComponent';

import FooterComponent from '../../organisms/Footer/FooterComponent';
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ReservationList from '../../organisms/Reservation/ReservationList';
import Sidebar from '../../organisms/SideBar/SideBar';
import { DashboardBase, WelcomeDiv, WelcomeText } from './User';


const Dashboard = () => {
  return (<>
     
      <DashboardBase>
          <Sidebar/>
        <WelcomeDiv><WelcomeText>Bienvenue Zeliha!</WelcomeText></WelcomeDiv>
      
     </DashboardBase>
     <ReservationList/>
    
   
    
    
  
    </>
  );
};

export default Dashboard;