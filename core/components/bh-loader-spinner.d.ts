import type { Components, JSX } from "../types/components";

interface BhLoaderSpinner extends Components.BhLoaderSpinner, HTMLElement {}
export const BhLoaderSpinner: {
    prototype: BhLoaderSpinner;
    new (): BhLoaderSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
