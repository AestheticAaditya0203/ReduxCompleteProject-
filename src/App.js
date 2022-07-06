import React from "react";
import { Provider } from 'react-redux'
import store from './store'
import UserData from "./components/UserData";
import Navbar from "./components/Navbar";
import IncDec from "./components/IncDec";
import {Routes , Route} from 'react-router-dom'
import Home from "./components/Home";
//import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


const App = () => {
 
    return(
        <>
        <div>
        <Navbar />
        <Provider store={store}>
        <Routes>
              
              <Route path="/home" element={<Home />} />
              <Route path="/userdata" element={<UserData />} />
              <Route path="/incdec" element={<IncDec />} />
               
        </Routes>
        </Provider>
        </div>
        </>
    )
}

export default App;