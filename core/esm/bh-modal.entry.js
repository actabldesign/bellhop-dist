import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhModalCss = ":host{display:block}.modal-wrapper{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;padding:var(--spacing-4xl, 32px);z-index:1000}.modal-overlay{position:absolute;inset:0;background:var(--color-bg-overlay, rgba(64, 73, 104, 0.7));backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}.modal{position:relative;display:flex;flex-direction:column;align-items:center;width:100%;max-width:400px;background:var(--color-bg-primary, #ffffff);border-radius:var(--radius-xl, 12px);box-shadow:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);overflow:hidden;z-index:1}@media (max-width: 480px){.modal-wrapper{padding:var(--spacing-xl, 16px)}.modal{max-width:100%}}@keyframes modalFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}@keyframes overlayFadeIn{from{opacity:0}to{opacity:1}}.modal{animation:modalFadeIn 0.2s ease-out}.modal-overlay{animation:overlayFadeIn 0.2s ease-out}";

const MODAL_WIDTHS = {
    sm: '400px',
    md: '480px',
    lg: '520px',
    xl: '640px',
    xxl: '688px',
};
const BhModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhClose = createEvent(this, "bhClose");
    }
    /**
     * Whether the modal is visible
     */
    visible = false;
    /**
     * Whether to show the backdrop overlay
     */
    overlay = true;
    /**
     * Preset width of the modal: sm (400px), md (480px), lg (520px), xl (640px), xxl (688px)
     */
    width = 'sm';
    /**
     * Emitted when the modal is closed (overlay click or close button)
     */
    bhClose;
    handleClose = () => {
        this.bhClose.emit();
    };
    handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.handleClose();
        }
    };
    render() {
        if (!this.visible)
            return null;
        const modalClasses = {
            'modal-wrapper': true,
            'modal-with-overlay': this.overlay,
        };
        return (h(Host, null, h("div", { class: modalClasses, onClick: this.handleOverlayClick }, this.overlay && h("div", { class: "modal-overlay" }), h("div", { class: "modal", style: { maxWidth: MODAL_WIDTHS[this.width] } }, h("slot", { name: "header" }), h("slot", null), h("slot", { name: "actions" })))));
    }
};
BhModal.style = bhModalCss;

export { BhModal as bh_modal };
//# sourceMappingURL=bh-modal.entry.js.map
