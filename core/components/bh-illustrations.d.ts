import type { Components, JSX } from "../types/components";

interface BhIllustrations extends Components.BhIllustrations, HTMLElement {}
export const BhIllustrations: {
    prototype: BhIllustrations;
    new (): BhIllustrations;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
