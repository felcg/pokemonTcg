import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { CardDetails, Home } from "@presentation/pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
