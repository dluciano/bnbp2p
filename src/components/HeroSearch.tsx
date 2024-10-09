import { twMerge } from "tailwind-merge";

type Props = {
  class?: string;
};
const Divisor = () => (
  <div class="flex items-center">
    <div class="h-10 bg-gray-300 w-[1px]"></div>
  </div>
);
export function HeroSearch(props: Props) {
  return (
    <div
      class={twMerge(
        "flex border border-gray-300 rounded-full shadow-md",
        props.class
      )}
    >
      <div class="rounded-full hover:bg-gray-200 px-6 py-2">
        <label for="whereinput" class="text-xs font-medium w-full">
          Where
        </label>
        <input
          type="text"
          id="whereinput"
          placeholder={"Search destinations"}
          class="w-full bg-inherit focus-visible:outline-none text-xs"
        />
      </div>
      <Divisor />
      <div class="flex ">
        <div class="rounded-full hover:bg-gray-200 pl-4 flex items-center">
          <div>
            <label for="checkin" class="text-xs font-medium block">
              Check in
            </label>
            <input
              type="text"
              id="checkin"
              placeholder={"Add dates"}
              class="bg-inherit text-xs"
              disabled
            />
          </div>
        </div>
        <Divisor />
        <div class="rounded-full hover:bg-gray-200 pl-4 flex flex-col justify-center">
          <div>
            <label for="checkout" class="text-xs font-medium block">
              Check out
            </label>
            <input
              type="text"
              id="checkout"
              placeholder={"Add dates"}
              class="bg-inherit text-xs"
              disabled
            />
          </div>
        </div>
      </div>
      <Divisor />
      <div class="rounded-full hover:bg-gray-200 flex pl-8 pr-2 py-2">
        <div class="mr-2">
          <label for="guests" class="text-xs font-medium w-full">
            Who
          </label>
          <input
            type="text"
            id="guests"
            placeholder={"Add guests"}
            class="w-full bg-inherit text-xs"
            disabled
          />
        </div>
        <button
          type="submit"
          class="flex justify-center items-center rounded-[100%] w-12 h-12 relative bg-header_brand-color grow active:bg-linaria-theme_palette-rausch-contrast"
        >
          <span class="iconify carbon--search text-white font-bold text-xl"></span>
        </button>
      </div>
    </div>
  );
}
