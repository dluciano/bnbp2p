import { A } from "@solidjs/router";
import { Show } from "solid-js";

type Props = {
  title: string;
  subtitle: string;
  subtitleUrl?: string;
  minDisable: boolean;
  maxDisable: boolean;
  value: number;
  textValue: string;
  onDecrement: () => void;
  onIncrement: () => void;
};

export const MenuButtons = (props: Props) => {
  return (
    <div class="flex justify-between w-full">
      <div>
        <h1 class="font-semibold tracking-wide">{props.title}</h1>
        <Show
          when={props.subtitleUrl}
          fallback={
            <h2 class="font-extralight text-gray-500 text-sm">
              {props.subtitle}
            </h2>
          }
        >
          <A
            href={props.subtitleUrl ?? ""}
            class="underline text-gray-500 text-sm font-md"
          >
            {props.subtitle}
          </A>
        </Show>
      </div>
      <div class="flex items-center gap-1 justify-evenly">
        <button
          type="button"
          class={`rounded-full w-8 h-8 border flex justify-center items-center ${
            props.minDisable ? "hover:cursor-not-allowed" : "border-gray-500"
          }`}
          onclick={() => {
            props.onDecrement();
          }}
          disabled={props.minDisable}
        >
          <span class="iconify carbon--subtract"></span>
        </button>
        <input type="hidden" value={props.value} />
        <p class="focus-visible:outline-none w-10 max-w-10  text-center">
          {props.textValue}
        </p>
        <button
          type="button"
          class={`rounded-full w-8 h-8 border flex justify-center items-center ${
            props.maxDisable ? "hover:cursor-not-allowed" : "border-gray-500"
          }`}
          onclick={() => {
            props.onIncrement();
          }}
          disabled={props.maxDisable}
        >
          <span class="iconify carbon--add"></span>
        </button>
      </div>
    </div>
  );
};
