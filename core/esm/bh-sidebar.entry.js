import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhSidebarCss = ".sidebar-container{width:fit-content;height:100vh;background-color:var(--color-white);position:relative;display:flex}.navigation{background-color:var(--color-white);display:flex;height:100%;align-items:flex-start;justify-content:flex-start;position:relative;border-right:1px solid var(--color-neutral-200);z-index:100}.gradient-bar{position:relative;width:var(--spacing-xs);height:100%;flex-shrink:0}.detail-bar{position:absolute;background:linear-gradient(\n    180deg,\n    var(--color-accent-300) 0%,\n    var(--color-brand-400) 51%,\n    var(--color-brand-800) 100%\n  );inset:0}.sidebar-content{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--spacing-2xl);height:100%;align-items:center;justify-content:flex-start;padding:var(--spacing-md) var(--spacing-md) var(--spacing-lg)\n    var(--spacing-md);position:relative;flex-shrink:0;width:60px}.navigation-section{flex:1 1 0%;display:flex;flex-direction:column;gap:var(--spacing-xl);flex-grow:1;align-items:center;justify-content:flex-start;min-height:0;position:relative;flex-shrink:0;width:100%;overflow-y:auto;overflow-x:hidden}.search-container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.nav-items{display:flex;flex-direction:column;gap:var(--spacing-xs);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.sidebar-footer{display:flex;flex-direction:column;gap:var(--spacing-lg);align-items:center;justify-content:end;position:relative;flex-shrink:0;width:100%}.footer-navigation{display:flex;flex-direction:column;gap:var(--spacing-xs);align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.sidebar-collapsed .sidebar-content{width:60px}.sidebar-collapsed .nav-item-label{display:none}.navigation-section::-webkit-scrollbar{width:4px}.navigation-section::-webkit-scrollbar-track{background:transparent}.navigation-section::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.navigation-section::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.navigation-section{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) transparent}.sidebar-expanded .sidebar-content{width:240px}.sidebar-expanded .nav-items{align-items:flex-start}.sidebar-expanded .nav-item{width:100%;flex-direction:row;justify-content:flex-start;gap:var(--spacing-md)}.sidebar-expanded .nav-item-label{display:block;text-align:left;font-size:var(--text-sm-size);height:auto;line-height:var(--text-sm-line)}";

const BhSidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhMenuItemClick = createEvent(this, "bhMenuItemClick");
        this.bhSearchClick = createEvent(this, "bhSearchClick");
        this.bhAvatarMenuClick = createEvent(this, "bhAvatarMenuClick");
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
        return (h(Host, { key: '8ea6a230d0b50bac6868a43f2f4c3b4cb89f147d' }, h("div", { key: '152c63b3a7a61ea13ca78b05ef3077b135cc4638', class: sidebarClasses }, h("div", { key: '13fdf8adc8c29bf947a43ab05b4cbd67bab9bc82', class: "navigation" }, h("div", { key: 'fd4960f7b232bdfff7bb80d98f718d5bdeddd5a3', class: "gradient-bar" }, h("div", { key: '5304c3a6b81a9941491105233770977c64e06586', class: "detail-bar" })), h("div", { key: '000cad8051add1dbabfe2454579c22ffa371ebc0', class: "sidebar-content" }, h("bh-logo-box", { key: 'ca59b066c4d1053824443a8dd63702d285a66b7c', logoType: this.logoType }), h("div", { key: 'a8b8fc37101b5a8ad83c309dbbf8dbd45b9227f9', class: "navigation-section" }, h("div", { key: '10dda65730b5c23d2a13f0a27636192da1c9b21a', class: "search-container" }, h("bh-button-icon", { key: '52379a2f1fbf04ff494e7cff1b33aca99ce809fb', hierarchy: "secondary", size: "sm", iconName: "search", onClick: this.handleSearchClick })), h("div", { key: '85b26cfcd1b91e4d96be801e654acba45f3649a5', class: "nav-items" }, this.menuItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: this.activeItem === item.label, onBhClick: () => this.handleNavItemClick(item.label) }))))), h("div", { key: '82647befc09ce326032e6b034189180e826fb7f6', class: "sidebar-footer" }, h("div", { key: '0d8a12f59003ff31b97430ccc017fdd9bfa6636f', class: "footer-navigation" }, this.footerItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: false, onBhClick: () => this.handleNavItemClick(item.label) })))), h("bh-dropdown", { key: '4016dd4b427aba6b25d8f1d7e04c90236a97d28a', variant: "avatar", size: "md", avatarSize: "md", avatarSrc: this.avatarUrl, avatarName: this.avatarName, avatarEmail: this.avatarEmail, menuItems: avatarMenuItems, showIcons: true, onBhItemClick: this.handleAvatarMenuClick })))))));
    }
};
BhSidebar.style = bhSidebarCss;

export { BhSidebar as bh_sidebar };
//# sourceMappingURL=bh-sidebar.entry.js.map
