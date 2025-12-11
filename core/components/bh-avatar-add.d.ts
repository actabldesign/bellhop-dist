import type { Components, JSX } from "../types/components";

interface BhAvatarAdd extends Components.BhAvatarAdd, HTMLElement {}
export const BhAvatarAdd: {
    prototype: BhAvatarAdd;
    new (): BhAvatarAdd;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
