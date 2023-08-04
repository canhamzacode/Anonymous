import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./Layout"
import Loading from "./components/Loading";
import { AuthProvider } from "./providers/AuthProvider";
const Home = lazy(() => import("../src/pages/Home"));
const Login = lazy(() => import("../src/pages/Login"));
const SignUp = lazy(() => import("../src/pages/SignUp"));
const Profile = lazy(() => import("../src/pages/Profile"));
const Messages = lazy(() => import("../src/pages/Messages"));

function App() {

  return (
    <AuthProvider>
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
            path="/messages"
            element={
              <Suspense fallback={<Loading />}>
                <Messages />
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
    </AuthProvider>
  )
}

export default App
