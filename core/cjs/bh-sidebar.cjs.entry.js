'use strict';

var index = require('./index-tZqSQc8E.js');

const bhSidebarCss = ".sidebar-container{width:fit-content;height:100vh;background-color:var(--color-white);position:relative;display:flex}.navigation{background-color:var(--color-white);display:flex;height:100%;align-items:flex-start;justify-content:flex-start;position:relative;border-right:1px solid var(--color-neutral-200);z-index:100}.gradient-bar{position:relative;width:var(--spacing-xs);height:100%;flex-shrink:0}.detail-bar{position:absolute;background:linear-gradient(\n    180deg,\n    var(--color-accent-300) 0%,\n    var(--color-brand-400) 51%,\n    var(--color-brand-800) 100%\n  );inset:0}.sidebar-content{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--spacing-2xl);height:100%;align-items:center;justify-content:flex-start;padding:var(--spacing-md) var(--spacing-md) var(--spacing-lg)\n    var(--spacing-md);position:relative;flex-shrink:0;width:60px}.navigation-section{flex:1 1 0%;display:flex;flex-direction:column;gap:var(--spacing-xl);flex-grow:1;align-items:center;justify-content:flex-start;min-height:0;position:relative;flex-shrink:0;width:100%;overflow-y:auto;overflow-x:hidden}.search-container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.nav-items{display:flex;flex-direction:column;gap:var(--spacing-xs);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.sidebar-footer{display:flex;flex-direction:column;gap:var(--spacing-lg);align-items:center;justify-content:end;position:relative;flex-shrink:0;width:100%}.footer-navigation{display:flex;flex-direction:column;gap:var(--spacing-xs);align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.sidebar-collapsed .sidebar-content{width:60px}.sidebar-collapsed .nav-item-label{display:none}.navigation-section::-webkit-scrollbar{width:4px}.navigation-section::-webkit-scrollbar-track{background:transparent}.navigation-section::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.navigation-section::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.navigation-section{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) transparent}.sidebar-expanded .sidebar-content{width:240px}.sidebar-expanded .nav-items{align-items:flex-start}.sidebar-expanded .nav-item{width:100%;flex-direction:row;justify-content:flex-start;gap:var(--spacing-md)}.sidebar-expanded .nav-item-label{display:block;text-align:left;font-size:var(--text-sm-size);height:auto;line-height:var(--text-sm-line)}";

const BhSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhMenuItemClick = index.createEvent(this, "bhMenuItemClick");
        this.bhSearchClick = index.createEvent(this, "bhSearchClick");
        this.bhAvatarMenuClick = index.createEvent(this, "bhAvatarMenuClick");
    }
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
        return (index.h(index.Host, { key: '14f483d75df70a5bfbda0731fe7d82aaf20d551b' }, index.h("div", { key: '8ea1b342688f955b401a77a808561b76164f0d0e', class: sidebarClasses }, index.h("div", { key: '931c6ba45580b069dbf7e96119e3ee914d05ce78', class: "navigation" }, index.h("div", { key: '9b39938bfe77ff84a68830de2bd8392ab3a3c1b2', class: "gradient-bar" }, index.h("div", { key: 'b196a1b459740323a927b1a5fee2ab65f596ed24', class: "detail-bar" })), index.h("div", { key: '00af6a0d4e4747b1026fa7d19b6c7a6a96457207', class: "sidebar-content" }, index.h("bh-logo-box", { key: '4032fc97e8965a77027ec269b87de5d2585be348', logoType: this.logoType }), index.h("div", { key: 'add8f2396ec79e7b7765cca6a42519c867f30ee7', class: "navigation-section" }, index.h("div", { key: '5c8116a117a7b406bb52d0cc0da2d51d472c4431', class: "search-container" }, index.h("bh-button-icon", { key: '024ce4ab04cf6404a05a7cae07f9f1a832a173e8', hierarchy: "secondary", size: "sm", iconName: "search", onClick: this.handleSearchClick })), index.h("div", { key: 'e3d90a44f3ab91348cd0b516548588b1fae2aa92', class: "nav-items" }, this.menuItems.map((item) => (index.h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: this.activeItem === item.label, onBhClick: () => this.handleNavItemClick(item.label) }))))), index.h("div", { key: '447d84326d1f56d53e75190ed8d85c428769c5ce', class: "sidebar-footer" }, index.h("div", { key: '1ef5c3d1fbe579a7da66cba2ea436c7e9639ff95', class: "footer-navigation" }, this.footerItems.map((item) => (index.h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: false, onBhClick: () => this.handleNavItemClick(item.label) })))), index.h("bh-dropdown", { key: 'aef26cfc2faa17043588054c36bcb2f8a9008cc1', variant: "avatar", size: "md", avatarSize: "md", avatarSrc: this.avatarUrl, avatarName: this.avatarName, avatarEmail: this.avatarEmail, menuItems: avatarMenuItems, showIcons: true, onBhItemClick: this.handleAvatarMenuClick })))))));
    }
};
BhSidebar.style = bhSidebarCss;

exports.bh_sidebar = BhSidebar;
//# sourceMappingURL=bh-sidebar.entry.cjs.js.map
