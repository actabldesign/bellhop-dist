import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhAutocompleteMenuCss = ".autocomplete-menu{position:absolute;z-index:1000;top:calc(100% + var(--spacing-sm));left:0;right:0;width:100%;min-width:240px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0px 32px 64px -12px rgba(64, 73, 104, 0.14),\n    0px 0px 1px 1px rgba(64, 73, 104, 0.1);border:1px solid var(--color-neutral-200);overflow:hidden;overflow-y:auto;padding:var(--spacing-xs) 0;box-sizing:border-box;transform:translateZ(0);will-change:opacity, transform}.autocomplete-item{padding:var(--spacing-none) var(--spacing-sm);cursor:pointer}.autocomplete-item.disabled{opacity:0.5;cursor:not-allowed}.item-content{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-lg);padding:var(--spacing-md) var(--spacing-md);border-radius:var(--radius-sm);transition:background-color 0.15s ease}.autocomplete-item:hover:not(.disabled) .item-content{background:var(--color-neutral-100)}.autocomplete-item.selected .item-content{background:var(--color-neutral-100)}.item-text{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.autocomplete-item.selected .item-text{color:var(--color-neutral-700);font-weight:var(--weight-medium)}.autocomplete-item.disabled .item-text{color:var(--color-neutral-400)}.item-text .highlight{font-weight:var(--weight-semibold);color:var(--color-neutral-800)}.check-icon{font-size:var(--text-xl-size);color:var(--color-brand-600);flex-shrink:0;font-variation-settings:'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24}.autocomplete-menu::-webkit-scrollbar{width:6px}.autocomplete-menu::-webkit-scrollbar-track{background:var(--color-neutral-50);border-radius:var(--radius-xs)}.autocomplete-menu::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.autocomplete-menu::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.autocomplete-menu{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) var(--color-neutral-50)}@media (prefers-contrast: high){.autocomplete-menu{border-width:2px}.autocomplete-item.selected{outline:2px solid var(--color-brand-500);outline-offset:-2px}}@media (prefers-reduced-motion: reduce){.autocomplete-menu.animate-dropdown-enter,.autocomplete-menu.animate-dropdown-exit{animation:none}.autocomplete-item{transition:none}}";

const BhAutocompleteMenu = /*@__PURE__*/ proxyCustomElement(class BhAutocompleteMenu extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhItemClick = createEvent(this, "bhItemClick");
        this.bhItemHover = createEvent(this, "bhItemHover");
    }
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
    static get watchers() { return {
        "visible": ["watchVisible"],
        "menuItems": ["watchMenuItems"]
    }; }
    static get style() { return bhAutocompleteMenuCss; }
}, [769, "bh-autocomplete-menu", {
        "menuItems": [16],
        "visible": [4],
        "selectedIndex": [2, "selected-index"],
        "maxHeight": [2, "max-height"],
        "multiSelect": [4, "multi-select"],
        "searchQuery": [1, "search-query"],
        "isAnimating": [32],
        "shouldRender": [32],
        "items": [32]
    }, undefined, {
        "visible": ["watchVisible"],
        "menuItems": ["watchMenuItems"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-autocomplete-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-autocomplete-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhAutocompleteMenu);
            }
            break;
    } });
}
defineCustomElement();

export { BhAutocompleteMenu as B, defineCustomElement as d };
//# sourceMappingURL=p-X9MH3dtg.js.map

//# sourceMappingURL=p-X9MH3dtg.js.map