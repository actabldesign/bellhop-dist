'use strict';

var index = require('./index-DQwSUT6k.js');

const bhAutocompleteMenuCss = ".autocomplete-menu{position:absolute;z-index:1000;top:calc(100% + var(--spacing-sm));left:0;right:0;width:100%;min-width:240px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0px 32px 64px -12px rgba(64, 73, 104, 0.14),\n    0px 0px 1px 1px rgba(64, 73, 104, 0.1);border:1px solid var(--color-neutral-200);overflow:hidden;overflow-y:auto;padding:var(--spacing-xs) 0;box-sizing:border-box;transform:translateZ(0);will-change:opacity, transform}.autocomplete-item{padding:var(--spacing-none) var(--spacing-sm);cursor:pointer}.autocomplete-item.disabled{opacity:0.5;cursor:not-allowed}.item-content{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-lg);padding:var(--spacing-md) var(--spacing-md);border-radius:var(--radius-sm);transition:background-color 0.15s ease}.autocomplete-item:hover:not(.disabled) .item-content{background:var(--color-neutral-100)}.autocomplete-item.selected .item-content{background:var(--color-neutral-100)}.item-text{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.autocomplete-item.selected .item-text{color:var(--color-neutral-700);font-weight:var(--weight-medium)}.autocomplete-item.disabled .item-text{color:var(--color-neutral-400)}.item-text .highlight{font-weight:var(--weight-semibold);color:var(--color-neutral-800)}.check-icon{font-size:var(--text-xl-size);color:var(--color-brand-600);flex-shrink:0;font-variation-settings:'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24}.autocomplete-menu::-webkit-scrollbar{width:6px}.autocomplete-menu::-webkit-scrollbar-track{background:var(--color-neutral-50);border-radius:var(--radius-xs)}.autocomplete-menu::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.autocomplete-menu::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.autocomplete-menu{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) var(--color-neutral-50)}@media (prefers-contrast: high){.autocomplete-menu{border-width:2px}.autocomplete-item.selected{outline:2px solid var(--color-brand-500);outline-offset:-2px}}@media (prefers-reduced-motion: reduce){.autocomplete-menu.animate-dropdown-enter,.autocomplete-menu.animate-dropdown-exit{animation:none}.autocomplete-item{transition:none}}";

const BhAutocompleteMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhItemClick = index.createEvent(this, "bhItemClick");
        this.bhItemHover = index.createEvent(this, "bhItemHover");
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
        return parts.map((part, index$1) => regex.test(part) ? (index.h("span", { key: index$1, class: "highlight" }, part)) : (index.h("span", { key: index$1 }, part)));
    };
    render() {
        if (!this.shouldRender || this.items.length === 0) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: this.getMenuClasses(), style: { maxHeight: `${this.maxHeight}px` } }, this.items.map((item, index$1) => (index.h("div", { key: item.id, class: this.getItemClasses(index$1, item), onMouseEnter: () => this.handleItemMouseEnter(index$1), role: "option", "aria-selected": index$1 === this.selectedIndex ? 'true' : 'false', "aria-disabled": item.disabled ? 'true' : 'false' }, index.h("div", { class: "item-content", onClick: () => this.handleItemClick(item), onMouseDown: this.handleMouseDown }, index.h("span", { class: "item-text", title: item.label }, this.getHighlightedText(item.label)), this.multiSelect && item.selected && (index.h("span", { class: "check-icon material-symbols-outlined" }, "check")))))))));
    }
    static get watchers() { return {
        "visible": ["watchVisible"],
        "menuItems": ["watchMenuItems"]
    }; }
};
BhAutocompleteMenu.style = bhAutocompleteMenuCss;

const bhTagCss = ":host{display:inline-block}.tag{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-sm);font-family:var(--font-inter);font-weight:var(--weight-medium);background-color:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-sm);white-space:nowrap;cursor:default;user-select:none}.tag-dismissible{cursor:pointer}.tag-sm{padding:var(--spacing-xxs) var(--spacing-md);font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.tag-sm.tag-dismissible{padding:var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-md)}.tag-md{padding:var(--spacing-xxs) var(--spacing-md);font-size:var(--text-md-size);line-height:var(--text-md-line)}.tag-md.tag-dismissible{padding:var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-md)}.tag-lg{padding:var(--spacing-xs) var(--spacing-lg);font-size:var(--text-md-size);line-height:var(--text-md-line)}.tag-lg.tag-dismissible{padding:var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) var(--spacing-lg)}.tag-content{display:flex;align-items:center;gap:var(--spacing-xs)}.tag-avatar .tag-content{gap:var(--spacing-sm)}.tag-sm.tag-avatar{padding-left:var(--spacing-xs)}.tag-sm.tag-avatar.tag-dismissible{padding-left:var(--spacing-xs)}.tag-md.tag-avatar{padding-left:var(--spacing-sm)}.tag-md.tag-avatar.tag-dismissible{padding-left:var(--spacing-sm)}.tag-lg.tag-avatar{padding-left:var(--spacing-sm)}.tag-lg.tag-avatar.tag-dismissible{padding-left:var(--spacing-sm)}.tag-label-wrapper{position:relative;display:inline-flex;align-items:center;max-width:100%}.tag-label{color:var(--color-neutral-700);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag-dismiss{display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:var(--spacing-xxs);border-radius:var(--radius-xs);transition:background-color 0.2s ease;width:var(--spacing-xl);height:var(--spacing-xl);flex-shrink:0}.tag-lg .tag-dismiss{padding:var(--spacing-xs);width:var(--spacing-2xl);height:var(--spacing-2xl)}.tag-dismiss:hover{background-color:var(--color-neutral-100)}.tag-dismiss:disabled{cursor:not-allowed;opacity:0.5}.tag-dismiss-icon{font-size:var(--text-sm-size);color:var(--color-neutral-500);line-height:1;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.tag-lg .tag-dismiss-icon{font-size:var(--text-md-size)}.tag-disabled{opacity:0.5;cursor:not-allowed}.tag:hover{border-color:var(--color-neutral-300)}.tag-disabled:hover{border-color:var(--color-neutral-200)}.animate-dismiss{animation:dismiss 0.2s ease-out forwards}@keyframes dismiss{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.8)}}";

const BhTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhDismiss = index.createEvent(this, "bhDismiss");
    }
    /** Tag variant */
    variant = 'text-only';
    /** Tag size */
    size = 'md';
    /** Tag label text */
    label = 'Label';
    /** Whether the tag is dismissible */
    dismissible = false;
    /** Whether the tag is disabled */
    disabled = false;
    /** Maximum width for the label (in pixels) */
    maxWidth = 120;
    /** Avatar image source (for avatar variant) */
    avatarSrc = '';
    /** Internal dismissing state */
    isDismissing = false;
    /** Emitted when dismiss button is clicked */
    bhDismiss;
    handleDismiss = (event) => {
        event.stopPropagation();
        if (this.dismissible && !this.disabled && !this.isDismissing) {
            this.isDismissing = true;
            // Simulate animation duration
            setTimeout(() => {
                this.bhDismiss.emit();
                this.isDismissing = false;
            }, 200);
        }
    };
    render() {
        const classes = {
            'tag': true,
            [`tag-${this.size}`]: true,
            [`tag-${this.variant}`]: true,
            'tag-dismissible': this.dismissible,
            'tag-disabled': this.disabled,
            'animate-dismiss': this.isDismissing,
        };
        const labelStyle = {
            maxWidth: `${this.maxWidth}px`,
        };
        return (index.h("span", { key: 'ee636fd94895063d5e59160a7d54f9ceb7125d3a', class: classes }, index.h("div", { key: 'fcc9614abd483f5c0ecdf53b6fe7f2a3f72bdf39', class: "tag-content" }, this.variant === 'avatar' && (index.h("bh-avatar", { key: 'cdd5f20519b9a89753aa9f1a7cd3c3f776030997', size: "xxs", type: this.avatarSrc ? 'image' : 'placeholder', imageSrc: this.avatarSrc })), index.h("span", { key: '5b07fd4263d63bec8023257dacb1a417c4cfe973', class: "tag-label-wrapper" }, index.h("span", { key: 'dd2f1578fcaceb6a229fbf5b10253ae966baebab', class: "tag-label", style: labelStyle }, this.label))), this.dismissible && (index.h("button", { key: '593d8758e41957cfedc0c62bddb91d77c283996b', class: "tag-dismiss", onClick: this.handleDismiss, disabled: this.disabled, type: "button", "aria-label": "Dismiss" }, index.h("span", { key: '74916c4bebdf31dbf2d7a1eff6d943b8a801496f', class: "material-symbols-outlined tag-dismiss-icon" }, "close")))));
    }
};
BhTag.style = bhTagCss;

exports.bh_autocomplete_menu = BhAutocompleteMenu;
exports.bh_tag = BhTag;
//# sourceMappingURL=bh-autocomplete-menu.bh-tag.entry.cjs.js.map
