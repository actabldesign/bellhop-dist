import type { Components, JSX } from "../types/components";

interface BhContainerFooter extends Components.BhContainerFooter, HTMLElement {}
export const BhContainerFooter: {
    prototype: BhContainerFooter;
    new (): BhContainerFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
