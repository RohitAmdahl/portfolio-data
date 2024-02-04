import avatar from "../assets/rohitImg.jpg";
import javascriptFunctional from "../assets/blogImg/javascriptFunctional.jpg";
import coding from "../assets/blogImg/coding.jpeg";
import naming from "../assets/blogImg/naming.jpeg";
export interface Blog {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  authorAvatar: string;
  date?: string;
  link: string;
  authorName: string;
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
  },
  {
    id: 2,
    title: "Coding Confidence",
    imageUrl: coding,
    description: "Coding Confidence, A Junior Developer's Journey",
    authorAvatar: avatar,
    authorName: "Rohit Kumar Amdahl",
    link: "https://www.linkedin.com/pulse/coding-confidence-rohit-kumar-amdahl-mfg4f%3FtrackingId=4em9NHwaTJi5qRTGOxvCbw%253D%253D/?trackingId=4em9NHwaTJi5qRTGOxvCbw%3D%3D",
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
  },
];
