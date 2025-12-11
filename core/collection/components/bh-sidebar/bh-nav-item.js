import { h } from "@stencil/core";
export class BhNavItem {
    /**
     * Material Symbols icon name
     */
    icon = 'home';
    /**
     * Label text displayed below the icon
     */
    label = 'Home';
    /**
     * Whether the nav item is active/selected
     */
    isActive = false;
    /**
     * Whether the nav item is disabled
     */
    disabled = false;
    /**
     * Event emitted when the nav item is clicked
     */
    bhClick;
    handleClick = () => {
        if (!this.disabled) {
            this.bhClick.emit();
        }
    };
    handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.bhClick.emit();
        }
    };
    render() {
        const navItemClasses = {
            'nav-item': true,
            'active': this.isActive,
            'disabled': this.disabled,
        };
        return (h("div", { key: 'eff7adc93f70b788035ee175f06b84dfaa3eafaa', class: navItemClasses }, h("button", { key: '37cf2ec326fd00b03c71967e5395a9a64fabac2d', class: "nav-item-button", "aria-label": this.label, type: "button", onClick: this.handleClick, onKeyDown: this.handleKeyDown, disabled: this.disabled, tabIndex: this.disabled ? -1 : 0 }, h("span", { key: '098fb47a65ed3b3e2409273ae7932c820870484d', class: "material-symbols-outlined icon" }, this.icon)), h("p", { key: '112cc6fae3e4f5e9c44e2ffab69e86908b35c629', class: "nav-item-label" }, this.label)));
    }
    static get is() { return "bh-nav-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-nav-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-nav-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Material Symbols icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "'home'"
            },
            "label": {
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
                    "text": "Label text displayed below the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Home'"
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
                    "text": "Whether the nav item is active/selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-active",
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
                    "text": "Whether the nav item is disabled"
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
                "method": "bhClick",
                "name": "bhClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the nav item is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-nav-item.js.map
