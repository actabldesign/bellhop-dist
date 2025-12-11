import { h, Host } from "@stencil/core";
export class BhPageNavigationChild {
    /**
     * Label text for the navigation item
     */
    label;
    /**
     * Optional badge text/number to display
     */
    badge;
    /**
     * Whether to show the badge (when badge prop is provided)
     */
    showBadge = true;
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
            'page-navigation-child': true,
            'active': this.isActive,
        };
    }
    render() {
        return (h(Host, { key: 'c3e5a383d775f9d2d9d144a7e30b296ebb04d337' }, h("div", { key: 'a1affbc17cc2b0e3ffde0cdc0e1852ea6102264c', class: this.getItemClasses(), onClick: this.handleClick }, h("div", { key: '87ab5dca93ebf96c8635543e428f5f2ef826d98b', class: "page-navigation-child-content" }, h("span", { key: 'f9decd8f300be9d88f4f030ca6f626f915fba2e6', class: "page-navigation-child-label" }, this.label), this.badge !== undefined && this.showBadge && (h("span", { key: '5c4d1291f158e07a5f8a4aa90563f2db4b03ccf2', class: "page-navigation-child-badge" }, this.badge))))));
    }
    static get is() { return "bh-page-navigation-child"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-page-navigation-child.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-page-navigation-child.css"]
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
            "badge": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional badge text/number to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge"
            },
            "showBadge": {
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
                    "text": "Whether to show the badge (when badge prop is provided)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-badge",
                "defaultValue": "true"
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
//# sourceMappingURL=bh-page-navigation-child.js.map
