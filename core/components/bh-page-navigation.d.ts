import type { Components, JSX } from "../types/components";

interface BhPageNavigation extends Components.BhPageNavigation, HTMLElement {}
export const BhPageNavigation: {
    prototype: BhPageNavigation;
    new (): BhPageNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
