import type { Components, JSX } from "../types/components";

interface BhCardHeader extends Components.BhCardHeader, HTMLElement {}
export const BhCardHeader: {
    prototype: BhCardHeader;
    new (): BhCardHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
