import { getData } from "@/services/ApiService";
import { TAbout, TExperience, TProfile, TProject, TSocial } from "@/types";

export const getProfile = (): Promise<TProfile> => {
  return getData("profile");
};

export const getSocials = (): Promise<TSocial[]> => {
  return getData("socials");
};

export const getAbout = (): Promise<TAbout> => {
  return getData("about");
};

export const getExperience = (): Promise<TExperience[]> => {
  return getData("experience");
};

export const getProjects = (): Promise<TProject[]> => {
  return getData("projects");
};

export const getContact = (): Promise<TSocial[]> => {
  return getData("contact");
};
