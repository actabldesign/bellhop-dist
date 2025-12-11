import type { Components, JSX } from "../types/components";

interface BhCheckbox extends Components.BhCheckbox, HTMLElement {}
export const BhCheckbox: {
    prototype: BhCheckbox;
    new (): BhCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
