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
