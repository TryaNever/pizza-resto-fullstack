import React from "react";
import Layout from "./Layout/Layout"
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const AppRouter = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
};


export default AppRouter;