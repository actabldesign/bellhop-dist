import { h, Host } from "@stencil/core";
export class BhPopover {
    /**
     * Title displayed in the header
     */
    popoverTitle = 'Brand Name';
    /**
     * Text for the portfolio link
     */
    viewPortfolioText = 'view portfolio';
    /**
     * Placeholder text for search input
     */
    searchPlaceholder = 'Search by name or region';
    /**
     * Width of the popover
     */
    width = '240px';
    /**
     * Whether to show search input
     */
    showSearch = true;
    /**
     * Whether to show avatar section
     */
    showAvatar = true;
    /**
     * Avatar image source URL
     */
    avatarSrc;
    /**
     * Menu items array (JSON string or array)
     */
    items = [];
    searchTerm = '';
    /**
     * Event emitted when a menu item is selected
     */
    bhItemSelect;
    /**
     * Event emitted when portfolio link is clicked
     */
    bhPortfolioClick;
    /**
     * Event emitted when search input changes
     */
    bhSearchChange;
    get parsedItems() {
        if (typeof this.items === 'string') {
            try {
                return JSON.parse(this.items);
            }
            catch {
                return [];
            }
        }
        return this.items || [];
    }
    handleItemClick = (item) => {
        if (item.type !== 'header') {
            this.bhItemSelect.emit(item);
        }
    };
    handlePortfolioClick = () => {
        this.bhPortfolioClick.emit();
    };
    handleSearchInput = (event) => {
        const target = event.target;
        this.searchTerm = target.value;
        this.bhSearchChange.emit(this.searchTerm);
    };
    getItemClasses(item) {
        return {
            'menu-item': true,
            'selected': !!item.selected,
            'menu-item-portfolio': item.type === 'portfolio',
            'menu-item-region': item.type === 'region',
            'menu-item-property': item.type === 'property',
        };
    }
    render() {
        const items = this.parsedItems;
        return (h(Host, { key: '25499890c1864435bae214a37f7fc8d565d8f3da' }, h("div", { key: 'de6ade64a6cdf7ab299d0ee9187b676d2841d89c', class: "popover", style: { width: this.width } }, h("div", { key: '19d68a071d41a928dde7070ce17ef61ef0770118', class: "popover-content" }, h("div", { key: '103181dbb1ff47314cff71869bb84ad06c78de78', class: "popover-menu" }, this.showAvatar && (h("div", { key: 'd6b413cd6c726078e414174cfc75d5e95ffacddc', class: "popover-header" }, h("div", { key: '4cdad2a1457d4b8df7baeb0f04d849f47471a727', class: "avatar-group" }, h("div", { key: '7c59b44499eaba8da0982939dacef30899273c02', class: "avatar" }, this.avatarSrc ? (h("img", { src: this.avatarSrc, alt: this.popoverTitle, class: "avatar-image" })) : (h("slot", { name: "avatar" }))), h("div", { key: 'bfab1ee98a218d4ee75055872542135fbf179069', class: "brand-info" }, h("div", { key: '9eed24402c23ba99fa9fbcaf4b0a430ea01fe263', class: "brand-name" }, this.popoverTitle), this.viewPortfolioText && (h("button", { key: '2056c40e002bd029545f2f2fb898eed39f8f93db', class: "portfolio-link", onClick: this.handlePortfolioClick, type: "button" }, this.viewPortfolioText)))))), this.showSearch && (h("div", { key: 'd8b487b553522f4c5a0e9e74755c53fb7ff5dc1b', class: "search-container" }, h("div", { key: 'a20d988fa3f86e7c26a1b31ed04b4adfa34a7a36', class: "search-input" }, h("div", { key: 'd75a244d37324a84a8ae8501f334f84a52fe9b0e', class: "search-content" }, h("span", { key: '394b2c5f23949c72109ca5c441ef3069a6424530', class: "material-symbols-outlined search-icon" }, "search"), h("input", { key: '1887ff5e6d3b3c857b5e980d33d8adc0076b23a1', type: "text", placeholder: this.searchPlaceholder, value: this.searchTerm, onInput: this.handleSearchInput, class: "search-field" }))))), h("div", { key: 'e2b6ff5f6b7ba5929db7a9d1401ae2cfc1089eb7', class: "menu-items" }, items.map((item) => (h("div", { key: item.id }, item.type === 'header' && (h("div", { class: "menu-header" }, item.label)), item.type !== 'header' && (h("div", { class: "menu-item-container" }, h("button", { class: this.getItemClasses(item), onClick: () => this.handleItemClick(item), type: "button" }, item.label))))))))))));
    }
    static get is() { return "bh-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-popover.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-popover.css"]
        };
    }
    static get properties() {
        return {
            "popoverTitle": {
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
                    "text": "Title displayed in the header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "popover-title",
                "defaultValue": "'Brand Name'"
            },
            "viewPortfolioText": {
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
                    "text": "Text for the portfolio link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "view-portfolio-text",
                "defaultValue": "'view portfolio'"
            },
            "searchPlaceholder": {
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
                    "text": "Placeholder text for search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search-placeholder",
                "defaultValue": "'Search by name or region'"
            },
            "width": {
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
                    "text": "Width of the popover"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'240px'"
            },
            "showSearch": {
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
                    "text": "Whether to show search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-search",
                "defaultValue": "true"
            },
            "showAvatar": {
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
                    "text": "Whether to show avatar section"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-avatar",
                "defaultValue": "true"
            },
            "avatarSrc": {
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
                    "text": "Avatar image source URL"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-src"
            },
            "items": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PopoverItem[] | string",
                    "resolved": "PopoverItem[] | string",
                    "references": {
                        "PopoverItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-popover/bh-popover.tsx",
                            "id": "src/components/bh-popover/bh-popover.tsx::PopoverItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Menu items array (JSON string or array)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "items",
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "searchTerm": {}
        };
    }
    static get events() {
        return [{
                "method": "bhItemSelect",
                "name": "bhItemSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a menu item is selected"
                },
                "complexType": {
                    "original": "PopoverItem",
                    "resolved": "PopoverItem",
                    "references": {
                        "PopoverItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-popover/bh-popover.tsx",
                            "id": "src/components/bh-popover/bh-popover.tsx::PopoverItem"
                        }
                    }
                }
            }, {
                "method": "bhPortfolioClick",
                "name": "bhPortfolioClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when portfolio link is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhSearchChange",
                "name": "bhSearchChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when search input changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-popover.js.map
