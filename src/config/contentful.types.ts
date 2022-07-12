export type Path = {
  path: string;
};

export type HeroFields = {
  heroTitle: string;
  heroDescription?: string;
};

export type PageFields = { fields: Path & HeroFields };
