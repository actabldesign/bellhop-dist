import type { Components, JSX } from "../types/components";

interface BhAutocompleteMenu extends Components.BhAutocompleteMenu, HTMLElement {}
export const BhAutocompleteMenu: {
    prototype: BhAutocompleteMenu;
    new (): BhAutocompleteMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
