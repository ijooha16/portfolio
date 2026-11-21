const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const stacks: Stack[] = [
  { alt: "Next.js", src: `${DEVICON}/nextjs/nextjs-original.svg` },
  { alt: "React", src: `${DEVICON}/react/react-original.svg` },
  { alt: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
  { alt: "Java", src: `${DEVICON}/java/java-original.svg` },
  { alt: "Spring Boot", src: `${DEVICON}/spring/spring-original.svg` },
  { alt: "Supabase", src: `${DEVICON}/supabase/supabase-original.svg` },
  { alt: "Figma", src: `${DEVICON}/figma/figma-original.svg` },
];

export type Stack = {
  alt: string;
  src: string;
};
