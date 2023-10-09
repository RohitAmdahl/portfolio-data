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
    name: "Portfolio",
    link: "/portfolio",
    id: 2,
  },
  {
    name: "LogIn",
    link: "/login",
    id: 3,
  },
];
