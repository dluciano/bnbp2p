import { A } from "@solidjs/router";
import PillButton from "./PillButton";
import Icon from "./Icon";
import { twMerge } from "tailwind-merge";
import { HeroSearch } from "./HeroSearch";
import { ParentComponent, Show, useContext } from "solid-js";
import { context } from "./ModalController";

type Props = {
  class?: string;
};

const MenuItem: ParentComponent<{ class?: string }> = (props) => {
  return (
    <li
      class={twMerge(
        "hover:bg-gray-100 text-sm py-3 w-full px-6 min-w-64",
        props.class
      )}
    >
      {props.children}
    </li>
  );
};

const MenuSeparator = (props: { class?: string }) => (
  <li class={twMerge("bg-gray-300 w-full h-[1px]", props.class)}></li>
);

const MainNavButton = () => {
  const { state, open } = useContext(context);
  let containerRef!: HTMLDivElement;

  return (
    <div class="relative" ref={containerRef}>
      <button
        type="button"
        class={`border text-3xl text-gray-500 text-nowrap p-2 rounded-3xl flex items-center hover:shadow-lg ${
          state() == containerRef ? "shadow-lg" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          open(containerRef);
        }}
      >
        <span class="iconify carbon--menu mr-4"></span>
        <span class="iconify carbon--user-avatar-filled-alt"></span>
      </button>
      <Show when={state() && state() == containerRef}>
        <nav
          class={
            "rounded-2xl text-nowrap shadow-sm absolute py-3 right-0 mt-2 border border-gray-100  bg-white z-10"
          }
        >
          <ul>
            <MenuItem class="hover:cursor-pointer">
              <A href="">Sign up</A>
            </MenuItem>
            <MenuItem class="hover:cursor-pointer">
              <A href="">Login</A>
            </MenuItem>
            <MenuSeparator class="my-3" />
            <MenuItem class="hover:cursor-pointer">
              <A href="">Gift cards</A>
            </MenuItem>
            <MenuItem class="hover:cursor-pointer">
              <A href="">Airbnb your home</A>
            </MenuItem>
            <MenuItem class="hover:cursor-pointer">
              <A href="">Host an experience</A>
            </MenuItem>
            <MenuItem class="hover:cursor-pointer">
              <A href="">Help Centre</A>
            </MenuItem>
          </ul>
        </nav>
      </Show>
    </div>
  );
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
          <MainNavButton />
        </div>
      </nav>
      {/* Hack to pull the header border down and place it after the HeroSearch without modifying the top (icon - stays/Exp - Airbnb your...) */}
      <div class="w-full h-20"></div>
    </div>
  );
}
