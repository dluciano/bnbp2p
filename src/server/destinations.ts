import { cache } from "@solidjs/router";

export type DestinationItemResponse = {
  img: string;
  title: string;
  subtitle: string;
  alt: string;
  url: URL;
};

export type DestinationsResponse = {
  recent: DestinationItemResponse[];
  suggested: DestinationItemResponse[];
};

const getDestinations: () => Promise<DestinationsResponse> = async () => {
  const gen: () => DestinationItemResponse = () => ({
    title: "Paris",
    subtitle: "Any week",
    img: "/paris.webp",
    alt: "Paris any week",
    url: new URL("http://localhost:3000?search=london"),
  });

  const recent: DestinationItemResponse[] = [gen(), gen()];
  const suggested: DestinationItemResponse[] = [gen(), gen(), gen(), gen()];
  return new Promise((resolve, reject) => {
    resolve({ recent, suggested });
  });
};

export const getDestinationCached = cache(async () => {
  "use server";
  const destinations = await getDestinations();
  return destinations;
}, "destinations");
