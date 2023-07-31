import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./Layout"
import Loading from "./components/Loading";

const Home = lazy(() => import("../src/pages/Home"));
const Login = lazy(() => import("../src/pages/Login"));
const SignUp = lazy(() => import("../src/pages/SignUp"));
const Profile = lazy(() => import("../src/pages/Profile"));
const SaySomething = lazy(() => import("../src/pages/SaySomething"));
const ProfileNotFound = lazy(() => import("../src/pages/ProfileNotFound"));

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
        <Route
          path="/some"
          element={
            <Suspense fallback={<Loading />}>
              <SaySomething />
            </Suspense>
          }
        />
        <Route
          path="/not"
          element={
            <Suspense fallback={<Loading />}>
              <ProfileNotFound />
            </Suspense>
          }
        />
        <Route
          path="/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        />
      </Route>

    </Routes>
  )
}

export default App
