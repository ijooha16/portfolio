export const TAGS = {
  AWARD: "Award",
  AI: "AI",
  TEAM: "Team",
  PERSONAL: "Personal",
  LEADER: "Leader",
  NEXTJS: "NextJs",
  REACT: "React",
  API: "API",
  JS: "Js",
} as const;

export type TagType = (typeof TAGS)[keyof typeof TAGS];
