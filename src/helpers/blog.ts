import avatar from "../assets/rohitImg.jpg";
import javascriptFunctional from "../assets/blogImg/javascriptFunctional.jpg";
import coding from "../assets/blogImg/coding.jpeg";
import naming from "../assets/blogImg/naming.jpeg";
import computerPic from "../assets/blogImg/computer.jpg";
export interface Blog {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  authorAvatar: string;
  date?: string;
  link: string;
  authorName: string;
  alt?: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "JavaScript Functional Programming",
    imageUrl: javascriptFunctional,
    description: "My Thoughts on JavaScript Functional Programming!",
    authorAvatar: avatar,
    authorName: "Rohit Kumar Amdahl",
    link: "https://www.linkedin.com/pulse/javascript-functional-programming-rohit-kumar-amdahl-vp9rf/",
    alt: "a picture of a laptop keyboard, with a random code written on it",
  },
  {
    id: 2,
    title: "Coding Confidence",
    imageUrl: coding,
    description:
      "In the world of Frontend development, we love what we do, but becoming a good developer isn't easy. It takes time and effort, and everyone starts somewhere.",
    authorAvatar: avatar,
    authorName: "Rohit Kumar Amdahl",
    link: "https://www.linkedin.com/pulse/coding-confidence-rohit-kumar-amdahl-mfg4f/",
    alt: "a person coding in the dark room only computer is able to see, because of the computer light screening",
  },
  {
    id: 3,
    title: "Naming Things Is Hard",
    imageUrl: naming,
    description:
      "Ever struggled with naming functions or figuring out the perfect project structure in JavaScript, TypeScript, React, or any?",
    authorAvatar: avatar,
    authorName: "Rohit Kumar Amdahl",
    link: "https://www.linkedin.com/pulse/naming-things-hard-rohit-kumar-amdahl-wwlzf/",
    alt: "a picture of a laptop keyboard, with a random code written on it",
  },
  {
    id: 4,
    title: "WEB Accessibility",
    imageUrl: computerPic,
    description:
      "Web Accessibility is crucial, yet often overlooked. As developers and designers, it's our responsibility to ensure that our digital products are inclusive and accessible to everyone.",
    authorAvatar: avatar,
    authorName: "Rohit Kumar Amdahl",
    link: "https://www.linkedin.com/pulse/web-accessibility-rohit-kumar-amdahl-dhr0f/",
    alt: "a picture of a laptop keyboard a black keyboard, computer is on table with a white screen, laptop is attached with extra keyboard for easy to Accessible for blind person",
  },
];
