import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhModalActionsCss = ":host{display:block;width:100%}.modal-actions{display:flex;flex-direction:column;align-items:flex-start;gap:var(--spacing-none, 0px);padding-top:var(--spacing-3xl, 24px);width:100%}.divider{height:1px;width:100%;flex-shrink:0;background-color:var(--color-border-secondary, #dcdfea);margin-bottom:var(--spacing-3xl, 24px)}.modal-actions-content{display:flex;gap:var(--spacing-lg, 12px);padding:0 var(--spacing-3xl, 24px);padding-bottom:var(--spacing-3xl, 24px);width:100%;box-sizing:border-box}.modal-actions-content--fill{flex-direction:row;align-items:stretch}.modal-actions-content--fill bh-button{flex:1;display:block;width:100%}.modal-actions-content--fill bh-button::part(button){width:100%}.modal-actions-content--fill .btn-destructive{flex:1}.modal-actions-content--right{flex-direction:row;align-items:center;justify-content:space-between}.actions-left{display:flex;gap:var(--spacing-lg, 12px);align-items:center}.actions-right{display:flex;gap:var(--spacing-lg, 12px);align-items:center;justify-content:flex-end}@media (max-width: 480px){.modal-actions-content--fill{flex-direction:column;align-items:stretch}.modal-actions-content--fill bh-button,.modal-actions-content--fill .btn-destructive{flex:none;width:100%}.modal-actions-content--fill{flex-direction:column-reverse}}.btn-destructive{display:flex;align-items:center;justify-content:center;gap:var(--button-content-gap, 4px);height:40px;padding:0 var(--button-padding-x, 12px);background-color:var(--color-bg-error, #d6341f);color:var(--color-fg-white, #ffffff);border:none;border-radius:var(--radius-md, 8px);font-family:var(--font-family-body, 'Inter', sans-serif);font-weight:var(--weight-semibold, 600);font-size:var(--button-font-size, 14px);line-height:var(--text-sm-line-height, 20px);letter-spacing:var(--letter-spacing-normal, 0px);cursor:pointer;overflow:hidden;transition:background-color 0.15s ease}.btn-destructive:hover{background-color:var(--color-bg-error-hover, #b82d1a)}.btn-destructive:focus-visible{outline:2px solid var(--color-bg-error, #d6341f);outline-offset:2px}.btn-destructive:active{background-color:var(--color-bg-error-active, #9a2515)}";

const BhModalActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhPrimaryAction = createEvent(this, "bhPrimaryAction");
        this.bhSecondaryAction = createEvent(this, "bhSecondaryAction");
    }
    /**
     * Layout type for the actions:
     * - 'fill': Buttons take full width
     * - 'right-aligned': Buttons aligned to the right with optional left content slot
     */
    type = 'fill';
    /**
     * Whether to show destructive styling on primary button
     */
    destructive = false;
    /**
     * Primary/destructive action button label
     */
    primaryLabel = 'Confirm';
    /**
     * Secondary action button label
     */
    secondaryLabel = 'Cancel';
    /**
     * Whether to show the divider line above actions
     */
    divider = false;
    /**
     * Emitted when the primary/destructive action button is clicked
     */
    bhPrimaryAction;
    /**
     * Emitted when the secondary action button is clicked
     */
    bhSecondaryAction;
    handlePrimaryAction = () => {
        this.bhPrimaryAction.emit();
    };
    handleSecondaryAction = () => {
        this.bhSecondaryAction.emit();
    };
    renderButtons() {
        const isRightAligned = this.type === 'right-aligned';
        const primaryButton = this.destructive ? (h("button", { class: "btn-destructive", onClick: this.handlePrimaryAction, type: "button" }, this.primaryLabel)) : (h("bh-button", { hierarchy: "primary", icon: "none", size: "md", label: this.primaryLabel, onBhClick: this.handlePrimaryAction }));
        const secondaryButton = (h("bh-button", { hierarchy: "secondary", icon: "none", size: "md", label: this.secondaryLabel, onBhClick: this.handleSecondaryAction }));
        if (isRightAligned) {
            return (h("div", { class: "modal-actions-content modal-actions-content--right" }, h("div", { class: "actions-left" }, h("slot", { name: "left-content" })), h("div", { class: "actions-right" }, secondaryButton, primaryButton)));
        }
        // Full width buttons (stacks vertically on mobile via CSS)
        return (h("div", { class: "modal-actions-content modal-actions-content--fill" }, secondaryButton, primaryButton));
    }
    render() {
        return (h(Host, { key: 'fa07c24fee15053743650dfe99ee671eecdbf8e3' }, h("div", { key: 'e3d48c9e12aad9b55c745b23b641a6e96db662c4', class: "modal-actions" }, this.divider && h("div", { key: '89997127609e3a888b25be6a39654b264db8d785', class: "divider" }), this.renderButtons())));
    }
};
BhModalActions.style = bhModalActionsCss;

export { BhModalActions as bh_modal_actions };
//# sourceMappingURL=bh-modal-actions.entry.js.map
