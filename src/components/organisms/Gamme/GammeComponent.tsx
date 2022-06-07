import { PinDropSharp } from "@material-ui/icons";
import GammeDetailComponent from "../../molecules/GammeDetail/GammeDetailComponent";
import GammePanelComponent from "../../molecules/GammePanel/GammePanelComponent";
import GammeTitleComponent from "../../molecules/GammeTitle/GammeTitleComponent";

const GammeComponent = (props:any) => {
  return (<>
     <GammeTitleComponent/>
     {/* <GammeDetailComponent /> */}
     <GammePanelComponent/>
     
      </>
  );
};

export default GammeComponent;