
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import { Component } from 'react';
import { TextLight, TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { TableComponent } from '../../atoms/Table/TableComponent';
class Package extends Component  {
  
  
    render() {
    return (<>
      <HeaderComponent/>
      <TextLightWithSpace>Forfaits</TextLightWithSpace>
      <TableComponent></TableComponent>
    
    </>
  );
}
}
export default Package;