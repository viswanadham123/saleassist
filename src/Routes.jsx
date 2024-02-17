import NotFound from "pages/NotFound";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const DesktopTwentyFive = React.lazy(() => import("pages/DesktopTwentyFive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopTwentyFive/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
