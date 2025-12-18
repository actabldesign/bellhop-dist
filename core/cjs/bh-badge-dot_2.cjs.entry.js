'use strict';

var index = require('./index-DQwSUT6k.js');

const bhBadgeDotCss = ":host{display:inline-block}.badge-dot{border-radius:9999px;position:relative;display:inline-block;box-sizing:border-box}.badge-dot-sm{width:6px;height:6px}.badge-dot-md{width:8px;height:8px}.badge-dot-lg{width:10px;height:10px}.badge-dot-success{background-color:var(--color-success-500, #17B26A)}.badge-dot-blue{background-color:var(--color-blue-500, #5068DD)}.badge-dot-error{background-color:var(--color-error-500, #F05250)}.badge-dot-warning{background-color:var(--color-warning-500, #F79009)}.badge-dot-outline.badge-dot-sm{outline:3px solid;outline-offset:0}.badge-dot-outline.badge-dot-md{outline:4px solid;outline-offset:0}.badge-dot-outline.badge-dot-lg{outline:5px solid;outline-offset:0}.badge-dot-outline.badge-dot-success{outline-color:var(--color-success-100, #D1FADF)}.badge-dot-outline.badge-dot-blue{outline-color:var(--color-blue-200, #E1EAFE)}.badge-dot-outline.badge-dot-error{outline-color:var(--color-error-200, #FEE4E2)}.badge-dot-outline.badge-dot-warning{outline-color:var(--color-warning-200, #FEF0C7)}";

const BhBadgeDot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The size of the badge dot
     */
    size = 'md';
    /**
     * The color of the badge dot
     */
    color = 'error';
    /**
     * Whether to show an outline ring around the dot
     */
    outline = false;
    render() {
        const dotClasses = {
            'badge-dot': true,
            [`badge-dot-${this.size}`]: true,
            [`badge-dot-${this.color}`]: true,
            'badge-dot-outline': this.outline,
        };
        return index.h("div", { key: 'c5ce0849442e1b1551185936a328987877a888f5', class: dotClasses, part: "dot" });
    }
};
BhBadgeDot.style = bhBadgeDotCss;

const bhBreadcrumbsCss = ":host{display:block}.breadcrumbs{font-family:var(--font-inter);user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.breadcrumbs-container{display:flex;align-items:center;gap:var(--spacing-xs);flex-wrap:wrap}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-button{display:flex;align-items:center;justify-content:center;padding:var(--spacing-xs) var(--spacing-sm);border:none;background:transparent;border-radius:6px;cursor:pointer;transition:all 0.15s ease;color:var(--color-neutral-600);text-decoration:none;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:500;line-height:1.4285714285714286em;min-height:24px;box-sizing:border-box}.breadcrumb-button:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-900)}.breadcrumb-button:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:2px}.breadcrumb-home{padding:var(--spacing-xs);min-width:24px;min-height:24px}.breadcrumb-current{background-color:var(--color-neutral-50);color:var(--color-neutral-800);font-weight:500;cursor:default}.breadcrumb-current:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-800)}.breadcrumb-ellipsis{color:var(--color-neutral-600);font-weight:500}.breadcrumb-ellipsis:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-900)}.breadcrumb-text{white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis}.breadcrumb-icon{flex-shrink:0;font-size:20px;width:20px;height:20px;color:var(--color-neutral-600)}.breadcrumb-home .breadcrumb-icon{font-size:20px;width:20px;height:20px}.breadcrumb-separator{display:flex;align-items:center;color:var(--color-neutral-300);font-size:20px;flex-shrink:0}.breadcrumb-separator .material-symbols-outlined{font-size:20px;width:20px;height:20px}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}@media (max-width: 640px){.breadcrumb-text{max-width:120px}.breadcrumbs-container{gap:var(--spacing-xxs)}.breadcrumb-button{padding:var(--spacing-xxs) var(--spacing-xs);font-size:12px}}";

const BhBreadcrumbs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhItemClick = index.createEvent(this, "bhItemClick");
        this.bhNavigate = index.createEvent(this, "bhNavigate");
    }
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
    renderBreadcrumbItem(item, index$1) {
        if (item.isActive || !item.path) {
            return (index.h("div", { key: index$1, class: "breadcrumb-button breadcrumb-current", "aria-current": "page" }, index.h("span", { class: "breadcrumb-text" }, item.label)));
        }
        return (index.h("button", { key: index$1, type: "button", class: "breadcrumb-button", onClick: () => this.handleItemClick(item) }, index.h("span", { class: "breadcrumb-text" }, item.label)));
    }
    renderSeparator() {
        return (index.h("div", { class: "breadcrumb-separator" }, index.h("span", { class: "material-symbols-outlined" }, this.separator)));
    }
    render() {
        const { displayItems, showEllipsis, collapsedItems } = this.displayData;
        return (index.h("nav", { key: 'f8fa78dc80f7e0a6d7c2161396348a892f4c9d0b', class: "breadcrumbs", "aria-label": "Breadcrumb" }, index.h("div", { key: 'b7a5ae9c8206992802c6be37687c41033d452d7b', class: "breadcrumbs-container" }, this.showHome && (index.h("div", { key: '0e5312f7c42a90f2f979be515a856d60d2ffd733', class: "breadcrumb-item" }, index.h("bh-button-icon", { key: 'b95e5c59a7a5800c670c0c2b05ffc482d25f084c', hierarchy: "quaternary", size: "xs", iconName: "cottage", onClick: this.handleHomeClick, "aria-label": "Home" }))), this.showHome && (displayItems.length > 0 || showEllipsis) && this.renderSeparator(), showEllipsis && displayItems.length > 0 && (index.h(index.Fragment, { key: '510adc7a0db807a4232c2d23bbdbf55de28cc0b0' }, index.h("div", { key: 'dafefca139a16b4ae71c6577f8885d055e7643dc', class: "breadcrumb-item" }, this.renderBreadcrumbItem(displayItems[0], 0)), this.renderSeparator(), index.h("div", { key: '0ea0b6c5093c551e9f927b08e3caddd2c85d64d7', class: "breadcrumb-item" }, index.h("button", { key: 'b14a815428f58d34a753e8b1ae841a6c7a815b15', type: "button", class: "breadcrumb-button breadcrumb-ellipsis", onClick: this.handleEllipsisClick, title: `Show ${collapsedItems.length} hidden items` }, index.h("span", { key: 'f22204e923c5bb60be5b578861be47c0bb8aacf0', class: "breadcrumb-text" }, "..."))), this.renderSeparator(), displayItems.slice(1).map((item, index$1) => (index.h(index.Fragment, null, index.h("div", { class: "breadcrumb-item", key: `item-${index$1 + 1}` }, this.renderBreadcrumbItem(item, index$1 + 1)), index$1 < displayItems.slice(1).length - 1 && this.renderSeparator()))))), !showEllipsis && displayItems.map((item, index$1) => (index.h(index.Fragment, null, index.h("div", { class: "breadcrumb-item", key: `item-${index$1}` }, this.renderBreadcrumbItem(item, index$1)), index$1 < displayItems.length - 1 && this.renderSeparator()))))));
    }
};
BhBreadcrumbs.style = bhBreadcrumbsCss;

exports.bh_badge_dot = BhBadgeDot;
exports.bh_breadcrumbs = BhBreadcrumbs;
//# sourceMappingURL=bh-badge-dot.bh-breadcrumbs.entry.cjs.js.map
