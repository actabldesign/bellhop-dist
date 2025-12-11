import type { Components, JSX } from "../types/components";

interface BhCardFooter extends Components.BhCardFooter, HTMLElement {}
export const BhCardFooter: {
    prototype: BhCardFooter;
    new (): BhCardFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
