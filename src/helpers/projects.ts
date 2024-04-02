// projects array
import holiday from "../assets/projectImg/holidaze_0.png";
import oneShop from "../assets/projectImg/one-shop.png";
import aution from "../assets/projectImg/auction.png";
import rainy from "../assets/projectImg/rainyday.png";
import barnehage from "../assets/project-barnehage.png";
// import profile from "../assets/projectImg/main_porfolio.png";

export type project = {
  id: number;
  title: string;
  description: string;
  description_: string;
  description_1?: string;
  description_2?: string;
  description_3?: string;
  imgUrl: string;
  tech?: string[];
  liveDemo: string;
  githubLink: string;
};

export const data: project[] = [
  {
    id: 1010,
    title: "Barnehage: A Next.js Journey",
    description:
      "Barnehage is not just another project; it's a testament to the journey of learning Next.js. As a Frontend developer eager to delve into the world of server-side rendering (SSR) and static site generation (SSG), I embarked on this journey to grasp the nuances of Next.js. With a focus on UX and UI design, Barnehage became my canvas to experiment, learn, and overcome challenges.",
    description_:
      " Project Overview:-  Barnehage is a web application built using Next.js, TypeScript, and Tailwind CSS. It serves as a platform to explore the functionalities of Next.js while implementing modern design principles. The application showcases various components and features, seamlessly integrating user interaction with dynamic content.",
    description_1:
      "Learning Next.js:- My journey with Next.js began with diving into its documentation and absorbing tutorials on platforms like YouTube. Armed with a basic understanding, I ventured into coding, creating components and leveraging Next.js's routing capabilities. The transition from React to Next.js was smooth yet enlightening, as I grasped the underlying concepts of server-side rendering and its implications on performance and SEO",
    description_2:
      "Deployment Hurdles:-  Deploying Barnehage on Vercel was an insightful experience. While Vercel's seamless deployment process impressed me, I encountered challenges in configuring environment variables and optimizing build settings. Overcoming these hurdles not only enhanced my deployment skills but also provided invaluable insights into the deployment ecosystem.",

    description_3:
      "Conclusion:- Barnehage isn't just a project; it's a symbol of persistence, curiosity, and the never-ending quest for learning. Through lots of trial and error, fixing problems, and celebrating successes, I've not only gotten better at Next.js but also gained a greater love for web development. Adding Barnehage to my portfolio is just the beginning. I'm excited to keep learning and facing new challenges head-on.",

    imgUrl: barnehage,
    tech: ["Next.js", "Vercel", "TypeScript", "tailwindcss"],
    liveDemo: "https://barne-hage-sooty.vercel.app/",
    githubLink: "https://github.com/RohitAmdahl/barne-hage",
  },
  {
    id: 1,
    title: "holiDaze,  Final Exam project",
    description:
      "Through the development of Holidaze 🏡, my final exam project at Noroff School of Technology, I delved into various aspects of web development. I honed my skills in front-end development, user interface design, and integration of external APIs. The project allowed me to understand the complexities of creating a platform reminiscent of Airbnb, fostering user interaction in accommodation booking. In terms of individual tasks, I took on challenges related to user experience enhancement, efficient data presentation, and seamless integration of the Noroff-provided API.  ",
    description_:
      "This experience not only expanded my technical proficiency but also provided insights into effective project management. Overall, Holidaze represents more than a culmination of coding tasks; it's a testament to my growth as a developer, showcasing my ability to translate conceptual ideas into a functional and user-friendly application. This comprehensive project involved developing key functionalities such as user login, sign-up processes, and CRUD (Create, Read, Update, Delete)",
    imgUrl: holiday,
    tech: ["react.js", "tailwindcss", "Formik", "Figma", "Netlify"],
    liveDemo: "https://resilient-sawine-3b694a.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/holidaze-main",
  },
  {
    id: 2,
    title: "E-commerce, One Shop",
    description:
      "Upon completing a React course, diving into an e-commerce project became a hands-on application of my newfound skills. Opting for Tailwind CSS due to its exceptional flexibility, I efficiently incorporated it into the project. Harnessing the power of Tailwind's utility classes and components, I swiftly crafted a visually captivating and responsive platform.Through this project, I gained valuable insights into several crucial aspects of web development. I learned the intricacies of implementing a functional shopping cart and designing detailed product pages. ",
    description_:
      "The emphasis on smooth navigation and efficient cart functionality sharpened my ability to create user-centric experiences. This experience served as a practical demonstration of how React's robust capabilities can be seamlessly combined with Tailwind CSS to build modern, responsive, and engaging web applications.",
    imgUrl: oneShop,
    tech: ["react.js", "tailwindcss", "Figma", "Netlify"],
    liveDemo: "https://creative-zuccutto-14498e.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/one-shop-onlineshop-ca",
  },

  {
    id: 3,
    title: "Auction,  Seamster Project- 2",
    description:
      " I successfully implemented a fully responsive website by leveraging the Noroff Auction API documentation. This comprehensive project involved developing key functionalities such as user login, sign-up processes, and CRUD (Create, Read, Update, Delete) operations. Registered users gained the capability to bid on items, while non-registered users were restricted from participating in the bidding process.As part of the project, ",
    description_:
      "I integrated a search functionality based on item titles, allowing users to easily locate specific items of interest. This experience not only showcased my proficiency in front-end development but also enhanced my understanding of API integration and documentation utilization. The Noroff Auction API documentation provided a crucial foundation, enabling me to seamlessly incorporate and leverage its features to create a dynamic and user-friendly website.",
    imgUrl: aution,
    tech: ["HTML", "JavaScript", "Sass", "bootstrap", "Figma", "Netlify"],
    liveDemo: "https://monumental-tulumba-33a98f.netlify.app",
    githubLink: "https://github.com/RohitAmdahl/semster-project-2-",
  },
  {
    id: 4,
    title: "rainyday",
    description:
      "I gathered design inspiration from pictures, created an inspiration board, and developed personas. I installed Hotjar for insights, designed layouts and wireframes, progressing from low to high fidelity and prototypes.",
    description_:
      " I implemented the designs into WordPress, set up products, made API calls, and conducted usability tests for a better user experience. Ensured responsiveness for the website.",
    imgUrl: rainy,
    tech: ["HTML", "CSS", "JavaScript", "Figma", "Netlify"],
    liveDemo: "https://my-frist-website-rainyday.netlify.app",
    githubLink:
      "https://github.com/RohitAmdahl/cross-course-project-RohitAmdahl",
  },
];
