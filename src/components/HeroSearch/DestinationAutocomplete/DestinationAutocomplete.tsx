import { createAsync } from "@solidjs/router";
import { For } from "solid-js";
import Dropdown from "~/components/Dropdown";
import { DestinationItem } from "./DestinationItem";
import { getDestinationCached } from "~/server";

export const route = {
  preload: () => getDestinationCached(),
};

export default function DestinationAutocomplete() {
  const destinations = createAsync(() => getDestinationCached());

  return (
    <Dropdown class="left-0 text-nowrap w-80 mt-5 p-0 overflow-y-auto max-h-96">
      <h1 class="text-xs px-6 pt-6 mb-1">Recent searches</h1>
      <div class="px-2 mb-1">
        <For each={destinations()?.recent}>
          {(destination) => <DestinationItem {...destination} class="p-4" />}
        </For>
      </div>
      <h1 class="text-xs px-6 pt-6 mb-1">Suggested destinations</h1>
      <div class="px-2 mb-6">
        <For each={destinations()?.suggested}>
          {(destination) => <DestinationItem {...destination} class="p-4" />}
        </For>
      </div>
    </Dropdown>
  );
}
