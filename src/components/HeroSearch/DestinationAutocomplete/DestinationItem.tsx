import { twMerge } from "tailwind-merge";
import { DestinationItemProps } from "./DestinationItemProps";

export const DestinationItem = (props: DestinationItemProps) => {
  return (
    <a
      class={twMerge(
        `hover:bg-gray-100 block relative rounded-xl`,
        props.class
      )}
      href={props.url.href}
    >
      <div class="flex">
        <img
          src={props.img}
          alt={props.alt}
          class="inline-block mr-4 "
          width={50}
        ></img>
        <div class="flex justify-center flex-col">
          <h1 class="font-semibold text-sm">{props.title}</h1>
          <h2 class="font-extralight text-sm ">{props.subtitle}</h2>
        </div>
      </div>
    </a>
  );
};
