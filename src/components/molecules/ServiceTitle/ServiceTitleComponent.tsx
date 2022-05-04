import { TextLight,TextLightWithSpace } from "./ServiceTitle";

const ServiceTitleComponent = ({ label = "Discover more" }) => {
  return (
    <>
      <TextLightWithSpace>Vous souhaitez réserver une course?</TextLightWithSpace>
      <TextLight>Simple  et Rapide</TextLight>
    </>
  );
};

export default ServiceTitleComponent;