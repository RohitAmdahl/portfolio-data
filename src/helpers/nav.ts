export interface NavigationLinks {
  name: string;
  link: string;
  id: number;
}

export const navItems: NavigationLinks[] = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "Projects",
    link: "/project",
    id: 2,
  },
  {
    name: "Articles",
    link: "/Articles",
    id: 3,
  },
  {
    name: "CV",
    link: "CV",
    id: 4,
  },
];
