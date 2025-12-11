import type { Components, JSX } from "../types/components";

interface BhPageNavigationMultiLevel extends Components.BhPageNavigationMultiLevel, HTMLElement {}
export const BhPageNavigationMultiLevel: {
    prototype: BhPageNavigationMultiLevel;
    new (): BhPageNavigationMultiLevel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
