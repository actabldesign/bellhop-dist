import type { Components, JSX } from "../types/components";

interface BhCheckboxGroupItem extends Components.BhCheckboxGroupItem, HTMLElement {}
export const BhCheckboxGroupItem: {
    prototype: BhCheckboxGroupItem;
    new (): BhCheckboxGroupItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
