import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Routes as appRoutes } from "../routes";

import LandingPage from './Pages/landingPage/landingPage';
import Contact from './Pages/contact/contact';

const HomeRoute = () => {
    <>
        <Route exact path={appRoutes.LandingPage} element={<LandingPage />} />
        <Route exact path={appRoutes.Contact} element={<Contact />} />
    </>
}

export default HomeRoute;