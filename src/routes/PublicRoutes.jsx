import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout';
import Home from '../pages/Home';
import Form from '../components/Form/Form';
import PetitionForm from '../components/MultistepForm/index';
import Summary from '../components/MultistepForm/Summary/Summary';

function PublicRoutes() {
    return (
            <PublicLayout>
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route exact path="/create-petition" element={<PetitionForm/>} />
                    <Route exact path ="/my-petitions" element={<Summary/>}/>
                </Routes>
            </PublicLayout>
    );
}

export default PublicRoutes;