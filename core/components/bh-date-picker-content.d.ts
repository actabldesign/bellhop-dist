import type { Components, JSX } from "../types/components";

interface BhDatePickerContent extends Components.BhDatePickerContent, HTMLElement {}
export const BhDatePickerContent: {
    prototype: BhDatePickerContent;
    new (): BhDatePickerContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
