import { createMemo, Show, useContext } from "solid-js";
import { twMerge } from "tailwind-merge";
import { context } from "./ModalController";

type Props = {
  class?: string;
};
const Divisor = () => (
  <div class="flex items-center">
    <div class="h-10 bg-gray-300 w-[1px]"></div>
  </div>
);

const menus = ["where", "checkin", "checkout", "who"] as const;

type Menus = (typeof menus)[number];

// TODO: When click over one of the inputs (active), the button is white, has shadow and contains a x button on the middle right, also the HeroSearch becomes gray
export function HeroSearch(props: Props) {
  const { state, open } = useContext(context);

  let whereInputRef!: HTMLInputElement;
  let whereRef!: HTMLDivElement;
  let checkinRef!: HTMLDivElement;
  let checkoutRef!: HTMLDivElement;
  let whoRef!: HTMLDivElement;

  const isMenuFocus = createMemo(() => {
    const cur = state();
    return (
      cur &&
      (cur == whereRef ||
        cur == checkinRef ||
        cur == checkoutRef ||
        cur == whoRef)
    );
  });
  return (
    <form
      class={twMerge(
        `flex border border-gray-200 rounded-full shadow-md hover:cursor-pointer ${
          isMenuFocus() ? "bg-gray-200" : ""
        }`,
        props.class
      )}
    >
      <div
        class={`rounded-full px-6 py-2 ${
          state() && state() == whereRef
            ? "bg-white shadow-xl"
            : "hover:bg-gray-200"
        } focus-within:outline-none hover:cursor-pointer`}
        tabIndex={1}
        ref={whereRef}
        role="button"
        onclick={() => {
          open(whereRef);
          whereInputRef.focus();
        }}
      >
        <label
          for="whereinput"
          class="text-xs font-medium w-full hover:cursor-pointer"
        >
          Where
        </label>
        <input
          type="text"
          tabIndex={1}
          id="whereinput"
          ref={whereInputRef}
          placeholder={"Search destinations"}
          class="w-full bg-inherit focus-visible:outline-none text-xs hover:cursor-pointer"
        />
      </div>
      <Show when={state() && state() != whereRef && state() != checkinRef}>
        <Divisor />
      </Show>

      <div
        class={`rounded-full  pl-4 py-2 ${
          state() && state() == checkinRef
            ? "bg-white shadow-xl"
            : "hover:bg-gray-200"
        } focus-within:outline-none hover:cursor-pointer`}
        tabIndex={1}
        role="button"
        ref={checkinRef}
        onclick={() => {
          open(checkinRef);
        }}
      >
        <label
          for="checkin"
          class="text-xs font-medium w-full hover:cursor-pointer"
        >
          Check in
        </label>
        <input
          type="text"
          id="checkin"
          placeholder={"Add dates"}
          class="bg-inherit text-xs focus-visible:outline-none hover:cursor-pointer"
          readonly
        />
      </div>
      <Show when={state() && state() != checkinRef && state() != checkoutRef}>
        <Divisor />
      </Show>
      <div
        class={`rounded-full  pl-4 py-2 ${
          state() && state() == checkoutRef
            ? "bg-white shadow-xl"
            : "hover:bg-gray-200"
        } focus-within:outline-none hover:cursor-pointer`}
        tabIndex={1}
        role="button"
        ref={checkoutRef}
        onclick={(e) => {
          open(checkoutRef);
        }}
      >
        <label
          for="checkout"
          class="text-xs font-medium w-full hover:cursor-pointer"
        >
          Check out
        </label>
        <input
          type="text"
          id="checkout"
          placeholder={"Add dates"}
          class="bg-inherit text-xs focus-visible:outline-none hover:cursor-pointer"
          readonly
        />
      </div>
      <Show when={state() && state() != checkoutRef && state() != whoRef}>
        <Divisor />
      </Show>

      <div
        class={`rounded-full  pl-8 pr-2 py-2 flex ${
          state() && state() == whoRef
            ? "bg-white shadow-xl"
            : "hover:bg-gray-200"
        } focus-within:outline-none hover:cursor-pointer`}
        tabIndex={1}
        ref={whoRef}
        role="button"
        onclick={(e) => {
          open(whoRef);
        }}
      >
        <div class="mr-4">
          <label
            for="guests"
            class="text-xs font-medium w-full hover:cursor-pointer"
          >
            Who
          </label>
          <input
            type="text"
            id="guests"
            placeholder={"Add guests"}
            class="w-full bg-inherit text-xs focus-visible:outline-none hover:cursor-pointer"
            readonly
          />
        </div>
        <button
          type="submit"
          class="flex justify-center items-center rounded-full min-w-12 w-12 h-12 relative bg-header_brand-color grow active:bg-linaria-theme_palette-rausch-contrast cursor-pointer"
          onclick={(e) => {
            e.stopImmediatePropagation();
            e.preventDefault();
          }}
        >
          <span class="iconify carbon--search text-white font-bold text-xl"></span>
        </button>
      </div>
    </form>
  );
}
