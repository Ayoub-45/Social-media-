import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function AuthLayout() {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-1 justify-center items-center flex-col py-50">
          <img src="" alt="" />
          <Outlet />
        </section>
      )}
    </>
  );
}

export default AuthLayout;
