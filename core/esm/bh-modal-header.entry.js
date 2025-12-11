import { r as registerInstance, c as createEvent, h, H as Host } from './index-DtVghh5W.js';

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
        return (h(Host, { key: 'ad20e958392104052271804fed2db19722ac8282' }, h("div", { key: 'a713c21457f52b822525b8f57d8271f1819aa38d', class: {
                'modal-header': true,
                'modal-header--center': isCenter,
                'modal-header--horizontal': isHorizontal,
            } }, h("div", { key: '626e7a67264004b50a277f30a097ab4a41b33928', class: {
                'modal-header-content': true,
                'modal-header-content--center': isCenter,
                'modal-header-content--horizontal': isHorizontal,
            } }, this.showIcon && this.icon && (h("bh-featured-icon", { key: 'edc15a401b9d2bbce19c0dfcb63101468fdb23a6', icon: this.icon, color: this.iconColor, size: "md", iconStyle: "outlined" })), h("div", { key: 'bedf14040ad14da23897c5ac9133f86cda0d65fd', class: {
                'modal-text-content': true,
                'modal-text-content--center': isCenter,
                'modal-text-content--horizontal': isHorizontal,
            } }, h("h3", { key: 'f75cef1870847f358d1d6ceb66d6f3908b0f253a', class: "modal-title" }, this.modalTitle), this.description && (h("p", { key: '9e2f1c87c13c9b8f2f9900dce153d3b7a59ddbd9', class: "modal-description" }, this.description)))), this.showCloseButton && (h("bh-button-icon", { key: '5c986a9d8d14ae4248231cac4b286f57cf75b5d6', class: "close-button", hierarchy: "quaternary", size: "sm", iconName: "close", ariaLabel: "Close modal", onBhClick: this.handleClose }))), this.paddingBottom && h("div", { key: 'ca8eb070067de8ce6915f449ddfccbdfaa898720', class: "padding-bottom" }), this.divider && h("div", { key: '54ccd33d77239a9a28240c6ef6adfcad0dc10956', class: "divider" })));
    }
};
BhModalHeader.style = bhModalHeaderCss;

export { BhModalHeader as bh_modal_header };
//# sourceMappingURL=bh-modal-header.entry.js.map
