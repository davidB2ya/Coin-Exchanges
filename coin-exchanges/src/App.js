import { Routes, Route } from "react-router-dom";
import './sass/app.scss';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= '/' element={<Home/>} exact/>
        <Route path= '/home' element={<Home/>} exact/>
        <Route path= '/login' element={<Login/>} exact/>
  
      </Routes>
    </div>
  );
}

export default App;
