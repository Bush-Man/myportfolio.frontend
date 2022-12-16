
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home.jsx';
import { useContext} from "react";
import Login from "./Pages/Login/Login.jsx";
import {Context} from"./ContextApi/Context.js"
import Create from './Pages/CreateProject/Create';
import Singleproject from './Pages/SingleProject/Singleproject';
import Update from './Pages/UpdatePage/Update';
import Notfound from "./Pages/NotFound/Notfound.jsx";
function App() {
  
  const { dark } = useContext(Context);
  const { user } = useContext(Context);
 
  
 
  return (
    <div className={`App ${dark? "dark" : "light"}`} >
      
      <Router >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/start" element={<Login />} />
          <Route path="/project/:id" element={<Singleproject />} />
          <Route path = "*" element={<Notfound />}/>
          {user?.isAdmin &&
            <>
             <Route path="/" element={<Home />}/>
             <Route path="/create" element={<Create />} /> :
             <Route path="/project/update/:id" element={<Update />} />
            </>
              
          }
          
          
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
