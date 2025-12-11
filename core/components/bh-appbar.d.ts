import type { Components, JSX } from "../types/components";

interface BhAppbar extends Components.BhAppbar, HTMLElement {}
export const BhAppbar: {
    prototype: BhAppbar;
    new (): BhAppbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
