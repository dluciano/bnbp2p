import Dropdown from "~/components/Dropdown";
import { MenuButtons } from "./MenuButtons";
import { createStore, produce } from "solid-js/store";
import { createAsync } from "@solidjs/router";
import {
  getLandingPageCMSContentCached,
  type LandingPageCMSContentResponse,
} from "~/server/cms";
import { createMemo } from "solid-js";

const Separator = () => <div class="h-[1px] bg-gray-200 w-full"></div>;

type MenuState = {
  minDisable: boolean;
  maxDisable: boolean;
  textValue: string;
  value: number;
};
type Store = {
  adults: MenuState;
  children: MenuState;
  infants: MenuState;
  pets: MenuState;
};
const initialState: Store = {
  adults: {
    minDisable: true,
    maxDisable: false,
    value: 0,
    textValue: "0",
  },
  children: {
    minDisable: true,
    maxDisable: false,
    value: 0,
    textValue: "0",
  },
  infants: {
    minDisable: true,
    maxDisable: false,
    value: 0,
    textValue: "0",
  },
  pets: {
    minDisable: true,
    maxDisable: false,
    value: 0,
    textValue: "0",
  },
};

const defaultCMSValues: LandingPageCMSContentResponse = {
  maxNumberOfAdultsAndChildren: 16,
  maxNumberOfInfants: 5,
  maxNumberOfPets: 5,
};

export const route = {
  preload: () => getLandingPageCMSContentCached(),
};

export default function GuestsInput() {
  const [state, setState] = createStore<Store>(initialState);
  const cms = createAsync(() => getLandingPageCMSContentCached());

  const response = createMemo(() => {
    const response = cms();
    if (!response) return defaultCMSValues;
    return response;
  });

  return (
    <Dropdown class="right-0 text-nowrap w-96 mt-5 p-6 overflow-y-auto flex flex-col space-y-6 hover:cursor-auto">
      <MenuButtons
        title="Adults"
        subtitle="Ages 13 or above"
        {...state.adults}
        onDecrement={() => {
          if (state.adults.value <= 0) return;
          setState(
            produce((state) => {
              state.adults.value = state.adults.value - 1;

              state.adults.maxDisable = false;
              state.children.maxDisable = false;
              if (state.adults.value === 0) state.adults.minDisable = true;
              state.adults.textValue = state.adults.value.toString();
            })
          );
        }}
        onIncrement={() => {
          if (
            state.adults.value + state.children.value >=
            response().maxNumberOfAdultsAndChildren
          )
            return;
          setState(
            produce((state) => {
              state.adults.minDisable = false;
              state.adults.value = state.adults.value + 1;
              if (
                state.adults.value === response().maxNumberOfAdultsAndChildren
              )
                state.adults.textValue = `${state.adults.value}+`;
              else state.adults.textValue = state.adults.value.toString();
              if (
                state.adults.value + state.children.value ===
                response().maxNumberOfAdultsAndChildren
              ) {
                state.adults.maxDisable = true;
                state.children.maxDisable = true;
              } else {
                state.adults.maxDisable = false;
                state.children.maxDisable = false;
              }
            })
          );
        }}
      />
      <Separator />
      <MenuButtons
        title="Children"
        subtitle="Age 2-12"
        {...state.children}
        onDecrement={() => {
          if (state.children.value <= 0) return;
          setState(
            produce((state) => {
              state.children.value = state.children.value - 1;

              state.children.maxDisable = false;
              state.adults.maxDisable = false;
              if (state.children.value === 0) state.children.minDisable = true;
              state.children.textValue = state.children.value.toString();
            })
          );
        }}
        onIncrement={() => {
          if (
            state.adults.value + state.children.value >=
            response().maxNumberOfAdultsAndChildren
          )
            return;
          setState(
            produce((state) => {
              if (state.adults.value === 0) {
                state.adults.value = 1;
                state.adults.textValue = state.adults.value.toString();
              }
              state.children.minDisable = false;
              state.children.value = state.children.value + 1;
              state.children.textValue = state.children.value.toString();
              if (
                state.adults.value + state.children.value ===
                response().maxNumberOfAdultsAndChildren
              ) {
                state.adults.maxDisable = true;
                state.children.maxDisable = true;
              } else {
                state.adults.maxDisable = false;
                state.children.maxDisable = false;
              }
            })
          );
        }}
      />
      <Separator />
      <MenuButtons
        title="Infants"
        subtitle="Under 2"
        {...state.infants}
        onDecrement={() => {
          if (state.infants.value <= 0) return;
          setState(
            produce((state) => {
              state.infants.value = state.infants.value - 1;

              state.infants.maxDisable = false;
              if (state.infants.value === 0) state.infants.minDisable = true;
              state.infants.textValue = state.infants.value.toString();
            })
          );
        }}
        onIncrement={() => {
          if (state.infants.value >= response().maxNumberOfInfants) return;
          setState(
            produce((state) => {
              if (state.infants.value === 0) {
                state.adults.value = 1;
                state.adults.textValue = state.adults.value.toString();
              }
              state.infants.minDisable = false;
              state.infants.value = state.infants.value + 1;
              state.infants.textValue = state.infants.value.toString();
              state.infants.maxDisable =
                state.infants.value === response().maxNumberOfInfants;
            })
          );
        }}
      />
      <Separator />
      <MenuButtons
        title="Pets"
        subtitle="Bringing a service animal?"
        subtitleUrl="/"
        {...state.pets}
        onDecrement={() => {
          if (state.pets.value <= 0) return;
          setState(
            produce((state) => {
              state.pets.value = state.pets.value - 1;
              state.pets.maxDisable = false;
              if (state.pets.value === 0) state.pets.minDisable = true;
              state.pets.textValue = state.pets.value.toString();
            })
          );
        }}
        onIncrement={() => {
          if (state.pets.value >= response().maxNumberOfPets) return;
          setState(
            produce((state) => {
              if (state.pets.value === 0) {
                state.adults.value = 1;
                state.adults.textValue = state.adults.value.toString();
              }
              state.pets.minDisable = false;
              state.pets.value = state.pets.value + 1;
              state.pets.textValue = state.pets.value.toString();
              state.pets.maxDisable =
                state.pets.value === response().maxNumberOfPets;
            })
          );
        }}
      />
    </Dropdown>
  );
}
