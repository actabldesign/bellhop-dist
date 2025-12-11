import type { Components, JSX } from "../types/components";

interface BhInputNumber extends Components.BhInputNumber, HTMLElement {}
export const BhInputNumber: {
    prototype: BhInputNumber;
    new (): BhInputNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
