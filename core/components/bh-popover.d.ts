import type { Components, JSX } from "../types/components";

interface BhPopover extends Components.BhPopover, HTMLElement {}
export const BhPopover: {
    prototype: BhPopover;
    new (): BhPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
