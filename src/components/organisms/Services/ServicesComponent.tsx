import  SettingsImage  from "../../../assets/icon-settings2.png";
import  OkImage  from "../../../assets/icon-ok2.png";
import  ListImage  from "../../../assets/icon-list2.png";
import  CardImage  from "../../../assets/icon-credit-card2.png";
import ServiceComponent from "../../molecules/Service/ServiceComponent";
import {Services}   from "./Services";
const ServicesComponent = () => {
  return (<Services>
      <ServiceComponent iconUrl={ListImage}   label="Réservez" label2="Réservez en ligne ou appelez-nous 01.01.01.01.01"></ServiceComponent>
      <ServiceComponent iconUrl={CardImage}    label="Réglez" label2="Régler votre trajet auprès de votre chauffeur par carte ou espèce "></ServiceComponent>
      <ServiceComponent iconUrl={SettingsImage}   label="Gérez" label2="Modifiez/Annulez  vos reservation ou télécharger vos factures"></ServiceComponent>
      <ServiceComponent iconUrl={OkImage} label="Confirmez" label2="Recevez la confirmation et la facture de votre trajet par mail" ></ServiceComponent>
    
     
    </Services>
  );
};

export default ServicesComponent;