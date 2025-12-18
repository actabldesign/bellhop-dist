import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhModalHeaderCss = ":host{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-none, 0px);width:100%}.modal-header{display:flex;flex-direction:column;align-items:flex-start;gap:var(--spacing-none, 0px);width:100%;position:relative}.modal-header--center{align-items:center}.modal-header--horizontal{flex-direction:row;align-items:flex-start}.modal-header-content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--spacing-xl, 16px);padding:var(--spacing-3xl, 24px);padding-bottom:var(--spacing-none, 0px);width:100%}.modal-header-content--center{align-items:center}.modal-header-content--horizontal{flex-direction:row;align-items:flex-start}.modal-text-content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--spacing-xs, 4px);width:100%;flex:1;min-width:0}.modal-text-content--center{align-items:center;text-align:center}.modal-text-content--horizontal{flex:1;min-width:1px;min-height:1px}.modal-title{margin:0;font-family:var(--font-family-body, 'Inter', sans-serif);font-weight:var(--weight-semibold, 600);font-size:var(--text-lg-size, 18px);line-height:var(--text-lg-line-height, 28px);letter-spacing:var(--letter-spacing-normal, 0px);color:var(--color-text-primary, #111322);width:100%}.modal-description{margin:0;font-family:var(--font-family-body, 'Inter', sans-serif);font-weight:var(--weight-regular, 400);font-size:var(--text-sm-size, 14px);line-height:var(--text-sm-line-height, 20px);letter-spacing:var(--letter-spacing-normal, 0px);color:var(--color-text-tertiary, #4a5578);width:100%}.close-button{position:absolute;top:var(--spacing-lg, 12px);right:var(--spacing-lg, 12px)}.padding-bottom{height:20px;width:100%;flex-shrink:0}.divider{height:1px;width:100%;flex-shrink:0;background-color:var(--color-border-secondary, #dcdfea)}";

const BhModalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhClose = createEvent(this, "bhClose");
    }
    /**
     * Modal title (required)
     */
    modalTitle;
    /**
     * Modal description/supporting text
     */
    description;
    /**
     * Icon name for the featured icon (Material Symbols)
     */
    icon;
    /**
     * Color theme for the featured icon
     */
    iconColor = 'success';
    /**
     * Whether to show the featured icon
     */
    showIcon = true;
    /**
     * Whether to show the close button
     */
    showCloseButton = true;
    /**
     * Header alignment type
     */
    type = 'left-aligned';
    /**
     * Whether to show padding at the bottom
     */
    paddingBottom = true;
    /**
     * Whether to show the divider line
     */
    divider = false;
    /**
     * Emitted when the close button is clicked
     */
    bhClose;
    handleClose = () => {
        this.bhClose.emit();
    };
    render() {
        const isHorizontal = this.type === 'horizontal-left-aligned';
        const isCenter = this.type === 'center-aligned';
        return (h(Host, { key: 'ecc564b2fdb20b724b57417e19c011298070acc3' }, h("div", { key: 'bc83df6dd5b206ecc9d9407021c0a82a6a3c0163', class: {
                'modal-header': true,
                'modal-header--center': isCenter,
                'modal-header--horizontal': isHorizontal,
            } }, h("div", { key: 'c6c4a092a205ec1838fc25bec1169e335cad5dad', class: {
                'modal-header-content': true,
                'modal-header-content--center': isCenter,
                'modal-header-content--horizontal': isHorizontal,
            } }, this.showIcon && this.icon && (h("bh-featured-icon", { key: '3c6bfc2f3038d841861f19816ba13ab3ff4d9830', icon: this.icon, color: this.iconColor, size: "md", iconStyle: "outlined" })), h("div", { key: '968463ccc835da635c4ffbea04c47764d38b0ce6', class: {
                'modal-text-content': true,
                'modal-text-content--center': isCenter,
                'modal-text-content--horizontal': isHorizontal,
            } }, h("h3", { key: '97b45faf3f93ed63d16eefcd84af7d973e1eeac1', class: "modal-title" }, this.modalTitle), this.description && (h("p", { key: 'd7a3cbdfef4b55d93faa424aa2fc88d4e242defd', class: "modal-description" }, this.description)))), this.showCloseButton && (h("bh-button-icon", { key: '03b325d8aaa2e977b1ee5b03ee6d6eea71bb9981', class: "close-button", hierarchy: "quaternary", size: "sm", iconName: "close", ariaLabel: "Close modal", onBhClick: this.handleClose }))), this.paddingBottom && h("div", { key: 'b06b66e5691dbaffcf703dac3cf520dda60e283c', class: "padding-bottom" }), this.divider && h("div", { key: 'dc852a2142f9fb9cd8895123845a206bdd75b1e6', class: "divider" })));
    }
};
BhModalHeader.style = bhModalHeaderCss;

export { BhModalHeader as bh_modal_header };
//# sourceMappingURL=bh-modal-header.entry.js.map
