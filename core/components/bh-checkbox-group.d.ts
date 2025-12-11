import type { Components, JSX } from "../types/components";

interface BhCheckboxGroup extends Components.BhCheckboxGroup, HTMLElement {}
export const BhCheckboxGroup: {
    prototype: BhCheckboxGroup;
    new (): BhCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
