export type TProject = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
};

export type TProfile = {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
};

export type TSocial = {
  name: string;
  url: string;
  icon: string;
};

export type TSkill = {
  name: string;
  icon: string;
};

export type TAbout = {
  bio: string[];
  skills: TSkill[];
};

export type TExperience = {
  link: string;
  skills: string[];
  role: string;
  company: string;
  period: string;
  description: string[];
};
