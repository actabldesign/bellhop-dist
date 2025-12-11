import type { Components, JSX } from "../types/components";

interface BhContainer extends Components.BhContainer, HTMLElement {}
export const BhContainer: {
    prototype: BhContainer;
    new (): BhContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
