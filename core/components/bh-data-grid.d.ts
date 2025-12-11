import type { Components, JSX } from "../types/components";

interface BhDataGrid extends Components.BhDataGrid, HTMLElement {}
export const BhDataGrid: {
    prototype: BhDataGrid;
    new (): BhDataGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
