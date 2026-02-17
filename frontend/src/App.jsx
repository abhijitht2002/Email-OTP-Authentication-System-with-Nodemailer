import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/register/AuthLayout";
import Verification from "./pages/register/Verification";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Verification />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
