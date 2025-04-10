import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RouteLayout from "./Layouts/RouteLayout";
import Home from "./assets/pages/generalUser/Home";
import Properties from "./assets/pages/generalUser/Properties";
import PropertyDetails from "./assets/pages/generalUser/PropertyDetails";
import Login from "./assets/pages/auth/Login";
import SignUp from "./assets/pages/auth/SignUp";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouteLayout />}>
              <Route index={true} element={<Home />} />
              <Route path="/properties" element={<Properties />} />
          <Route path="/propretydetails" element={<PropertyDetails />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
