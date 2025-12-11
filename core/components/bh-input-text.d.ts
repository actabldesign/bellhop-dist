import type { Components, JSX } from "../types/components";

interface BhInputText extends Components.BhInputText, HTMLElement {}
export const BhInputText: {
    prototype: BhInputText;
    new (): BhInputText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
