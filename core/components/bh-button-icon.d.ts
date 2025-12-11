import type { Components, JSX } from "../types/components";

interface BhButtonIcon extends Components.BhButtonIcon, HTMLElement {}
export const BhButtonIcon: {
    prototype: BhButtonIcon;
    new (): BhButtonIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
