import { lazy, Suspense } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
const HomePage = lazy(() => import("./pages/Home"));

const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  return (
    <>
      <Suspense fallback={<FidgetSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="*"
              element={
                <div className="bg-red-500 text-4xl">Route not found</div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
