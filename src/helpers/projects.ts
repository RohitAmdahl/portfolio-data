// projects array
import holiday from "../assets/projectImg/holidaze_0.png";
import oneShop from "../assets/projectImg/one-shop.png";
import aution from "../assets/projectImg/auction.png";
import rainy from "../assets/projectImg/rainyday.png";
import science from "../assets/projectImg/science.png";
// import profile from "../assets/projectImg/main_porfolio.png";

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
    title: "holiDaze,  Final Exam project",
    description:
      "Through the development of Holidaze 🏡, my final exam project at Noroff School of Technology, I delved into various aspects of web development. I honed my skills in front-end development, user interface design, and integration of external APIs. The project allowed me to understand the complexities of creating a platform reminiscent of Airbnb, fostering user interaction in accommodation booking. In terms of individual tasks, I took on challenges related to user experience enhancement, efficient data presentation, and seamless integration of the Noroff-provided API. This experience not only expanded my technical proficiency but also provided insights into effective project management. Overall, Holidaze represents more than a culmination of coding tasks; it's a testament to my growth as a developer, showcasing my ability to translate conceptual ideas into a functional and user-friendly application. This comprehensive project involved developing key functionalities such as user login, sign-up processes, and CRUD (Create, Read, Update, Delete) ",
    imgUrl: holiday,
    tech: ["react.js", "tailwindcss", "Formik"],
    liveDemo: "https://resilient-sawine-3b694a.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/holidaze-main",
  },
  {
    id: 2,
    title: "E-commerce, One Shop",
    description:
      "Upon completing a React course, diving into an e-commerce project became a hands-on application of my newfound skills. Opting for Tailwind CSS due to its exceptional flexibility, I efficiently incorporated it into the project. Harnessing the power of Tailwind's utility classes and components, I swiftly crafted a visually captivating and responsive platform.Through this project, I gained valuable insights into several crucial aspects of web development. I learned the intricacies of implementing a functional shopping cart and designing detailed product pages. The emphasis on smooth navigation and efficient cart functionality sharpened my ability to create user-centric experiences. This experience served as a practical demonstration of how React's robust capabilities can be seamlessly combined with Tailwind CSS to build modern, responsive, and engaging web applications.",
    imgUrl: oneShop,
    tech: ["react.js", "tailwindcss."],
    liveDemo: "https://creative-zuccutto-14498e.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/one-shop-onlineshop-ca",
  },
  // {
  //   id: 3,
  //   title: "portfolio, Do Not mind Design always changing 😄  ",
  //   description:
  //     "I've developed my portfolio using React, TypeScript and Tailwindcss, focusing on simplicity and intuitive design principles. The core idea behind the design is to ensure that my portfolio is straightforward and easy to navigate.",
  //   imgUrl: profile,
  //   tech: ["", ""],
  //   liveDemo: "https://rohit.no/about",
  //   githubLink: "https://github.com/RohitAmdahl/portfolio-data",
  // },
  {
    id: 4,
    title: "Auction,  Seamster Project- 2",
    description:
      " I successfully implemented a fully responsive website by leveraging the Noroff Auction API documentation. This comprehensive project involved developing key functionalities such as user login, sign-up processes, and CRUD (Create, Read, Update, Delete) operations. Registered users gained the capability to bid on items, while non-registered users were restricted from participating in the bidding process.As part of the project, I integrated a search functionality based on item titles, allowing users to easily locate specific items of interest. This experience not only showcased my proficiency in front-end development but also enhanced my understanding of API integration and documentation utilization. The Noroff Auction API documentation provided a crucial foundation, enabling me to seamlessly incorporate and leverage its features to create a dynamic and user-friendly website.",
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
    title: "community science museum, first seamster project",
    description:
      "Welcome to my first-semester web development project, where i've brought the Community Science Museum to life online. Using our HTML and CSS skills, i've crafted a responsive website that showcases our dedication to design and functionality In this assignment, we transformed static content into an engaging digital experience, ensuring seamless interaction across devices. This project not only highlights our technical prowess but also our commitment to user experience and accessibility.",
    imgUrl: science,
    tech: ["", ""],
    liveDemo: "https://science-meseum.netlify.app",
    githubLink:
      "https://github.com/RohitAmdahl/Community-Science-Museum-Website",
  },
];
