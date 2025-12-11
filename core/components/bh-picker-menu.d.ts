import type { Components, JSX } from "../types/components";

interface BhPickerMenu extends Components.BhPickerMenu, HTMLElement {}
export const BhPickerMenu: {
    prototype: BhPickerMenu;
    new (): BhPickerMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
