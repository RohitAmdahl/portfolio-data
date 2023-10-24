import React from "react";

export type Paragraph = {
  id: number;
  text: string;
};

export const content: Paragraph[] = [
  {
    id: 0,
    text: "I am deeply passionate about IT and coding, with my expertise honed at Noroff, where I specialized in Frontend development, and through my Bachelor's degree in Design. While studying at Noroff, I also took on freelance projects in 3D BIM. My main drive for applying to this position lies in my desire to enhance creativity and user-friendliness.",
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
    id: 3,
    text: "My aspiration is to work within a highly skilled and experienced team, where opportunities for development and active engagement in a positive work environment are valued. I am confident that I will find these qualities within your organization.",
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

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <div className="text-lg container mx-auto my-9 text-text_">
      <h1 className="text-xl pb-4 m-2 font-serif font-bold">
        About Me <span>👋</span>
      </h1>
      {content.map((p: Paragraph): JSX.Element => {
        const { id, text } = p;
        return (
          <p key={id} className="pb-4 m-2">
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default AboutPage;
