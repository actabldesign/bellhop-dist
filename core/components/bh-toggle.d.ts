import type { Components, JSX } from "../types/components";

interface BhToggle extends Components.BhToggle, HTMLElement {}
export const BhToggle: {
    prototype: BhToggle;
    new (): BhToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
