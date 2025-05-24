import React from "react";
import Layout from "./Layout/Layout.jsx"
import Error from "./pages/Error.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";


const AppRouter = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
};


export default AppRouter;