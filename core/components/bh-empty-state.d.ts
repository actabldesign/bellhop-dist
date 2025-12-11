import type { Components, JSX } from "../types/components";

interface BhEmptyState extends Components.BhEmptyState, HTMLElement {}
export const BhEmptyState: {
    prototype: BhEmptyState;
    new (): BhEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
