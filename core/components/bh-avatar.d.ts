import type { Components, JSX } from "../types/components";

interface BhAvatar extends Components.BhAvatar, HTMLElement {}
export const BhAvatar: {
    prototype: BhAvatar;
    new (): BhAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
