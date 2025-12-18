import { h, Host } from "@stencil/core";
export class BhModalHeader {
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
    static get is() { return "bh-modal-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-modal-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-modal-header.css"]
        };
    }
    static get properties() {
        return {
            "modalTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Modal title (required)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "modal-title"
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Modal description/supporting text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Icon name for the featured icon (Material Symbols)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "iconColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'brand'\n    | 'gray'\n    | 'error'\n    | 'warning'\n    | 'success'\n    | 'highlight'",
                    "resolved": "\"brand\" | \"error\" | \"gray\" | \"highlight\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color theme for the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-color",
                "defaultValue": "'success'"
            },
            "showIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-icon",
                "defaultValue": "true"
            },
            "showCloseButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show the close button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-close-button",
                "defaultValue": "true"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left-aligned' | 'center-aligned' | 'horizontal-left-aligned'",
                    "resolved": "\"center-aligned\" | \"horizontal-left-aligned\" | \"left-aligned\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Header alignment type"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'left-aligned'"
            },
            "paddingBottom": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show padding at the bottom"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "padding-bottom",
                "defaultValue": "true"
            },
            "divider": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show the divider line"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "divider",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhClose",
                "name": "bhClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the close button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-modal-header.js.map
