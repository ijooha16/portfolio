const PAGES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
} as const;

export default PAGES;

export type Page = (typeof PAGES)[keyof typeof PAGES];
