import React from "react";
import About from "../components/about/About"; // Make sure the import path is correct

const Portfolio: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-4xl container mx-auto">
      <About /> {/* Use the About component */}
    </div>
  );
};

export default Portfolio;
