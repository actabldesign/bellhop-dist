import type { Components, JSX } from "../types/components";

interface BhSidebar extends Components.BhSidebar, HTMLElement {}
export const BhSidebar: {
    prototype: BhSidebar;
    new (): BhSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
