// projects array
import holiday from "../assets/projectImg/holidaze_0.png";
import oneShop from "../assets/projectImg/one-shop.png";
import aution from "../assets/projectImg/auction.png";
import rainy from "../assets/projectImg/rainyday.png";
import science from "../assets/projectImg/science.png";
import profile from "../assets/projectImg/main_porfolio.png";

export type project = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tech?: string[];
  liveDemo: string;
  githubLink: string;
};

export const data: project[] = [
  {
    id: 1,
    title: "holiDaze",
    description:
      "Holidaze is a modern front-end accommodation booking application, developed as a final exam project at Noroff School of Technology. The project goal is to create venue booking Platform. Concept of Airbnb, where users can browse various accommodation options to book their stay, or register as venue managers to create and manage their own rental properties. The project uses an API provided by Noroff.",
    imgUrl: holiday,
    tech: ["react.js", "tailwindcss", "Formik"],
    liveDemo: "https://resilient-sawine-3b694a.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/holidaze-main",
  },
  {
    id: 2,
    title: "E-commerce, One Shop",
    description:
      "Upon finishing a React course, I tackled an e-commerce project. I chose Tailwind CSS for its flexibility. With its utility classes and components, I swiftly created a captivating, responsive platform. I focused on key features like a shopping cart and detailed product pages, ensuring smooth navigation and efficient cart functionality. This project highlighted my skills in building modern, user-centric web applications by combining React's power with Tailwind CSS.",
    imgUrl: oneShop,
    tech: ["react.js", "tailwindcss."],
    liveDemo: "https://creative-zuccutto-14498e.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/one-shop-onlineshop-ca",
  },
  {
    id: 3,
    title: "portfolio",
    description:
      "I've developed my portfolio using React, TypeScript and Tailwindcss, focusing on simplicity and intuitive design principles. The core idea behind the design is to ensure that my portfolio is straightforward and easy to navigate.",
    imgUrl: profile,
    tech: ["", ""],
    liveDemo: "https://science-meseum.netlify.app",
    githubLink:
      "https://github.com/RohitAmdahl/Community-Science-Museum-Website",
  },
  {
    id: 4,
    title: "Auction",
    description:
      "Implemented a fully responsive website using Noroff Auction API documentation.Developed functionalities including user login, sign up, and CRUD operations Registered users have the ability to bid on items, while non-registered users are restricted from bidding. Implemented search functionality by title, enabling users to find specific items, for example",
    imgUrl: aution,
    tech: ["", ""],
    liveDemo: "https://monumental-tulumba-33a98f.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/semster-project-2-",
  },
  {
    id: 5,
    title: "rainyday",
    description:
      "I gathered design inspiration from pictures, created an inspiration board, and developed personas. I installed Hotjar for insights, designed layouts and wireframes, progressing from low to high fidelity and prototypes. I implemented the designs into WordPress, set up products, made API calls, and conducted usability tests for a better user experience. Ensured responsiveness for the website.",
    imgUrl: rainy,
    tech: ["", "."],
    liveDemo: "https://my-frist-website-rainyday.netlify.app",
    githubLink:
      "https://github.com/RohitAmdahl/cross-course-project-RohitAmdahl",
  },
  {
    id: 6,
    title: "community science museum",
    description:
      "Welcome to my first-semester web development project, where i've brought the Community Science Museum to life online. Using our HTML and CSS skills, i've crafted a responsive website that showcases our dedication to design and functionality In this assignment, we transformed static content into an engaging digital experience, ensuring seamless interaction across devices. This project not only highlights our technical prowess but also our commitment to user experience and accessibility.",
    imgUrl: science,
    tech: ["", ""],
    liveDemo: "https://science-meseum.netlify.app",
    githubLink:
      "https://github.com/RohitAmdahl/Community-Science-Museum-Website",
  },
];
