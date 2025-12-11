import type { Components, JSX } from "../types/components";

interface BhAccordion extends Components.BhAccordion, HTMLElement {}
export const BhAccordion: {
    prototype: BhAccordion;
    new (): BhAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
