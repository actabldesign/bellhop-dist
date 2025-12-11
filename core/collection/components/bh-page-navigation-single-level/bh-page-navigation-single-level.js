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
        return (h(Host, { key: '5387b77b73fdc815daea9186650806bde7df23aa' }, h("div", { key: '8ce567faedcab4229e8255b4641d226e48b689ba', class: this.getItemClasses(), onClick: () => this.handleClick() }, h("div", { key: 'e7cc690ae45617f1c0a52553b8e10dee57862d8a', class: "page-navigation-item-content" }, h("span", { key: '3ae6648a0b4e96851548299c0a40cd71d020e476', class: "page-navigation-item-icon material-symbols-outlined" }, this.icon), h("span", { key: '005a1932186fb40b2fc31f8d5f77a97c73da989e', class: "page-navigation-item-label" }, this.label)))));
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
