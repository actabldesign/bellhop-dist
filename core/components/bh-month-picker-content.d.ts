import type { Components, JSX } from "../types/components";

interface BhMonthPickerContent extends Components.BhMonthPickerContent, HTMLElement {}
export const BhMonthPickerContent: {
    prototype: BhMonthPickerContent;
    new (): BhMonthPickerContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
