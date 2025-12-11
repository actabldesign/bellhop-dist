import type { Components, JSX } from "../types/components";

interface BhButton extends Components.BhButton, HTMLElement {}
export const BhButton: {
    prototype: BhButton;
    new (): BhButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
