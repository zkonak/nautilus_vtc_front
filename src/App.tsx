
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate} from "react-router-dom";
import styles from './App.module.scss';
import SignUp from './components/template/User/SignUp';
import Login from './components/template/User/Login';
import Home from './components/template/Home/Home';
import ReservationForm from "./components/template/Reservation/ReservationForm";
import ReservationTarifs from "./components/template/Reservation/ReservationTarifs";
import ReservationConfirm from "./components/template/Reservation/ReservationConfirm";
import Dashboard from "./components/template/User/Dashboard";
import Contact from "./components/template/Contact/Contact";
import Profil from "./components/template/User/Profil";
import ChangePass from "./components/template/User/ChangePass";
import About from "./components/template/Contact/About";
import Package from "./components/template/Home/Package";
import { useDispatch, useSelector } from "react-redux";
import { userStore } from "./types/user.types";
import DashboardAdmin from "./components/template/User/DashboardAdmin";
import { authLogin } from "./store/actions/user.action";
import Disconnect from "./components/template/User/Disconnect";
import ServicesAdmin from "./components/organisms/Services/ServicesAdmin";
import PackagesAdmin from "./components/organisms/Packages/PackagesAdmin";

function App() {
  return (
    
     
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
          <Route  path="/reservationform" element={<ReservationForm/>}/>
          <Route  path="/reservationform/:reservationId" element={<PrivateRoute component={<ReservationForm/>} />}/>
          <Route  path="/reservationconfirm" element={<PrivateRoute component={<ReservationConfirm />} />} />
          <Route path='/dashboard' element={<PrivateRoute component={<Dashboard />} />} />
          <Route path='/reservationtarifs' element={<PrivateRoute component={<ReservationTarifs />} />} />
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/profil" element={<PrivateRoute component={<Profil />} />} />
          <Route  path="/changepass" element={<PrivateRoute component={<ChangePass />} />} />
          <Route  path="/aboutus" element={<About/>}/>
          <Route  path="/package" element={<Package/>}/>
          <Route path='/dashboardAdmin' element={<PrivateRouteAdmin component={<DashboardAdmin />} />} />
          <Route  path="/disconnect" element={<PrivateRoute component={<Disconnect />} />} />
          <Route  path="/servicesAdmin" element={<PrivateRoute component={<ServicesAdmin/>} />} />
          <Route  path="/packagesAdmin" element={<PrivateRoute component={<PackagesAdmin/>} />} />

    </Routes>
      </div>
    </Router>
  );
   
  
}
const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
  //const dispatch = useDispatch();
  const userState = useSelector((state: { user: userStore }) => state.user);
  // if(!userState.user && localStorage.getItem("user")){
  //   const user=localStorage.getItem("user")
  //   const userState=user ? JSON.parse(user) : {};
  //   dispatch(authLogin(userState));
  // }
  
  return !userState.isLogged ? <Navigate to="/login" /> : Component;
}
const PrivateRouteAdmin = ({ component: Component }: { component: JSX.Element }) => {
  
  const userState = useSelector((state: { user: userStore }) => state.user);
  console.log(userState)
  return userState.isLogged && userState.user?.type==="A" ? Component :<Navigate to="/login" /> ;
}

export default App;
