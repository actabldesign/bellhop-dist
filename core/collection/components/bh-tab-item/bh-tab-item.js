import { h, Host, } from "@stencil/core";
/**
 * @slot - Tab content (usually just text, but can include badges)
 */
export class BhTabItem {
    el;
    /**
     * Unique identifier for this tab
     */
    value;
    /**
     * The label text for the tab
     */
    label;
    /**
     * Whether this tab is currently active
     */
    active = false;
    /**
     * Whether this tab is disabled
     */
    disabled = false;
    /**
     * Emitted when the tab is clicked
     */
    bhTabItemClick;
    handleClick = () => {
        if (!this.disabled) {
            this.bhTabItemClick.emit(this.value);
        }
    };
    render() {
        const buttonClasses = {
            'tab-button': true,
            'tab-button-active': this.active,
            'tab-button-disabled': this.disabled,
        };
        return (h(Host, { key: '4ad8e3e786f4a4c8a2c38e518e66ef2ded4c04ca', class: {
                'tab-item': true,
                'tab-item-active': this.active,
                'tab-item-disabled': this.disabled,
            } }, h("button", { key: 'b149a3ed3cdd49e887545281a5f9a1383443aeca', class: buttonClasses, part: "button", role: "tab", "aria-selected": this.active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', disabled: this.disabled, onClick: this.handleClick, type: "button" }, h("span", { key: '03f58f2761a021310a6cd2f811795dbc95e02ea1', class: "tab-label", part: "label" }, this.label), h("slot", { key: 'd96a82e89d9d7c64d1f17c65da4a47f4774ed96a' }))));
    }
    static get is() { return "bh-tab-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-tab-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-tab-item.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                    "text": "Unique identifier for this tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "label": {
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
                    "text": "The label text for the tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "active": {
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
                    "text": "Whether this tab is currently active"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "active",
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Whether this tab is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhTabItemClick",
                "name": "bhTabItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the tab is clicked"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bh-tab-item.js.map
