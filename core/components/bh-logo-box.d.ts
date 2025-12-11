import type { Components, JSX } from "../types/components";

interface BhLogoBox extends Components.BhLogoBox, HTMLElement {}
export const BhLogoBox: {
    prototype: BhLogoBox;
    new (): BhLogoBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
