import type { Components, JSX } from "../types/components";

interface BhTextarea extends Components.BhTextarea, HTMLElement {}
export const BhTextarea: {
    prototype: BhTextarea;
    new (): BhTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
