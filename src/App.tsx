
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import styles from './App.module.scss';
import SignUp from './components/template/User/SignUp';
import Login from './components/template/User/Login';
import Home from './components/template/Home/Home';

function App() {
  return (
    
     
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
   
  
}

export default App;
