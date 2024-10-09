import { A } from "@solidjs/router";
import PillButton from "./PillButton";
import Icon from "./Icon";
import { twMerge } from "tailwind-merge";
import { HeroSearch } from "./HeroSearch";
type Props = {
  class?: string;
};
export default function NavBar(props: Props) {
  return (
    <div>
      <nav class={twMerge("flex justify-between items-center", props.class)}>
        <A href="/" class="flex items-center h-20 text-header_brand-color">
          <Icon />
        </A>

        <div class="max-w-[790px] w-[790px] flex flex-col relative items-center justify-center">
          <div class="flex items-center justify-center">
            <PillButton type="button" class="font-semibold mb-3">
              Stays
            </PillButton>
            <PillButton type="button" class="mb-3">
              Experiences
            </PillButton>
          </div>
          <HeroSearch class="mb-4 absolute top-[100%]" />
        </div>
        <div class="flex items-center justify-evenly">
          <PillButton type="button" class="text-sm font-medium text-nowrap">
            Airbnb your home
          </PillButton>
          <PillButton class="text-lg flex items-center mr-1">
            <span class="iconify carbon--wikis font-medium text-xl"></span>
          </PillButton>
          <button class=" border text-3xl text-gray-500 text-nowrap p-2 rounded-3xl flex items-center hover:shadow-lg">
            <span class="iconify carbon--menu mr-4"></span>
            <span class="iconify carbon--user-avatar-filled-alt"></span>
          </button>
        </div>
      </nav>
      {/* Hack to pull the header border down and place it after the HeroSearch without modifying the top (icon - stays/Exp - Airbnb your...) */}
      <div class="w-full h-20"></div>{" "}
    </div>
  );
}
