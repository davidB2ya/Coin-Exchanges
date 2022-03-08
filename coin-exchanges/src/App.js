import { Routes, Route } from "react-router-dom";
import './sass/app.scss';
import Dashboard from "./views/Dashboard/Dashboard";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from "./views/Login/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/register' element={<Register />} exact />
        <Route path='/dashboard' element={<Dashboard />} exact />
        <Route path='/home' element={<Home />} exact />

      </Routes>
    </div>
  );
}

export default App;
