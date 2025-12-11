import type { Components, JSX } from "../types/components";

interface BhInputAutocomplete extends Components.BhInputAutocomplete, HTMLElement {}
export const BhInputAutocomplete: {
    prototype: BhInputAutocomplete;
    new (): BhInputAutocomplete;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
