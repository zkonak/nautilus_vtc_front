
import BannerComponent from '../../molecules/Banner/BannerComponent';
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import ServicesComponent from '../../organisms/Services/ServicesComponent';
import ServiceTitleComponent from '../../molecules/ServiceTitle/ServiceTitleComponent'
import GammeComponent from '../../organisms/Gamme/GammeComponent';
import ContactComponent from '../../organisms/Contact/ContactComponent';
import FooterComponent from '../../organisms/Footer/FooterComponent';
import { Component } from 'react';
class Home extends Component  {
  
  
    render() {
    return (<>
      <HeaderComponent/>
     <BannerComponent></BannerComponent>
     <ServiceTitleComponent/>
     <ServicesComponent/>
     <GammeComponent/>
     <ContactComponent/>
     <FooterComponent/>
     
    </>
  );
}
}


export default Home;