import { lazy, Suspense } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
const HomePage = lazy(() => import("./pages/Home"));

const ProjectsPage = lazy(() => import("./pages/Projects"));
const ArticlePage = lazy(() => import("./pages/Blogs"));
const CvPage = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Suspense fallback={<FidgetSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="/blogs" element={<ArticlePage />} />
            <Route path="/about" element={<CvPage />} />
            <Route
              path="*"
              element={<div className="bg-red text-4xl">Route not found</div>}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
