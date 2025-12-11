import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DtVghh5W.js';

const bhDropdownCss = ":host{display:inline-block;position:relative}.dropdown-container{position:relative;display:inline-block}.dropdown-container bh-dropdown-menu{position:absolute;z-index:1000}.dropdown-container:not(.dropdown-avatar-variant) bh-dropdown-menu{top:100%;right:0;margin-top:var(--spacing-sm)}.dropdown-avatar-variant bh-dropdown-menu{bottom:0;left:calc(100% + var(--spacing-sm))}.dropdown-avatar{cursor:pointer;border-radius:50%;transition:box-shadow 0.2s ease;outline:none;display:inline-block;user-select:none}.dropdown-avatar:hover:not(.dropdown-avatar-disabled){box-shadow:0 0 0 2px var(--color-neutral-200)}.dropdown-avatar:focus:not(.dropdown-avatar-disabled){box-shadow:0 0 0 2px var(--color-brand-500)}.dropdown-avatar-focus{box-shadow:0 0 0 2px var(--color-brand-500)}.dropdown-avatar-disabled{cursor:not-allowed;opacity:0.5}.dropdown-open bh-button{--button-focus-ring:0 0 0 2px var(--color-brand-100)}";

const BhDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhItemClick = createEvent(this, "bhItemClick");
    }
    get el() { return getElement(this); }
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
    /**
     * Event emitted when a menu item is clicked
     */
    bhItemClick;
    handleClickOutside(event) {
        if (this.isOpen && !this.el.contains(event.target)) {
            this.isOpen = false;
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
        return (h("div", { key: '203d4ee8afd1f081c90d19e3befb59794658bb86', class: containerClasses }, !this.showAvatar && (h("bh-button", { key: '43362ec4952a03d0b26676ac7b7a066e122da142', hierarchy: this.buttonHierarchy, icon: this.isIconOnly ? 'only' : 'trailing', size: this.size, label: this.isIconOnly ? '' : this.label, iconName: this.isIconOnly ? this.iconName : 'expand_more', disabled: this.disabled, onClick: this.toggleDropdown })), this.showAvatar && (h("div", { key: '44221c66ba3b6ed22dd877baf9d382d1408c8878', class: avatarClasses, onClick: (e) => {
                if (!this.disabled) {
                    e.stopPropagation();
                    this.toggleDropdown();
                }
            }, role: "button", tabindex: this.disabled ? -1 : 0, onKeyDown: (e) => {
                if (!this.disabled && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    this.toggleDropdown();
                }
            } }, h("bh-avatar", { key: '0eb6fd5ae65d93c996ba703f1ab044227760f78f', type: "image", size: this.avatarSize, imageSrc: this.avatarSrc, alt: this.avatarAlt }))), h("bh-dropdown-menu", { key: '5f5dc22d2983af6ba6f5331e4c2259555ed6d498', visible: this.isOpen, showIcons: this.showIcons, menuItems: JSON.stringify(this.parsedMenuItems), header: this.parsedHeader ? JSON.stringify(this.parsedHeader) : undefined, onBhItemClick: this.handleMenuItemClick })));
    }
};
BhDropdown.style = bhDropdownCss;

const bhLogoBoxCss = ".logo-box{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;width:40px;flex-shrink:0;isolation:isolate}.logo-active{background-color:var(--color-brand-600);box-sizing:border-box;display:flex;gap:var(--spacing-lg);align-items:center;justify-content:center;padding:var(--spacing-sm);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:40px;height:40px;z-index:2;transition:background-color 0.3s ease;cursor:pointer}.logo-box:hover .logo-active,.logo-box.dropdown-open .logo-active{background-color:var(--color-brand-700)}.logo{overflow:hidden;position:relative;flex-shrink:0;width:32px;height:32px;background-size:contain;background-repeat:no-repeat;background-position:center;transition:background-image 0.4s cubic-bezier(0.08, 0.52, 0.52, 1)}.logo-actabl{}.logo-al{}.logo-he{}.logo-ps{}.logo-tr{}.logo-more-products{position:absolute;background-color:var(--color-brand-200);right:2px;bottom:-4px;border-radius:5px;width:36px;height:35px;z-index:1;transition:transform 0.3s ease}.logo-box:hover .logo-more-products,.logo-box.dropdown-open .logo-more-products{transform:translateY(-4px)}";

const BhLogoBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhProductSelect = createEvent(this, "bhProductSelect");
    }
    /**
     * Type of logo to display
     */
    logoType = 'actabl';
    /**
     * Array of products to display in the switcher
     */
    products = [
        {
            id: 'alice',
            name: 'Alice',
            description: 'Housekeeping & Guest Services',
            logo: './assets/logos/AL.svg',
        },
        {
            id: 'hotel-effectiveness',
            name: 'Hotel Effectiveness',
            description: 'Labor planning',
            logo: './assets/logos/HE.svg',
        },
        {
            id: 'profit-sword',
            name: 'ProfitSword',
            description: 'B.I and Finance',
            logo: './assets/logos/PS.svg',
        },
        {
            id: 'transcendent',
            name: 'Transcendent',
            description: 'Asset Management & CapEx',
            logo: './assets/logos/TR.svg',
        },
    ];
    /**
     * Event emitted when a product is selected
     */
    bhProductSelect;
    isOpen = false;
    anchorPosition = { top: 0, left: 0 };
    logoActiveRef;
    handleLogoClick = () => {
        if (this.logoActiveRef) {
            const rect = this.logoActiveRef.getBoundingClientRect();
            this.anchorPosition = {
                top: rect.bottom + 8,
                left: rect.left,
            };
            this.isOpen = !this.isOpen;
        }
    };
    handleClose = () => {
        this.isOpen = false;
    };
    handleProductSelect = (event) => {
        this.bhProductSelect.emit(event.detail);
        this.isOpen = false;
    };
    getLogoSrc = () => {
        switch (this.logoType) {
            case 'actabl':
                return './assets/logos/actabl.svg';
            case 'al':
                return './assets/logos/AL.svg';
            case 'he':
                return './assets/logos/HE.svg';
            case 'ps':
                return './assets/logos/PS.svg';
            case 'tr':
                return './assets/logos/TR.svg';
            default:
                return './assets/logos/actabl.svg';
        }
    };
    render() {
        const logoBoxClasses = {
            'logo-box': true,
            'dropdown-open': this.isOpen,
        };
        const logoClasses = {
            'logo': true,
            [`logo-${this.logoType}`]: true,
        };
        return (h(Host, { key: '7701200e2297867a3188f74663d5dcfc3c1bddbe' }, h("div", { key: 'c625d8d74cd94e2e2abfa283f45a79a6928e3868', class: logoBoxClasses }, h("div", { key: 'bcc3c1e4dfd02e590264ac1075632af0c0626edb', ref: (el) => (this.logoActiveRef = el), class: "logo-active", onClick: this.handleLogoClick }, h("img", { key: '592a65fe63945bcb878a0065c4427f19e1bac041', src: this.getLogoSrc(), alt: `${this.logoType} logo`, class: logoClasses })), h("div", { key: '552fbdbb59627349a60f86724677cbec7403ddf8', class: "logo-more-products" })), h("bh-product-switcher", { key: '588e16d9ad19f15c2c46509562ca78bd0aa5f7ae', isOpen: this.isOpen, anchorPosition: this.anchorPosition, products: this.products, onBhClose: this.handleClose, onBhProductSelect: this.handleProductSelect })));
    }
};
BhLogoBox.style = bhLogoBoxCss;

const bhNavItemCss = ":host{display:inline-block}.nav-item{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%;max-width:52px;height:fit-content}.nav-item-button{background-color:var(--color-white);box-sizing:border-box;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-md);position:relative;border-radius:var(--radius-sm);flex-shrink:0;transition:background-color 0.2s ease;cursor:pointer;border:none;outline:none}.nav-item-button:hover{background-color:var(--color-neutral-50)}.nav-item-button:focus-visible{box-shadow:0 0 0 2px var(--color-brand-100)}.nav-item.active .nav-item-button{background-color:var(--color-brand-50)}.nav-item-button .icon{width:20px;height:20px;display:block;flex-shrink:0;color:var(--color-neutral-500);transition:color 0.2s ease;font-size:20px;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.nav-item-button:hover .icon{color:var(--color-neutral-700)}.nav-item.active .nav-item-button .icon{color:var(--color-brand-600);font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.nav-item-label{font-family:var(--font-inter);font-weight:var(--weight-medium);height:18px;line-height:18px;font-style:normal;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:var(--color-neutral-700);font-size:10px;text-align:center;white-space:nowrap;width:100%;max-width:100%;margin:var(--spacing-none);margin-top:var(--spacing-xxs);box-sizing:border-box;direction:ltr}.nav-item.active .nav-item-label{color:var(--color-neutral-700);font-weight:var(--weight-semibold)}.nav-item.disabled .nav-item-button{cursor:not-allowed;opacity:0.5}.nav-item.disabled .nav-item-button:hover{background-color:var(--color-white)}.nav-item.disabled .nav-item-button .icon{color:var(--color-neutral-400)}.nav-item.disabled .nav-item-label{color:var(--color-neutral-400)}";

const BhNavItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhClick = createEvent(this, "bhClick");
    }
    /**
     * Material Symbols icon name
     */
    icon = 'home';
    /**
     * Label text displayed below the icon
     */
    label = 'Home';
    /**
     * Whether the nav item is active/selected
     */
    isActive = false;
    /**
     * Whether the nav item is disabled
     */
    disabled = false;
    /**
     * Event emitted when the nav item is clicked
     */
    bhClick;
    handleClick = () => {
        if (!this.disabled) {
            this.bhClick.emit();
        }
    };
    handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.bhClick.emit();
        }
    };
    render() {
        const navItemClasses = {
            'nav-item': true,
            'active': this.isActive,
            'disabled': this.disabled,
        };
        return (h("div", { key: 'eff7adc93f70b788035ee175f06b84dfaa3eafaa', class: navItemClasses }, h("button", { key: '37cf2ec326fd00b03c71967e5395a9a64fabac2d', class: "nav-item-button", "aria-label": this.label, type: "button", onClick: this.handleClick, onKeyDown: this.handleKeyDown, disabled: this.disabled, tabIndex: this.disabled ? -1 : 0 }, h("span", { key: '098fb47a65ed3b3e2409273ae7932c820870484d', class: "material-symbols-outlined icon" }, this.icon)), h("p", { key: '112cc6fae3e4f5e9c44e2ffab69e86908b35c629', class: "nav-item-label" }, this.label)));
    }
};
BhNavItem.style = bhNavItemCss;

export { BhDropdown as bh_dropdown, BhLogoBox as bh_logo_box, BhNavItem as bh_nav_item };
//# sourceMappingURL=bh-dropdown.bh-logo-box.bh-nav-item.entry.js.map
