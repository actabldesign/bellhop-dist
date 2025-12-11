import { h, Fragment } from "@stencil/core";
export class BhBreadcrumbs {
    /**
     * Array of breadcrumb items
     */
    items = [];
    /**
     * Separator icon name (Material Symbols)
     */
    separator = 'chevron_right';
    /**
     * Whether to show the home button
     */
    showHome = true;
    /**
     * Maximum number of visible items before collapsing
     */
    maxVisibleItems = 4;
    /**
     * Event emitted when a breadcrumb item is clicked
     */
    bhItemClick;
    /**
     * Event emitted when navigating to a path
     */
    bhNavigate;
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
    get displayData() {
        const items = this.parsedItems;
        if (!items || items.length <= this.maxVisibleItems) {
            return {
                displayItems: items ? [...items] : [],
                showEllipsis: false,
                collapsedItems: [],
            };
        }
        else {
            const lastItems = items.slice(-(this.maxVisibleItems - 2));
            return {
                displayItems: [items[0], ...lastItems],
                showEllipsis: true,
                collapsedItems: items.slice(1, -(this.maxVisibleItems - 2)),
            };
        }
    }
    handleItemClick(item) {
        if (!item.isActive && item.path) {
            this.bhItemClick.emit(item);
            this.bhNavigate.emit(item.path);
        }
    }
    handleHomeClick = () => {
        const homeItem = {
            label: 'Home',
            path: '/',
        };
        this.bhItemClick.emit(homeItem);
        this.bhNavigate.emit('/');
    };
    handleEllipsisClick = () => {
        const { collapsedItems } = this.displayData;
        if (collapsedItems.length > 0) {
            this.handleItemClick(collapsedItems[0]);
        }
    };
    renderBreadcrumbItem(item, index) {
        if (item.isActive || !item.path) {
            return (h("div", { key: index, class: "breadcrumb-button breadcrumb-current", "aria-current": "page" }, h("span", { class: "breadcrumb-text" }, item.label)));
        }
        return (h("button", { key: index, type: "button", class: "breadcrumb-button", onClick: () => this.handleItemClick(item) }, h("span", { class: "breadcrumb-text" }, item.label)));
    }
    renderSeparator() {
        return (h("div", { class: "breadcrumb-separator" }, h("span", { class: "material-symbols-outlined" }, this.separator)));
    }
    render() {
        const { displayItems, showEllipsis, collapsedItems } = this.displayData;
        return (h("nav", { key: 'f8fa78dc80f7e0a6d7c2161396348a892f4c9d0b', class: "breadcrumbs", "aria-label": "Breadcrumb" }, h("div", { key: 'b7a5ae9c8206992802c6be37687c41033d452d7b', class: "breadcrumbs-container" }, this.showHome && (h("div", { key: '0e5312f7c42a90f2f979be515a856d60d2ffd733', class: "breadcrumb-item" }, h("bh-button-icon", { key: 'b95e5c59a7a5800c670c0c2b05ffc482d25f084c', hierarchy: "quaternary", size: "xs", iconName: "cottage", onClick: this.handleHomeClick, "aria-label": "Home" }))), this.showHome && (displayItems.length > 0 || showEllipsis) && this.renderSeparator(), showEllipsis && displayItems.length > 0 && (h(Fragment, { key: '510adc7a0db807a4232c2d23bbdbf55de28cc0b0' }, h("div", { key: 'dafefca139a16b4ae71c6577f8885d055e7643dc', class: "breadcrumb-item" }, this.renderBreadcrumbItem(displayItems[0], 0)), this.renderSeparator(), h("div", { key: '0ea0b6c5093c551e9f927b08e3caddd2c85d64d7', class: "breadcrumb-item" }, h("button", { key: 'b14a815428f58d34a753e8b1ae841a6c7a815b15', type: "button", class: "breadcrumb-button breadcrumb-ellipsis", onClick: this.handleEllipsisClick, title: `Show ${collapsedItems.length} hidden items` }, h("span", { key: 'f22204e923c5bb60be5b578861be47c0bb8aacf0', class: "breadcrumb-text" }, "..."))), this.renderSeparator(), displayItems.slice(1).map((item, index) => (h(Fragment, null, h("div", { class: "breadcrumb-item", key: `item-${index + 1}` }, this.renderBreadcrumbItem(item, index + 1)), index < displayItems.slice(1).length - 1 && this.renderSeparator()))))), !showEllipsis && displayItems.map((item, index) => (h(Fragment, null, h("div", { class: "breadcrumb-item", key: `item-${index}` }, this.renderBreadcrumbItem(item, index)), index < displayItems.length - 1 && this.renderSeparator()))))));
    }
    static get is() { return "bh-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-breadcrumbs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-breadcrumbs.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BreadcrumbItem[] | string",
                    "resolved": "BreadcrumbItem[] | string",
                    "references": {
                        "BreadcrumbItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-breadcrumbs/bh-breadcrumbs.tsx",
                            "id": "src/components/bh-breadcrumbs/bh-breadcrumbs.tsx::BreadcrumbItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of breadcrumb items"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "items",
                "defaultValue": "[]"
            },
            "separator": {
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
                    "text": "Separator icon name (Material Symbols)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "separator",
                "defaultValue": "'chevron_right'"
            },
            "showHome": {
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
                    "text": "Whether to show the home button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-home",
                "defaultValue": "true"
            },
            "maxVisibleItems": {
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
                    "text": "Maximum number of visible items before collapsing"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-visible-items",
                "defaultValue": "4"
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
                    "text": "Event emitted when a breadcrumb item is clicked"
                },
                "complexType": {
                    "original": "BreadcrumbItem",
                    "resolved": "BreadcrumbItem",
                    "references": {
                        "BreadcrumbItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-breadcrumbs/bh-breadcrumbs.tsx",
                            "id": "src/components/bh-breadcrumbs/bh-breadcrumbs.tsx::BreadcrumbItem"
                        }
                    }
                }
            }, {
                "method": "bhNavigate",
                "name": "bhNavigate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when navigating to a path"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-breadcrumbs.js.map
