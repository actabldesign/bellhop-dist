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
        return (h(Host, { key: '801f6ce9fa33bff82ae0572ca4233d62101bff5a' }, h("div", { key: 'b485e3a258658dadebda21a9f329bb676a737e6d', class: this.getItemClasses(), onClick: this.handleClick }, h("div", { key: '3cebeec1f7255591c5a2405198d65f7cc637fe02', class: "page-navigation-child-content" }, h("span", { key: '982dbda8defddf8a04cbd4831d68090816bb8228', class: "page-navigation-child-label" }, this.label), this.badge !== undefined && this.showBadge && (h("span", { key: '623a58963bbbbd94d5a2934165a4f5e821ef3a56', class: "page-navigation-child-badge" }, this.badge))))));
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
