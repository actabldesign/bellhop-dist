import type { Components, JSX } from "../types/components";

interface BhLabel extends Components.BhLabel, HTMLElement {}
export const BhLabel: {
    prototype: BhLabel;
    new (): BhLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
