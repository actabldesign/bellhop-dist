import type { Components, JSX } from "../types/components";

interface BhModalHeader extends Components.BhModalHeader, HTMLElement {}
export const BhModalHeader: {
    prototype: BhModalHeader;
    new (): BhModalHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
