import Layout from "./Layout/Layout"
import Error from "./pages/Error/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const AppRouter = () => {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={}>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </div>
  );
};


export default AppRouter;