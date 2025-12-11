import { h, Host } from "@stencil/core";
export class BhSidebar {
    /**
     * Type of logo to display
     */
    logoType = 'actabl';
    /**
     * Avatar image URL
     */
    avatarUrl;
    /**
     * Avatar initials (used if avatarUrl is not provided)
     */
    avatarInitials = 'DM';
    /**
     * Avatar name for dropdown
     */
    avatarName = 'Daniel Mobara';
    /**
     * Avatar email for dropdown
     */
    avatarEmail = 'daniel@solsticehospitality.com';
    /**
     * Main menu navigation items
     */
    menuItems = [
        { label: 'Dashboard', icon: 'dashboard', isActive: true },
        { label: 'Analytics', icon: 'analytics', isActive: false },
        { label: 'Reports', icon: 'assessment', isActive: false },
        { label: 'Calendar', icon: 'calendar_today', isActive: false },
        { label: 'Messages', icon: 'message', isActive: false },
        { label: 'Contacts', icon: 'contacts', isActive: false },
        { label: 'Files', icon: 'folder', isActive: false },
    ];
    /**
     * Footer navigation items
     */
    footerItems = [
        { label: 'Help', icon: 'help_outline' },
        { label: 'Settings', icon: 'settings' },
    ];
    /**
     * Whether sidebar is collapsed
     */
    collapsed = false;
    /**
     * Event emitted when a menu item is clicked
     */
    bhMenuItemClick;
    /**
     * Event emitted when search button is clicked
     */
    bhSearchClick;
    /**
     * Event emitted when avatar menu item is clicked
     */
    bhAvatarMenuClick;
    activeItem = '';
    componentWillLoad() {
        const activeMenuItem = this.menuItems.find(item => item.isActive);
        this.activeItem = activeMenuItem?.label || '';
    }
    handleNavItemClick = (label) => {
        this.activeItem = label;
        this.bhMenuItemClick.emit(label);
    };
    handleSearchClick = () => {
        this.bhSearchClick.emit();
    };
    handleAvatarMenuClick = (event) => {
        this.bhAvatarMenuClick.emit(event.detail);
    };
    render() {
        const sidebarClasses = {
            'sidebar-container': true,
            'sidebar-collapsed': this.collapsed,
        };
        const avatarMenuItems = [
            { id: '1', label: 'View profile', icon: 'person', shortcut: '⌘P' },
            { id: '2', label: 'Account settings', icon: 'settings', shortcut: '⌘,' },
            { id: '3', label: 'Notifications', icon: 'notifications', shortcut: '⌘N' },
            { id: '4', label: 'Privacy & Security', icon: 'shield', shortcut: '⌘S' },
            { id: '5', divider: true },
            { id: '6', label: 'Billing', icon: 'credit_card', shortcut: '⌘B' },
            { id: '7', label: 'Team management', icon: 'group', shortcut: '⌘T' },
            { id: '8', label: 'Integrations', icon: 'extension', shortcut: '⌘I' },
            { id: '9', divider: true },
            { id: '10', label: 'Help center', icon: 'help', shortcut: '⌘H' },
            { id: '11', label: 'Keyboard shortcuts', icon: 'keyboard', shortcut: '?' },
            { id: '12', divider: true },
            { id: '13', label: 'Sign out', icon: 'logout', shortcut: '⇧⌘Q' },
        ];
        return (h(Host, { key: '14f483d75df70a5bfbda0731fe7d82aaf20d551b' }, h("div", { key: '8ea1b342688f955b401a77a808561b76164f0d0e', class: sidebarClasses }, h("div", { key: '931c6ba45580b069dbf7e96119e3ee914d05ce78', class: "navigation" }, h("div", { key: '9b39938bfe77ff84a68830de2bd8392ab3a3c1b2', class: "gradient-bar" }, h("div", { key: 'b196a1b459740323a927b1a5fee2ab65f596ed24', class: "detail-bar" })), h("div", { key: '00af6a0d4e4747b1026fa7d19b6c7a6a96457207', class: "sidebar-content" }, h("bh-logo-box", { key: '4032fc97e8965a77027ec269b87de5d2585be348', logoType: this.logoType }), h("div", { key: 'add8f2396ec79e7b7765cca6a42519c867f30ee7', class: "navigation-section" }, h("div", { key: '5c8116a117a7b406bb52d0cc0da2d51d472c4431', class: "search-container" }, h("bh-button-icon", { key: '024ce4ab04cf6404a05a7cae07f9f1a832a173e8', hierarchy: "secondary", size: "sm", iconName: "search", onClick: this.handleSearchClick })), h("div", { key: 'e3d90a44f3ab91348cd0b516548588b1fae2aa92', class: "nav-items" }, this.menuItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: this.activeItem === item.label, onBhClick: () => this.handleNavItemClick(item.label) }))))), h("div", { key: '447d84326d1f56d53e75190ed8d85c428769c5ce', class: "sidebar-footer" }, h("div", { key: '1ef5c3d1fbe579a7da66cba2ea436c7e9639ff95', class: "footer-navigation" }, this.footerItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: false, onBhClick: () => this.handleNavItemClick(item.label) })))), h("bh-dropdown", { key: 'aef26cfc2faa17043588054c36bcb2f8a9008cc1', variant: "avatar", size: "md", avatarSize: "md", avatarSrc: this.avatarUrl, avatarName: this.avatarName, avatarEmail: this.avatarEmail, menuItems: avatarMenuItems, showIcons: true, onBhItemClick: this.handleAvatarMenuClick })))))));
    }
    static get is() { return "bh-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-sidebar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-sidebar.css"]
        };
    }
    static get properties() {
        return {
            "logoType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LogoType",
                    "resolved": "\"actabl\" | \"al\" | \"he\" | \"ps\" | \"tr\"",
                    "references": {
                        "LogoType": {
                            "location": "import",
                            "path": "../bh-logo-box/bh-logo-box",
                            "id": "src/components/bh-logo-box/bh-logo-box.tsx::LogoType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of logo to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo-type",
                "defaultValue": "'actabl'"
            },
            "avatarUrl": {
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
                    "text": "Avatar image URL"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-url"
            },
            "avatarInitials": {
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
                    "text": "Avatar initials (used if avatarUrl is not provided)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-initials",
                "defaultValue": "'DM'"
            },
            "avatarName": {
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
                    "text": "Avatar name for dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-name",
                "defaultValue": "'Daniel Mobara'"
            },
            "avatarEmail": {
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
                    "text": "Avatar email for dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-email",
                "defaultValue": "'daniel@solsticehospitality.com'"
            },
            "menuItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MenuItem[]",
                    "resolved": "MenuItem[]",
                    "references": {
                        "MenuItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-sidebar/bh-sidebar.tsx",
                            "id": "src/components/bh-sidebar/bh-sidebar.tsx::MenuItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Main menu navigation items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    { label: 'Dashboard', icon: 'dashboard', isActive: true },\n    { label: 'Analytics', icon: 'analytics', isActive: false },\n    { label: 'Reports', icon: 'assessment', isActive: false },\n    { label: 'Calendar', icon: 'calendar_today', isActive: false },\n    { label: 'Messages', icon: 'message', isActive: false },\n    { label: 'Contacts', icon: 'contacts', isActive: false },\n    { label: 'Files', icon: 'folder', isActive: false },\n  ]"
            },
            "footerItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FooterItem[]",
                    "resolved": "FooterItem[]",
                    "references": {
                        "FooterItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-sidebar/bh-sidebar.tsx",
                            "id": "src/components/bh-sidebar/bh-sidebar.tsx::FooterItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Footer navigation items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    { label: 'Help', icon: 'help_outline' },\n    { label: 'Settings', icon: 'settings' },\n  ]"
            },
            "collapsed": {
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
                    "text": "Whether sidebar is collapsed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsed",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "activeItem": {}
        };
    }
    static get events() {
        return [{
                "method": "bhMenuItemClick",
                "name": "bhMenuItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a menu item is clicked"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "bhSearchClick",
                "name": "bhSearchClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when search button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhAvatarMenuClick",
                "name": "bhAvatarMenuClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when avatar menu item is clicked"
                },
                "complexType": {
                    "original": "DropdownMenuItem",
                    "resolved": "DropdownMenuItem",
                    "references": {
                        "DropdownMenuItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-sidebar/bh-sidebar.tsx",
                            "id": "src/components/bh-sidebar/bh-sidebar.tsx::DropdownMenuItem"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=bh-sidebar.js.map
