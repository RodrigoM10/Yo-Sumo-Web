import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout';
import Home from '../pages/Home';
import Form from '../components/Form/Form';

function PublicRoutes() {
    return (
            <PublicLayout>
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route exact path="/create-petition" element={<Form />} />
                </Routes>
            </PublicLayout>
    );
}

export default PublicRoutes;