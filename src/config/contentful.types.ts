export type Path = {
  path: string;
};

export type HeroFields = {
  heroTitle: string;
  heroDescription?: string;
  heroButtonLabel: string;
  heroButtonLink: string;
};

export type PageFields = { fields: Path & HeroFields };
