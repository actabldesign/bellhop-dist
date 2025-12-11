import type { Components, JSX } from "../types/components";

interface BhMonthPicker extends Components.BhMonthPicker, HTMLElement {}
export const BhMonthPicker: {
    prototype: BhMonthPicker;
    new (): BhMonthPicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
