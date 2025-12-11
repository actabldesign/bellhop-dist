import type { Components, JSX } from "../types/components";

interface BhModalActions extends Components.BhModalActions, HTMLElement {}
export const BhModalActions: {
    prototype: BhModalActions;
    new (): BhModalActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
