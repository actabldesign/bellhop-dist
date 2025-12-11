import type { Components, JSX } from "../types/components";

interface BhNotification extends Components.BhNotification, HTMLElement {}
export const BhNotification: {
    prototype: BhNotification;
    new (): BhNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
