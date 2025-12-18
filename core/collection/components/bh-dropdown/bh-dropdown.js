import { h, } from "@stencil/core";
import { computePosition, flip, shift, offset, autoUpdate, } from "@floating-ui/dom";
export class BhDropdown {
    el;
    triggerRef;
    menuRef;
    cleanupAutoUpdate;
    /**
     * Size of the dropdown trigger
     */
    size = 'md';
    /**
     * State of the dropdown
     */
    state = 'default';
    /**
     * Visual variant of the dropdown trigger
     */
    variant = 'outlined';
    /**
     * Label for the dropdown button
     */
    label = 'Options';
    /**
     * Icon name for icon-only variants
     */
    iconName = 'more_vert';
    /**
     * Whether the dropdown is disabled
     */
    disabled = false;
    /**
     * Menu items (JSON string or array)
     */
    menuItems = [];
    /**
     * Header configuration (JSON string or object)
     */
    header;
    /**
     * Avatar image source for avatar variant
     */
    avatarSrc = '';
    /**
     * Avatar alt text
     */
    avatarAlt = 'Avatar';
    /**
     * Avatar size for avatar variant
     */
    avatarSize = 'md';
    /**
     * Avatar name for header
     */
    avatarName;
    /**
     * Avatar email for header
     */
    avatarEmail;
    /**
     * Whether to show icons in menu items
     */
    showIcons = true;
    isOpen = false;
    menuPosition = { x: 0, y: 0 };
    /**
     * Event emitted when a menu item is clicked
     */
    bhItemClick;
    handleClickOutside(event) {
        const path = event.composedPath();
        const clickedInside = path.includes(this.el);
        if (this.isOpen && !clickedInside) {
            this.isOpen = false;
        }
    }
    handleOpenChange(newValue) {
        if (newValue) {
            this.setupFloatingUI();
        }
        else {
            this.cleanupFloating();
        }
    }
    disconnectedCallback() {
        this.cleanupFloating();
    }
    setupFloatingUI() {
        if (!this.triggerRef || !this.menuRef)
            return;
        const placement = this.variant === 'avatar' ? 'right-end' : 'bottom-end';
        const updatePosition = async () => {
            if (!this.triggerRef || !this.menuRef)
                return;
            const { x, y } = await computePosition(this.triggerRef, this.menuRef, {
                placement,
                middleware: [
                    offset(8),
                    flip({ fallbackPlacements: ['top-end', 'bottom-start', 'top-start'] }),
                    shift({ padding: 8 }),
                ],
            });
            this.menuPosition = { x, y };
        };
        updatePosition();
        this.cleanupAutoUpdate = autoUpdate(this.triggerRef, this.menuRef, updatePosition);
    }
    cleanupFloating() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
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
    get parsedHeader() {
        if (this.variant === 'avatar') {
            return {
                avatarGroup: true,
                avatarSrc: this.avatarSrc,
                name: this.avatarName,
                email: this.avatarEmail,
            };
        }
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
    toggleDropdown = () => {
        if (this.disabled)
            return;
        this.isOpen = !this.isOpen;
    };
    handleMenuItemClick = (event) => {
        const item = event.detail;
        if (!item.disabled) {
            this.bhItemClick.emit(item);
            this.isOpen = false;
        }
    };
    get isIconOnly() {
        return (this.variant === 'icon-only-outlined' ||
            this.variant === 'icon-only-ghost');
    }
    get showAvatar() {
        return this.variant === 'avatar';
    }
    get buttonHierarchy() {
        return this.variant === 'ghost' || this.variant === 'icon-only-ghost'
            ? 'tertiary'
            : 'secondary';
    }
    render() {
        const containerClasses = {
            'dropdown-container': true,
            'dropdown-open': this.isOpen,
            'dropdown-avatar-variant': this.variant === 'avatar',
        };
        const avatarClasses = {
            'dropdown-avatar': true,
            'dropdown-avatar-focus': this.isOpen,
            'dropdown-avatar-disabled': this.disabled,
        };
        const menuStyle = {
            position: 'fixed',
            left: `${this.menuPosition.x}px`,
            top: `${this.menuPosition.y}px`,
            zIndex: '9999',
        };
        return (h("div", { key: '72b74114a40b815346fbac4bc318c1a8c521c3bb', class: containerClasses }, !this.showAvatar && (h("div", { key: 'b7c5750fd9541b41ef7d44f080f5d54c443f36b5', ref: (el) => (this.triggerRef = el) }, h("bh-button", { key: 'bb1261290773322b49f84247a11f154f5805d79f', hierarchy: this.buttonHierarchy, icon: this.isIconOnly ? 'only' : 'trailing', size: this.size, label: this.isIconOnly ? '' : this.label, iconName: this.isIconOnly ? this.iconName : 'expand_more', disabled: this.disabled, onClick: this.toggleDropdown }))), this.showAvatar && (h("div", { key: '0a160fb08b45336d5f7a6bd34869f46c5e3e60a4', ref: (el) => (this.triggerRef = el), class: avatarClasses, onClick: (e) => {
                if (!this.disabled) {
                    e.stopPropagation();
                    this.toggleDropdown();
                }
            }, role: "button", tabindex: this.disabled ? -1 : 0, onKeyDown: (e) => {
                if (!this.disabled && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    this.toggleDropdown();
                }
            } }, h("bh-avatar", { key: 'cffa687bee8d8e8c67fe301aa69aacb422fc80a6', type: "image", size: this.avatarSize, imageSrc: this.avatarSrc, alt: this.avatarAlt }))), h("bh-dropdown-menu", { key: 'a382a01f558fbd84cffa1dd65a191427ad027509', ref: (el) => (this.menuRef = el), style: this.isOpen ? menuStyle : { display: 'none' }, visible: this.isOpen, showIcons: this.showIcons, menuItems: JSON.stringify(this.parsedMenuItems), header: this.parsedHeader ? JSON.stringify(this.parsedHeader) : undefined, onBhItemClick: this.handleMenuItemClick })));
    }
    static get is() { return "bh-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-dropdown.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "DropdownSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-dropdown/bh-dropdown.tsx",
                            "id": "src/components/bh-dropdown/bh-dropdown.tsx::DropdownSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the dropdown trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownState",
                    "resolved": "\"default\" | \"disabled\" | \"focus\"",
                    "references": {
                        "DropdownState": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-dropdown/bh-dropdown.tsx",
                            "id": "src/components/bh-dropdown/bh-dropdown.tsx::DropdownState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "State of the dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "state",
                "defaultValue": "'default'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownVariant",
                    "resolved": "\"avatar\" | \"ghost\" | \"icon-only-ghost\" | \"icon-only-outlined\" | \"outlined\"",
                    "references": {
                        "DropdownVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-dropdown/bh-dropdown.tsx",
                            "id": "src/components/bh-dropdown/bh-dropdown.tsx::DropdownVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual variant of the dropdown trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'outlined'"
            },
            "label": {
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
                    "text": "Label for the dropdown button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Options'"
            },
            "iconName": {
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
                    "text": "Icon name for icon-only variants"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-name",
                "defaultValue": "'more_vert'"
            },
            "disabled": {
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
                    "text": "Whether the dropdown is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "menuItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownMenuItem[] | string",
                    "resolved": "DropdownMenuItem[] | string",
                    "references": {
                        "DropdownMenuItem": {
                            "location": "import",
                            "path": "../bh-dropdown-menu/bh-dropdown-menu",
                            "id": "src/components/bh-dropdown-menu/bh-dropdown-menu.tsx::DropdownMenuItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Menu items (JSON string or array)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "menu-items",
                "defaultValue": "[]"
            },
            "header": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownMenuHeader | string",
                    "resolved": "DropdownMenuHeader | string | undefined",
                    "references": {
                        "DropdownMenuHeader": {
                            "location": "import",
                            "path": "../bh-dropdown-menu/bh-dropdown-menu",
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
            "avatarSrc": {
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
                    "text": "Avatar image source for avatar variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-src",
                "defaultValue": "''"
            },
            "avatarAlt": {
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
                    "text": "Avatar alt text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-alt",
                "defaultValue": "'Avatar'"
            },
            "avatarSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Avatar size for avatar variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-size",
                "defaultValue": "'md'"
            },
            "avatarName": {
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
                    "text": "Avatar name for header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-name"
            },
            "avatarEmail": {
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
                    "text": "Avatar email for header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-email"
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
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "menuPosition": {}
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
                            "location": "import",
                            "path": "../bh-dropdown-menu/bh-dropdown-menu",
                            "id": "src/components/bh-dropdown-menu/bh-dropdown-menu.tsx::DropdownMenuItem"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClickOutside",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-dropdown.js.map
