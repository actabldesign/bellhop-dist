import type { Components, JSX } from "../types/components";

interface BhDatePicker extends Components.BhDatePicker, HTMLElement {}
export const BhDatePicker: {
    prototype: BhDatePicker;
    new (): BhDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
