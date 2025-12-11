import type { Components, JSX } from "../types/components";

interface BhAccordionItem extends Components.BhAccordionItem, HTMLElement {}
export const BhAccordionItem: {
    prototype: BhAccordionItem;
    new (): BhAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
