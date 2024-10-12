import { JSX, ParentComponent, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

const Dropdown: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const [picked, others] = splitProps(props, ["class", "children"]);
  return (
    <div
      {...others}
      class={twMerge(
        `rounded-2xl shadow-md border border-gray-100 bg-white text-nowrap absolute py-3 right-0 mt-2 z-10`,
        picked.class
      )}
    >
      {picked.children}
    </div>
  );
};
export default Dropdown;
