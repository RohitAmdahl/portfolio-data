import React from "react";
import About from "../components/about/About";
import { Paragraph } from "../components/about/About";
const Portfolio: React.FC<Paragraph[]> = () => {
  return (
    <div className="max-w-4xl container mx-auto">
      <About />
    </div>
  );
};

export default Portfolio;
