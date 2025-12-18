import { h, Host } from "@stencil/core";
export class BhPageNavigationSingleLevel {
    /**
     * Label text for the navigation item
     */
    label;
    /**
     * Material icon name
     */
    icon = 'radio_button_unchecked';
    /**
     * Whether the item is currently active/selected
     */
    isActive = false;
    /**
     * Event emitted when the navigation item is clicked
     */
    bhItemClick;
    handleClick = () => {
        this.bhItemClick.emit();
    };
    getItemClasses() {
        return {
            'page-navigation-single-level': true,
            'page-navigation-animate-smooth': true,
            'active': this.isActive,
        };
    }
    render() {
        return (h(Host, { key: '1f58160e16d18bfe049035d33b48f14b11b676ae' }, h("div", { key: 'c5c44e67354359238f67df33c67e81ec2bbaf478', class: this.getItemClasses(), onClick: () => this.handleClick() }, h("div", { key: 'c3c3b27eaeb65d8325e5e92c428831af58a48448', class: "page-navigation-item-content" }, h("span", { key: 'e0e5315088e7f1c820fad38d2ae095494dc581bb', class: "page-navigation-item-icon material-symbols-outlined" }, this.icon), h("span", { key: '37d30adc75791076a84c58f92fd93ad7c16267f0', class: "page-navigation-item-label" }, this.label)))));
    }
    static get is() { return "bh-page-navigation-single-level"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-page-navigation-single-level.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-page-navigation-single-level.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Label text for the navigation item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Material icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "'radio_button_unchecked'"
            },
            "isActive": {
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
                    "text": "Whether the item is currently active/selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-active",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhItemClick",
                "name": "bhItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the navigation item is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-page-navigation-single-level.js.map
