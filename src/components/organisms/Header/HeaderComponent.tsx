
import  LogoImage  from "../../atoms/Logo/LogoImage";

import  MenuBar  from "../../molecules/MenuBar/MenuBar";
import TelephoneComponent from "../../molecules/Telephone/TelephoneComponent";
import { Header } from "./Header";
const HeaderComponent = () => {
  return (<Header>
      <LogoImage/>
      <TelephoneComponent label="01 01 01 01 01"/>
      <MenuBar/>
     
    </Header>
  );
};

export default HeaderComponent;