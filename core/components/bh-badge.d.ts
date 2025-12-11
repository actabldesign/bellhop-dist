import type { Components, JSX } from "../types/components";

interface BhBadge extends Components.BhBadge, HTMLElement {}
export const BhBadge: {
    prototype: BhBadge;
    new (): BhBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
