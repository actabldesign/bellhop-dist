import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$a } from './p-YJm8-pxX.js';
import { d as defineCustomElement$9 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$8 } from './p-D3OkBDd3.js';
import { d as defineCustomElement$7 } from './p-DVhHZCku.js';
import { d as defineCustomElement$6 } from './p-ghuDbZwh.js';
import { d as defineCustomElement$5 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$4 } from './p-DfXkVfrE.js';
import { d as defineCustomElement$3 } from './p-D_DKZMpk.js';
import { d as defineCustomElement$2 } from './p-HEcFS8Jc.js';

const bhSidebarCss = ".sidebar-container{width:fit-content;height:100vh;background-color:var(--color-white);position:relative;display:flex}.navigation{background-color:var(--color-white);display:flex;height:100%;align-items:flex-start;justify-content:flex-start;position:relative;border-right:1px solid var(--color-neutral-200);z-index:100}.gradient-bar{position:relative;width:var(--spacing-xs);height:100%;flex-shrink:0}.detail-bar{position:absolute;background:linear-gradient(\n    180deg,\n    var(--color-accent-300) 0%,\n    var(--color-brand-400) 51%,\n    var(--color-brand-800) 100%\n  );inset:0}.sidebar-content{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--spacing-2xl);height:100%;align-items:center;justify-content:flex-start;padding:var(--spacing-md) var(--spacing-md) var(--spacing-lg)\n    var(--spacing-md);position:relative;flex-shrink:0;width:60px}.navigation-section{flex:1 1 0%;display:flex;flex-direction:column;gap:var(--spacing-xl);flex-grow:1;align-items:center;justify-content:flex-start;min-height:0;position:relative;flex-shrink:0;width:100%;overflow-y:auto;overflow-x:hidden}.search-container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.nav-items{display:flex;flex-direction:column;gap:var(--spacing-xs);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.sidebar-footer{display:flex;flex-direction:column;gap:var(--spacing-lg);align-items:center;justify-content:end;position:relative;flex-shrink:0;width:100%}.footer-navigation{display:flex;flex-direction:column;gap:var(--spacing-xs);align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.sidebar-collapsed .sidebar-content{width:60px}.sidebar-collapsed .nav-item-label{display:none}.navigation-section::-webkit-scrollbar{width:4px}.navigation-section::-webkit-scrollbar-track{background:transparent}.navigation-section::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.navigation-section::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.navigation-section{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) transparent}.sidebar-expanded .sidebar-content{width:240px}.sidebar-expanded .nav-items{align-items:flex-start}.sidebar-expanded .nav-item{width:100%;flex-direction:row;justify-content:flex-start;gap:var(--spacing-md)}.sidebar-expanded .nav-item-label{display:block;text-align:left;font-size:var(--text-sm-size);height:auto;line-height:var(--text-sm-line)}";

const BhSidebar$1 = /*@__PURE__*/ proxyCustomElement(class BhSidebar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
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
        return (h(Host, { key: '14f483d75df70a5bfbda0731fe7d82aaf20d551b' }, h("div", { key: '8ea1b342688f955b401a77a808561b76164f0d0e', class: sidebarClasses }, h("div", { key: '931c6ba45580b069dbf7e96119e3ee914d05ce78', class: "navigation" }, h("div", { key: '9b39938bfe77ff84a68830de2bd8392ab3a3c1b2', class: "gradient-bar" }, h("div", { key: 'b196a1b459740323a927b1a5fee2ab65f596ed24', class: "detail-bar" })), h("div", { key: '00af6a0d4e4747b1026fa7d19b6c7a6a96457207', class: "sidebar-content" }, h("bh-logo-box", { key: '4032fc97e8965a77027ec269b87de5d2585be348', logoType: this.logoType }), h("div", { key: 'add8f2396ec79e7b7765cca6a42519c867f30ee7', class: "navigation-section" }, h("div", { key: '5c8116a117a7b406bb52d0cc0da2d51d472c4431', class: "search-container" }, h("bh-button-icon", { key: '024ce4ab04cf6404a05a7cae07f9f1a832a173e8', hierarchy: "secondary", size: "sm", iconName: "search", onClick: this.handleSearchClick })), h("div", { key: 'e3d90a44f3ab91348cd0b516548588b1fae2aa92', class: "nav-items" }, this.menuItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: this.activeItem === item.label, onBhClick: () => this.handleNavItemClick(item.label) }))))), h("div", { key: '447d84326d1f56d53e75190ed8d85c428769c5ce', class: "sidebar-footer" }, h("div", { key: '1ef5c3d1fbe579a7da66cba2ea436c7e9639ff95', class: "footer-navigation" }, this.footerItems.map((item) => (h("bh-nav-item", { key: item.label, icon: item.icon, label: item.label, isActive: false, onBhClick: () => this.handleNavItemClick(item.label) })))), h("bh-dropdown", { key: 'aef26cfc2faa17043588054c36bcb2f8a9008cc1', variant: "avatar", size: "md", avatarSize: "md", avatarSrc: this.avatarUrl, avatarName: this.avatarName, avatarEmail: this.avatarEmail, menuItems: avatarMenuItems, showIcons: true, onBhItemClick: this.handleAvatarMenuClick })))))));
    }
    static get style() { return bhSidebarCss; }
}, [769, "bh-sidebar", {
        "logoType": [1, "logo-type"],
        "avatarUrl": [1, "avatar-url"],
        "avatarInitials": [1, "avatar-initials"],
        "avatarName": [1, "avatar-name"],
        "avatarEmail": [1, "avatar-email"],
        "menuItems": [16],
        "footerItems": [16],
        "collapsed": [4],
        "activeItem": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-sidebar", "bh-avatar", "bh-button", "bh-button-icon", "bh-dropdown", "bh-dropdown-menu", "bh-loader-spinner", "bh-logo-box", "bh-nav-item", "bh-product-switcher"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhSidebar$1);
            }
            break;
        case "bh-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "bh-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bh-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bh-dropdown-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bh-logo-box":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bh-nav-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-product-switcher":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const BhSidebar = BhSidebar$1;
const defineCustomElement = defineCustomElement$1;

export { BhSidebar, defineCustomElement };
//# sourceMappingURL=bh-sidebar.js.map

//# sourceMappingURL=bh-sidebar.js.map