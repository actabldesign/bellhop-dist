import type { Components, JSX } from "../types/components";

interface BhTag extends Components.BhTag, HTMLElement {}
export const BhTag: {
    prototype: BhTag;
    new (): BhTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
