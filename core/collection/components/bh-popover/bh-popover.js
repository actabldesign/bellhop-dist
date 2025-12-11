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
        return (h(Host, { key: 'a7558db0c7b23e4ec142ec3ec5e37e5e43ecaf3c' }, h("div", { key: '096623edfec8b24ce671855023676ba9e724141c', class: "popover", style: { width: this.width } }, h("div", { key: '901ff94955110af56d627e145784771975b3b5f8', class: "popover-content" }, h("div", { key: '0948fe57cdbbed592c5f93e8b12536c501cd5e27', class: "popover-menu" }, this.showAvatar && (h("div", { key: '6d0cb4e23fc4ceda1dd68b5d89216c6e50c4c18a', class: "popover-header" }, h("div", { key: '9411bf1f7ada776fe571db95648bb0805e627ede', class: "avatar-group" }, h("div", { key: '5408e5fd2506587cc6fd4899f83094441101dfc3', class: "avatar" }, this.avatarSrc ? (h("img", { src: this.avatarSrc, alt: this.popoverTitle, class: "avatar-image" })) : (h("slot", { name: "avatar" }))), h("div", { key: '9b30791b5bb664c7fcdcf10799b133fa649da830', class: "brand-info" }, h("div", { key: 'cc2304d4e9189485ac3e7f7f7a7bf3b321f99f16', class: "brand-name" }, this.popoverTitle), this.viewPortfolioText && (h("button", { key: 'b3b002ebf605618453618cfdb773c35b3355011a', class: "portfolio-link", onClick: this.handlePortfolioClick, type: "button" }, this.viewPortfolioText)))))), this.showSearch && (h("div", { key: '04798ef99a65da73afbe794250a11dec659868ed', class: "search-container" }, h("div", { key: 'e90f1d2137036da8ba4ad8b02d747892958164c3', class: "search-input" }, h("div", { key: '0efa8b359b1b523c2afd3dc26aa86ce3c86c38f7', class: "search-content" }, h("span", { key: '90d4054abc0c3bb758b3a43b0e21835609ac3b5e', class: "material-symbols-outlined search-icon" }, "search"), h("input", { key: 'abfd05266b12e5599ff3d7c3c79af659e5085584', type: "text", placeholder: this.searchPlaceholder, value: this.searchTerm, onInput: this.handleSearchInput, class: "search-field" }))))), h("div", { key: '82906cd547356049aa9a7541b89152e1a8268cb5', class: "menu-items" }, items.map((item) => (h("div", { key: item.id }, item.type === 'header' && (h("div", { class: "menu-header" }, item.label)), item.type !== 'header' && (h("div", { class: "menu-item-container" }, h("button", { class: this.getItemClasses(item), onClick: () => this.handleItemClick(item), type: "button" }, item.label))))))))))));
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
