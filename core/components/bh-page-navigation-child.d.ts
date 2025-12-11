import type { Components, JSX } from "../types/components";

interface BhPageNavigationChild extends Components.BhPageNavigationChild, HTMLElement {}
export const BhPageNavigationChild: {
    prototype: BhPageNavigationChild;
    new (): BhPageNavigationChild;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
