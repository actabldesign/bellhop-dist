import type { Components, JSX } from "../types/components";

interface BhProductSwitcher extends Components.BhProductSwitcher, HTMLElement {}
export const BhProductSwitcher: {
    prototype: BhProductSwitcher;
    new (): BhProductSwitcher;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
