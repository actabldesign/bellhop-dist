import type { Components, JSX } from "../types/components";

interface BhInputVerification extends Components.BhInputVerification, HTMLElement {}
export const BhInputVerification: {
    prototype: BhInputVerification;
    new (): BhInputVerification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
