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
    name: "About",
    link: "/portfolio",
    id: 2,
  },
];
