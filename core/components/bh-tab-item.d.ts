import type { Components, JSX } from "../types/components";

interface BhTabItem extends Components.BhTabItem, HTMLElement {}
export const BhTabItem: {
    prototype: BhTabItem;
    new (): BhTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
