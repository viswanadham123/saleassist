import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopTwentyFive = React.lazy(() => import("pages/DesktopTwentyFive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
