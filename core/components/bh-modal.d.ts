import type { Components, JSX } from "../types/components";

interface BhModal extends Components.BhModal, HTMLElement {}
export const BhModal: {
    prototype: BhModal;
    new (): BhModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
