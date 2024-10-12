import {
  Accessor,
  createContext,
  createEffect,
  createSignal,
  ParentComponent,
} from "solid-js";

type ContextProps = {
  state: Accessor<HTMLElement | undefined>;
  open: (element: HTMLElement) => void;
  close: () => void;
};

export const context = createContext<ContextProps>({
  state: () => undefined,
  open: () => {},
  close: () => {},
});

export const MainWindowController: ParentComponent = (props) => {
  const [focusElement, setFocusElement] = createSignal<HTMLElement | undefined>(
    undefined
  );
  const open = (element: HTMLElement) => {
    setFocusElement(element);
  };
  const close = () => {
    setFocusElement(undefined);
  };

  createEffect(() => {
    window.onclick = (e) => {
      const obj: Node = e.target as Node;
      if (!obj) return;
      const f = focusElement();
      if (!f) return;
      if (f.contains(obj)) return;
      close();
    };
  });
  return (
    <context.Provider value={{ open, close, state: focusElement }}>
      {props.children}
    </context.Provider>
  );
};
