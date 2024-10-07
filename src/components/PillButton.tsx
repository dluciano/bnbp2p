import { JSX, ParentComponent, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";
type Props = {} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
const PillButton: ParentComponent<Props> = (props) => {
  const [otherProps, inputProps] = splitProps(props, ["children", "class"]);
  return (
    <button
      {...inputProps}
      class={twMerge(
        "hover:bg-linaria-theme_palette-bebe hover:rounded-3xl",
        otherProps.class
      )}
    >
      <div class="mx-4 my-3">{otherProps.children}</div>
    </button>
  );
};
export default PillButton;
