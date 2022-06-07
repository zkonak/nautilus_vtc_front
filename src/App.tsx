
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
import { useSelector } from "react-redux";
import { userStore } from "./types/user.types";

function App() {
  return (
    
     
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
          <Route  path="/reservationform" element={<ReservationForm/>}/>
          <Route  path="/reservationconfirm" element={<ReservationConfirm/>}/>
          <Route path='/dashboard' element={<PrivateRoute component={<Dashboard />} />} />
          <Route path='/reservationtarifs' element={<PrivateRoute component={<ReservationTarifs />} />} />
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/profil" element={<Profil/>}/>
          <Route  path="/changepass" element={<ChangePass/>}/>
          <Route  path="/aboutus" element={<About/>}/>
          <Route  path="/package" element={<Package/>}/>


        </Routes>
      </div>
    </Router>
  );
   
  
}
const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
  const userState = useSelector((state: { user: userStore }) => state.user);
  console.log(userState)
  return !userState.isLogged ? <Navigate to="/login" /> : Component;
}
export default App;
