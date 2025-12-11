import type { Components, JSX } from "../types/components";

interface BhDropdownMenu extends Components.BhDropdownMenu, HTMLElement {}
export const BhDropdownMenu: {
    prototype: BhDropdownMenu;
    new (): BhDropdownMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
