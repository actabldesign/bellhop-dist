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
        return (h(Host, { key: '8ea6a230d0b50bac6868a43f2f4c3b4cb89f147d' }, h("div", { key: '152c63b3a7a61ea13ca78b05ef3077b135cc4638', class: sidebarClasses }, h("div", { key: '13fdf8adc8c29bf947a43ab05b4cbd67bab9bc82', class: "navigation" }, h("div", { key: 'fd4960f7b232bdfff7bb80d98f718d5bdeddd5a3', class: "gradient-bar" }, h("div", { key: '5304c3a6b81a9941491105233770977c64e06586', class: "detail-bar" })), h("div", { key: '000cad8051add1dbabfe2454579c22ffa371ebc0', class: "sidebar-content" }, h("bh-logo-box", { key: 'ca59b066c4d1053824443a8dd63702d285a66b7c', logoType: this.logoType }), h("div", { key: 'a8b8fc37101b5a8ad83c309dbbf8dbd45b9227f9', class: "navigation-section" }, h("div", { key: '10dda65730b5c23d2a13f0a27636192da1c9b21a', class: "search-container" }, h("bh-button-icon", { key: '52379a2f1fbf04ff494e7cff1b33aca99ce809fb', hierarchy: "secondary", size: "sm", iconName: "search", onClick: this.handleSearchClick })), h("div", { key: '85b26cfcd1b91e4d96be801e654acba45f3649a5', class: "nav-items" }, this.menuItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: this.activeItem === item.label, onBhClick: () => this.handleNavItemClick(item.label) }))))), h("div", { key: '82647befc09ce326032e6b034189180e826fb7f6', class: "sidebar-footer" }, h("div", { key: '0d8a12f59003ff31b97430ccc017fdd9bfa6636f', class: "footer-navigation" }, this.footerItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: false, onBhClick: () => this.handleNavItemClick(item.label) })))), h("bh-dropdown", { key: '4016dd4b427aba6b25d8f1d7e04c90236a97d28a', variant: "avatar", size: "md", avatarSize: "md", avatarSrc: this.avatarUrl, avatarName: this.avatarName, avatarEmail: this.avatarEmail, menuItems: avatarMenuItems, showIcons: true, onBhItemClick: this.handleAvatarMenuClick })))))));
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
