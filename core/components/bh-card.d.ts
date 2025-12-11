import type { Components, JSX } from "../types/components";

interface BhCard extends Components.BhCard, HTMLElement {}
export const BhCard: {
    prototype: BhCard;
    new (): BhCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
