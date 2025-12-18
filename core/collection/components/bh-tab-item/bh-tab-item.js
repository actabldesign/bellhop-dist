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
        return (h(Host, { key: 'ef47c62d9595bb0f5648bacb3d4c8e1585d35a91', class: {
                'tab-item': true,
                'tab-item-active': this.active,
                'tab-item-disabled': this.disabled,
            } }, h("button", { key: 'a2e2130bc0cb369c456b9898732cd90350b69a79', class: buttonClasses, part: "button", role: "tab", "aria-selected": this.active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', disabled: this.disabled, onClick: this.handleClick, type: "button" }, h("span", { key: '2c415f19e1901e3d36039b5960b8ba80dd58d545', class: "tab-label", part: "label" }, this.label), h("slot", { key: 'd4484b4a489ddd7babdfba449e023370ae9aaea5' }))));
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
