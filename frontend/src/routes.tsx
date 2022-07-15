import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index';
import { Login } from './pages/Login/index';
import { ModuleEdit } from './pages/ModuleEdit';
import { ModuleRegister } from './pages/ModuleRegister';
import { ProfEdit } from './pages/ProfEdit';
import { UnityRegister } from './pages/UnintyRegister';
import { UnityEdit } from './pages/UnityEdit';

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moduleEdit" element={<ModuleEdit />} />
        <Route path="/moduleRegister" element={<ModuleRegister />} />
        <Route path="/unityEdit" element={<UnityEdit />} />
        <Route path="/unityRegister" element={<UnityRegister />} />
        <Route path="/profEdit" element={<ProfEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
