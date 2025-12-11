import type { Components, JSX } from "../types/components";

interface BhBreadcrumbs extends Components.BhBreadcrumbs, HTMLElement {}
export const BhBreadcrumbs: {
    prototype: BhBreadcrumbs;
    new (): BhBreadcrumbs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
