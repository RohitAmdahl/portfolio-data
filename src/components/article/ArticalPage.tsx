import React from "react";

export type Paragraph = {
  id: number;
  text: string;
};

export const content: Paragraph[] = [
  {
    id: 0,
    text: "Coding and IT are my passion, cultivated through specialized studies in Frontend development at Noroff and a Bachelor's degree in Design. My expertise extends to freelance projects in 3D BIM, sparking my drive to enhance creativity and user-friendliness in digital experiences. I am dedicated to pushing the boundaries of innovation and usability in IT and web development.",
  },
  {
    id: 1,
    text: "Before venturing into IT, I predominantly worked in architectural firms. My last role was at Enerhaugen Arkitektkontor AS, where I served as a BIM/technical draftsman. Colleagues often describe me as an optimistic, social, and enthusiastic team player.",
  },
  {
    id: 2,
    text: "Previous employers have consistently praised my determination and willingness to go above and beyond. I possess a quick learning ability and can adapt seamlessly to diverse situations and work environments. I am dedicated to working hard to achieve my goals.",
  },

  {
    id: 4,
    text: "I would greatly appreciate the chance to provide a more detailed introduction in an interview. For any additional information, please feel free to reach me on my mobile at 40538464.",
  },
  {
    id: 5,
    text: "I come highly recommended, with excellent references from my previous workplaces, and I am more than willing to provide names and phone numbers upon request.",
  },
];

const ArticalPage: React.FC = (): JSX.Element => {
  return (
    <div className="text-lg container mx-auto my-9 text-text_">
      <h1 className="text-xl pb-4 m-2 font-serif font-bold">
        About Me <span>👋</span>
      </h1>
      <h2 className="text-xl pb-4 m-2 font-serif font-bold">Hi!</h2>
      {content.map((p: Paragraph): JSX.Element => {
        const { id, text } = p;
        return (
          <p key={id} className="pb-4 m-2">
            {text}
          </p>
        );
      })}
      <p>Warm regards,</p>
      <p>Rohit kumar Amdahl</p>
    </div>
  );
};

export default ArticalPage;
