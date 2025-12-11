import type { Components, JSX } from "../types/components";

interface BhPropertySwitcher extends Components.BhPropertySwitcher, HTMLElement {}
export const BhPropertySwitcher: {
    prototype: BhPropertySwitcher;
    new (): BhPropertySwitcher;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
