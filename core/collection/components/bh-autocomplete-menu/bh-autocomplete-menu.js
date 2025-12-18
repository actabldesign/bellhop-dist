import { h, Host } from "@stencil/core";
export class BhAutocompleteMenu {
    /**
     * Array of menu items
     */
    menuItems = [];
    /**
     * Whether the menu is visible
     */
    visible = false;
    /**
     * Currently selected item index
     */
    selectedIndex = -1;
    /**
     * Maximum height of the menu in pixels
     */
    maxHeight = 280;
    /**
     * Enable multi-select mode with checkmarks
     */
    multiSelect = false;
    /**
     * Search query for highlighting text
     */
    searchQuery = '';
    /**
     * Event emitted when an item is clicked
     */
    bhItemClick;
    /**
     * Event emitted when an item is hovered
     */
    bhItemHover;
    isAnimating = false;
    shouldRender = false;
    items = [];
    watchVisible(newValue) {
        if (newValue) {
            this.shouldRender = true;
            this.isAnimating = false;
        }
        else {
            this.isAnimating = true;
            setTimeout(() => {
                this.shouldRender = false;
                this.isAnimating = false;
            }, 150);
        }
    }
    watchMenuItems(newValue) {
        this.items = [...newValue];
    }
    componentWillLoad() {
        this.shouldRender = this.visible;
        this.items = [...this.menuItems];
    }
    handleItemClick = (item) => {
        if (!item.disabled) {
            if (this.multiSelect) {
                // Toggle selection in multi-select mode
                this.items = this.items.map(i => i.id === item.id ? { ...i, selected: !i.selected } : i);
                const updatedItem = this.items.find(i => i.id === item.id);
                this.bhItemClick.emit(updatedItem);
            }
            else {
                this.bhItemClick.emit(item);
            }
        }
    };
    handleItemMouseEnter = (index) => {
        this.bhItemHover.emit(index);
    };
    handleMouseDown = (e) => {
        e.preventDefault();
    };
    getMenuClasses = () => {
        return {
            'autocomplete-menu': true,
            'animate-dropdown-exit': this.isAnimating && !this.visible,
            'animate-dropdown-enter': this.visible && !this.isAnimating,
        };
    };
    getItemClasses = (index, item) => {
        return {
            'autocomplete-item': true,
            'disabled': !!item.disabled,
            'selected': index === this.selectedIndex,
        };
    };
    getHighlightedText = (text) => {
        if (!this.searchQuery || this.searchQuery.length < 3) {
            return text;
        }
        const regex = new RegExp(`(${this.searchQuery})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) => regex.test(part) ? (h("span", { key: index, class: "highlight" }, part)) : (h("span", { key: index }, part)));
    };
    render() {
        if (!this.shouldRender || this.items.length === 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: this.getMenuClasses(), style: { maxHeight: `${this.maxHeight}px` } }, this.items.map((item, index) => (h("div", { key: item.id, class: this.getItemClasses(index, item), onMouseEnter: () => this.handleItemMouseEnter(index), role: "option", "aria-selected": index === this.selectedIndex ? 'true' : 'false', "aria-disabled": item.disabled ? 'true' : 'false' }, h("div", { class: "item-content", onClick: () => this.handleItemClick(item), onMouseDown: this.handleMouseDown }, h("span", { class: "item-text", title: item.label }, this.getHighlightedText(item.label)), this.multiSelect && item.selected && (h("span", { class: "check-icon material-symbols-outlined" }, "check")))))))));
    }
    static get is() { return "bh-autocomplete-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-autocomplete-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-autocomplete-menu.css"]
        };
    }
    static get properties() {
        return {
            "menuItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AutocompleteMenuItem[]",
                    "resolved": "AutocompleteMenuItem[]",
                    "references": {
                        "AutocompleteMenuItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx",
                            "id": "src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx::AutocompleteMenuItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of menu items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "visible": {
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
                    "text": "Whether the menu is visible"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "visible",
                "defaultValue": "false"
            },
            "selectedIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected item index"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-index",
                "defaultValue": "-1"
            },
            "maxHeight": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum height of the menu in pixels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height",
                "defaultValue": "280"
            },
            "multiSelect": {
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
                    "text": "Enable multi-select mode with checkmarks"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multi-select",
                "defaultValue": "false"
            },
            "searchQuery": {
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
                    "text": "Search query for highlighting text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search-query",
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "isAnimating": {},
            "shouldRender": {},
            "items": {}
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
                    "text": "Event emitted when an item is clicked"
                },
                "complexType": {
                    "original": "AutocompleteMenuItem",
                    "resolved": "AutocompleteMenuItem",
                    "references": {
                        "AutocompleteMenuItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx",
                            "id": "src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx::AutocompleteMenuItem"
                        }
                    }
                }
            }, {
                "method": "bhItemHover",
                "name": "bhItemHover",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when an item is hovered"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "visible",
                "methodName": "watchVisible"
            }, {
                "propName": "menuItems",
                "methodName": "watchMenuItems"
            }];
    }
}
//# sourceMappingURL=bh-autocomplete-menu.js.map
