import type { Components, JSX } from "../types/components";

interface BhTabs extends Components.BhTabs, HTMLElement {}
export const BhTabs: {
    prototype: BhTabs;
    new (): BhTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
