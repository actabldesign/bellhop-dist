import type { Components, JSX } from "../types/components";

interface BhBadgeDot extends Components.BhBadgeDot, HTMLElement {}
export const BhBadgeDot: {
    prototype: BhBadgeDot;
    new (): BhBadgeDot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
