

import {Service,ServiceIcon,ServiceTextBold,ServiceText} from "./Service"
const ServiceComponent = ({ iconUrl = "tel",label="aa",label2="aa",width="50px" }) => {
  return (<Service>
    <ServiceIcon src={iconUrl} width={width}/>
    <ServiceTextBold>{label}</ServiceTextBold>
    <ServiceText>{label2}</ServiceText>
    </Service>
    );
};

export default ServiceComponent;