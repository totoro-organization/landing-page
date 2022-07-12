export type Path = {
  path: string;
};

export type HeroFields = {
  heroTitle: string;
};

export type PageFields = { fields: Path & HeroFields };
