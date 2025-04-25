import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RouteLayout from "./Layouts/RouteLayout";
import Home from "./assets/pages/generalUser/Home";
import Properties from "./assets/pages/generalUser/Properties";
import PropertyDetails from "./assets/pages/generalUser/PropertyDetails";
import Login from "./assets/pages/auth/Login";
import SignUp from "./assets/pages/auth/SignUp";
import HostDashboard from "./assets/pages/hostUser/HostDashboard";
import HostRegister from "./assets/pages/hostUser/HostRegister";
import AddProperty from "./assets/pages/hostUser/AddProperty";
import GuestBooking from "./components/GuestBooking";
import MakeBookings from "./assets/pages/guestUser/MakeBookings";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouteLayout />}>
              <Route index={true} element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/propertydetails/:id" element={<PropertyDetails />} />
              <Route path="/makebookings" element={<MakeBookings />} />
              <Route path="/guestbooking" element={<GuestBooking/>} />
              <Route path="/hostregister" element={<HostRegister />} />
              <Route path="/addproperty" element={<AddProperty />} />
              <Route path="/dashboard" element={<HostDashboard />} />
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
