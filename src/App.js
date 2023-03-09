import './App.css';

import Reg from './components/Reg';
import Login from './components/Login';
import SetPassword from './components/SetPassword';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './components/Dashboard';


function App() {
  return (
   <div>
     <Router>
      <Routes>
      <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Reg/>} />
        <Route exact path="/setpassword" element={<SetPassword/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;