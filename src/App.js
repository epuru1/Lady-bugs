
import './App.css';
import Payment from './components/payment/payment';
import Register from './components/register/register';
import Home from './components/home/home';
import Grievance from './components/grievance/grievance';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="register" element={<Register/>}/>
       <Route path="payment" element={<Payment/>}/>
       <Route path="grievance" element={<Grievance/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="payment/login" element={<Login/>}/>

    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
