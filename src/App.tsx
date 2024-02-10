import React from "react";
import "./globals.css";
import SignupForm from "./components/auth/forms/SignupForm.component";
import { Route, Routes } from "react-router-dom";
import SigininForm from "./components/auth/forms/SigininForm.component";
import AuthLayout from "./components/auth/AuthLayout.component";
import RootLayout from "./_root/RootLayout.component";
import { Home } from "./_root/Pages";
function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes*/}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigininForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        {/*private routes*/}
        <Route element={<RootLayout />}></Route>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
