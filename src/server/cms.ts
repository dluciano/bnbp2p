import { cache } from "@solidjs/router";

export type LandingPageCMSContentResponse = {
  maxNumberOfAdultsAndChildren: number;
  maxNumberOfInfants: number;
  maxNumberOfPets: number;
};

const getLandingPageCMSContent: () => Promise<LandingPageCMSContentResponse> =
  async () => {
    const maxNumberOfAdultsAndChildren = 16;
    const maxNumberOfInfants = 5;
    const maxNumberOfPets = 5;
    return new Promise((resolve, reject) => {
      resolve({
        maxNumberOfAdultsAndChildren,
        maxNumberOfInfants,
        maxNumberOfPets,
      });
    });
  };

export const getLandingPageCMSContentCached = cache(async () => {
  "use server";
  const destinations = await getLandingPageCMSContent();
  return destinations;
}, "landingPageCMS");
