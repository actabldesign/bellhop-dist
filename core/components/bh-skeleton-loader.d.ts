import type { Components, JSX } from "../types/components";

interface BhSkeletonLoader extends Components.BhSkeletonLoader, HTMLElement {}
export const BhSkeletonLoader: {
    prototype: BhSkeletonLoader;
    new (): BhSkeletonLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
