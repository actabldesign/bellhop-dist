import { h } from "@stencil/core";
export class BhDropdownMenu {
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
        return (h("div", { class: dropdownClasses }, header && (h("div", { class: headerClasses }, header.avatarGroup && (h("div", { class: "avatar-group" }, h("bh-avatar", { size: "md", type: "image", status: "online", imageSrc: header.avatarSrc || '', alt: header.name || 'Avatar' }), h("div", { class: "avatar-text" }, h("div", { class: "avatar-name" }, header.name), h("div", { class: "avatar-email" }, header.email)))), !header.avatarGroup && header.title && (h("div", { class: "header-title" }, header.title)))), h("div", { class: "menu-items" }, items.map((item) => (h("div", { key: item.id }, item.divider && h("div", { class: "menu-divider" }), !item.divider && (h("div", { class: this.getMenuItemClasses(item), onClick: () => this.handleItemClick(item) }, h("div", { class: "item-content" }, h("div", { class: "item-main" }, item.icon && this.showIcons && (h("span", { class: "material-symbols-outlined item-icon" }, item.icon)), h("span", { class: "item-text", title: item.label }, item.label)), item.shortcut && (h("span", { class: "item-shortcut" }, item.shortcut)))))))))));
    }
    static get is() { return "bh-dropdown-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-dropdown-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-dropdown-menu.css"]
        };
    }
    static get properties() {
        return {
            "header": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownMenuHeader | string",
                    "resolved": "DropdownMenuHeader | string | undefined",
                    "references": {
                        "DropdownMenuHeader": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-dropdown-menu/bh-dropdown-menu.tsx",
                            "id": "src/components/bh-dropdown-menu/bh-dropdown-menu.tsx::DropdownMenuHeader"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Header configuration (JSON string or object)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header"
            },
            "menuItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownMenuItem[] | string",
                    "resolved": "DropdownMenuItem[] | string",
                    "references": {
                        "DropdownMenuItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-dropdown-menu/bh-dropdown-menu.tsx",
                            "id": "src/components/bh-dropdown-menu/bh-dropdown-menu.tsx::DropdownMenuItem"
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
                "attribute": "menu-items",
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
                "defaultValue": "true"
            },
            "showIcons": {
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
                    "text": "Whether to show icons in menu items"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-icons",
                "defaultValue": "true"
            },
            "scrollable": {
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
                    "text": "Whether the menu should be scrollable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "scrollable",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isClosing": {},
            "shouldRender": {}
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
                    "text": "Event emitted when a menu item is clicked"
                },
                "complexType": {
                    "original": "DropdownMenuItem",
                    "resolved": "DropdownMenuItem",
                    "references": {
                        "DropdownMenuItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-dropdown-menu/bh-dropdown-menu.tsx",
                            "id": "src/components/bh-dropdown-menu/bh-dropdown-menu.tsx::DropdownMenuItem"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "visible",
                "methodName": "watchVisible"
            }];
    }
}
//# sourceMappingURL=bh-dropdown-menu.js.map
