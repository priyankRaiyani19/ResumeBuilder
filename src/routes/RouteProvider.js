import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "../pages/Layout";


const RouteProvider = () => {
    return (

        <Routes>
            <Route path="/" element={<Layout/>} />

        </Routes>





    );
};

export default RouteProvider;