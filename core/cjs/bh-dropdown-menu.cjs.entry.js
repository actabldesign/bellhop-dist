'use strict';

var index = require('./index-DQwSUT6k.js');

const bhDropdownMenuCss = ":host{display:block}.dropdown-menu{width:240px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0px 32px 64px -12px rgba(64, 73, 104, 0.14),\n    0px 0px 1px 1px rgba(64, 73, 104, 0.1);overflow:hidden;flex-shrink:0;position:relative;box-sizing:border-box}.animate-dropdown-enter{animation:dropdownEnter 0.15s ease-out forwards}.animate-dropdown-exit{animation:dropdownExit 0.15s ease-in forwards}@keyframes dropdownEnter{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes dropdownExit{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}.dropdown-header{padding:var(--spacing-lg) var(--spacing-xl);border-bottom:1px solid var(--color-neutral-200)}.dropdown-header-avatar{padding:var(--spacing-lg) var(--spacing-xl)}.avatar-group{display:flex;align-items:center;gap:var(--spacing-lg);width:100%}.avatar-text{display:flex;flex-direction:column;flex:1;min-width:0}.avatar-name{font-family:var(--font-inter);font-weight:var(--weight-semibold);font-size:var(--text-sm-size);text-align:left;line-height:1.43;color:var(--color-neutral-800);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.avatar-email{font-family:var(--font-inter);font-weight:var(--weight-regular);font-size:var(--text-sm-size);line-height:1.43;color:var(--color-neutral-600);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.header-title{font-family:var(--font-inter);font-weight:var(--weight-semibold);font-size:var(--text-sm-size);line-height:1.43;color:var(--color-neutral-800);margin:0}.menu-items{padding:var(--spacing-xs) 0}.dropdown-item{padding:var(--spacing-none) var(--spacing-sm);cursor:pointer}.dropdown-item-disabled{opacity:0.5;cursor:not-allowed}.item-content{display:flex;align-items:center;gap:var(--spacing-lg);padding:var(--spacing-md) var(--spacing-md);border-radius:var(--radius-sm);transition:background-color 0.15s ease}.dropdown-item:hover:not(.dropdown-item-disabled) .item-content{background:var(--color-neutral-100)}.item-main{display:flex;align-items:center;gap:var(--spacing-md);flex:1;min-width:0}.item-icon{font-size:var(--icon-size-md, 20px);color:var(--color-neutral-600);flex-shrink:0;display:flex;align-items:center;justify-content:center}.item-text{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.item-shortcut{font-family:var(--font-inter);font-weight:var(--weight-regular);font-size:var(--text-xs-size);line-height:1.5;color:var(--color-neutral-500);flex-shrink:0}.menu-divider{height:1px;background:var(--color-neutral-200);margin:var(--spacing-xs) 0}.dropdown-menu-scrollable .menu-items{max-height:280px;overflow-y:auto;overflow-x:hidden}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar{width:6px}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-track{background:var(--color-neutral-50);border-radius:var(--radius-xs)}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.dropdown-menu-scrollable .menu-items{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) var(--color-neutral-50)}";

const BhDropdownMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhItemClick = index.createEvent(this, "bhItemClick");
    }
    /**
     * Header configuration (JSON string or object)
     */
    header;
    /**
     * Menu items array (JSON string or array)
     */
    menuItems = [];
    /**
     * Whether the menu is visible
     */
    visible = true;
    /**
     * Whether to show icons in menu items
     */
    showIcons = true;
    /**
     * Whether the menu should be scrollable
     */
    scrollable = false;
    isClosing = false;
    shouldRender = true;
    /**
     * Event emitted when a menu item is clicked
     */
    bhItemClick;
    get parsedHeader() {
        if (!this.header)
            return undefined;
        if (typeof this.header === 'string') {
            try {
                return JSON.parse(this.header);
            }
            catch {
                return undefined;
            }
        }
        return this.header;
    }
    get parsedMenuItems() {
        if (typeof this.menuItems === 'string') {
            try {
                return JSON.parse(this.menuItems);
            }
            catch {
                return [];
            }
        }
        return this.menuItems || [];
    }
    watchVisible(newValue) {
        if (newValue) {
            this.shouldRender = true;
            this.isClosing = false;
        }
        else {
            this.isClosing = true;
            setTimeout(() => {
                this.shouldRender = false;
                this.isClosing = false;
            }, 150);
        }
    }
    componentWillLoad() {
        this.shouldRender = this.visible;
    }
    handleItemClick(item) {
        if (!item.disabled && !item.divider) {
            this.bhItemClick.emit(item);
        }
    }
    getMenuItemClasses(item) {
        return {
            'dropdown-item': true,
            'dropdown-item-disabled': !!item.disabled,
        };
    }
    render() {
        if (!this.visible) {
            return null;
        }
        const header = this.parsedHeader;
        const items = this.parsedMenuItems;
        const dropdownClasses = {
            'dropdown-menu': true,
            'dropdown-menu-scrollable': this.scrollable,
            'animate-dropdown-enter': true,
            'animate-dropdown-exit': false,
        };
        const headerClasses = {
            'dropdown-header': true,
            'dropdown-header-avatar': !!header?.avatarGroup,
        };
        return (index.h("div", { class: dropdownClasses }, header && (index.h("div", { class: headerClasses }, header.avatarGroup && (index.h("div", { class: "avatar-group" }, index.h("bh-avatar", { size: "md", type: "image", status: "online", imageSrc: header.avatarSrc || '', alt: header.name || 'Avatar' }), index.h("div", { class: "avatar-text" }, index.h("div", { class: "avatar-name" }, header.name), index.h("div", { class: "avatar-email" }, header.email)))), !header.avatarGroup && header.title && (index.h("div", { class: "header-title" }, header.title)))), index.h("div", { class: "menu-items" }, items.map((item) => (index.h("div", { key: item.id }, item.divider && index.h("div", { class: "menu-divider" }), !item.divider && (index.h("div", { class: this.getMenuItemClasses(item), onClick: () => this.handleItemClick(item) }, index.h("div", { class: "item-content" }, index.h("div", { class: "item-main" }, item.icon && this.showIcons && (index.h("span", { class: "material-symbols-outlined item-icon" }, item.icon)), index.h("span", { class: "item-text", title: item.label }, item.label)), item.shortcut && (index.h("span", { class: "item-shortcut" }, item.shortcut)))))))))));
    }
    static get watchers() { return {
        "visible": ["watchVisible"]
    }; }
};
BhDropdownMenu.style = bhDropdownMenuCss;

exports.bh_dropdown_menu = BhDropdownMenu;
//# sourceMappingURL=bh-dropdown-menu.entry.cjs.js.map
