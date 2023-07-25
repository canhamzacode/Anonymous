import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./Layout"
import Loading from "./components/Loading";

const Home = lazy(() => import("../src/pages/Home"));

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
      </Route>
    </Routes>
  )
}

export default App
