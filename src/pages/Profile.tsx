import React from "react";

import About from "../components/about/About";
// import { Paragraph } from "../helpers/about";
const Portfolio: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-4xl container mx-auto">
      <About />
    </div>
  );
};

export default Portfolio;
