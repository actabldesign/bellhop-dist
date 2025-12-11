import type { Components, JSX } from "../types/components";

interface BhNavItem extends Components.BhNavItem, HTMLElement {}
export const BhNavItem: {
    prototype: BhNavItem;
    new (): BhNavItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
