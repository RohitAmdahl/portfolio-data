import React from "react";
import { content, Paragraph } from "../../helpers/about";

const About: React.FC<Paragraph[]> = (): JSX.Element => {
  return (
    <div className="text-lg container mx-auto my-9 text-text_">
      <h1 className="text-xl pb-4 m-2 font-serif font-bold">
        About Me <span>👋</span>
      </h1>
      {content.map((p: Paragraph): JSX.Element => {
        return (
          <p key={p.id} className="pb-4 m-2">
            {p.text}
          </p>
        );
      })}
    </div>
  );
};

export default About;
