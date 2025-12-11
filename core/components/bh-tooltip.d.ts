import type { Components, JSX } from "../types/components";

interface BhTooltip extends Components.BhTooltip, HTMLElement {}
export const BhTooltip: {
    prototype: BhTooltip;
    new (): BhTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
