
import styles from './App.module.scss';


import BannerComponent from './components/molecules/Banner/BannerComponent';

import HeaderComponent from './components/organisms/Header/HeaderComponent';
import ServicesComponent from './components/organisms/Services/ServicesComponent';
import ServiceTitleComponent from './components/molecules/ServiceTitle/ServiceTitleComponent'
import GammeComponent from './components/organisms/Gamme/GammeComponent';
import ContactComponent from './components/organisms/Contact/ContactComponent';
function App() {
  return (
    <div className={styles.container}>
     <HeaderComponent/>
     <BannerComponent></BannerComponent>
     <ServiceTitleComponent/>
     <ServicesComponent/>
     <GammeComponent/>
     <ContactComponent/>
     
    
     
    </div>
  );
}

export default App;
