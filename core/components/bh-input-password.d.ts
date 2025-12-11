import type { Components, JSX } from "../types/components";

interface BhInputPassword extends Components.BhInputPassword, HTMLElement {}
export const BhInputPassword: {
    prototype: BhInputPassword;
    new (): BhInputPassword;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
