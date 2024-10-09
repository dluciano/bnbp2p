import { JSX, ParentComponent, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";
type Props = {} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
const PillButton: ParentComponent<Props> = (props) => {
  const [otherProps, inputProps] = splitProps(props, ["children", "class"]);
  return (
    <button
      {...inputProps}
      class={twMerge(
        "hover:bg-linaria-theme_palette-bebe rounded-full px-4 py-3",
        otherProps.class
      )}
    >
      {otherProps.children}
    </button>
  );
};
export default PillButton;
