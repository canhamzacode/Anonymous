import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./Layout"
import Loading from "./components/Loading";

const Home = lazy(() => import("../src/pages/Home"));
const Login = lazy(() => import("../src/pages/Login"));
const SignUp = lazy(() => import("../src/pages/SignUp"));

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          }
        />
      </Route>

    </Routes>
  )
}

export default App
