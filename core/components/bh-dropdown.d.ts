import type { Components, JSX } from "../types/components";

interface BhDropdown extends Components.BhDropdown, HTMLElement {}
export const BhDropdown: {
    prototype: BhDropdown;
    new (): BhDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
