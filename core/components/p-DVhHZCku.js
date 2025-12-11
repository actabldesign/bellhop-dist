import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { d as defineCustomElement$4 } from './p-YJm8-pxX.js';
import { d as defineCustomElement$3 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$2 } from './p-ghuDbZwh.js';
import { d as defineCustomElement$1 } from './p-Bbo_Dwmk.js';

const bhDropdownCss = ":host{display:inline-block;position:relative}.dropdown-container{position:relative;display:inline-block}.dropdown-container bh-dropdown-menu{position:absolute;z-index:1000}.dropdown-container:not(.dropdown-avatar-variant) bh-dropdown-menu{top:100%;right:0;margin-top:var(--spacing-sm)}.dropdown-avatar-variant bh-dropdown-menu{bottom:0;left:calc(100% + var(--spacing-sm))}.dropdown-avatar{cursor:pointer;border-radius:50%;transition:box-shadow 0.2s ease;outline:none;display:inline-block;user-select:none}.dropdown-avatar:hover:not(.dropdown-avatar-disabled){box-shadow:0 0 0 2px var(--color-neutral-200)}.dropdown-avatar:focus:not(.dropdown-avatar-disabled){box-shadow:0 0 0 2px var(--color-brand-500)}.dropdown-avatar-focus{box-shadow:0 0 0 2px var(--color-brand-500)}.dropdown-avatar-disabled{cursor:not-allowed;opacity:0.5}.dropdown-open bh-button{--button-focus-ring:0 0 0 2px var(--color-brand-100)}";

const BhDropdown = /*@__PURE__*/ proxyCustomElement(class BhDropdown extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhItemClick = createEvent(this, "bhItemClick");
    }
    get el() { return this; }
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
    static get style() { return bhDropdownCss; }
}, [769, "bh-dropdown", {
        "size": [1],
        "state": [1],
        "variant": [1],
        "label": [1],
        "iconName": [1, "icon-name"],
        "disabled": [4],
        "menuItems": [1, "menu-items"],
        "header": [1],
        "avatarSrc": [1, "avatar-src"],
        "avatarAlt": [1, "avatar-alt"],
        "avatarSize": [1, "avatar-size"],
        "avatarName": [1, "avatar-name"],
        "avatarEmail": [1, "avatar-email"],
        "showIcons": [4, "show-icons"],
        "isOpen": [32]
    }, [[4, "click", "handleClickOutside"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-dropdown", "bh-avatar", "bh-button", "bh-dropdown-menu", "bh-loader-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhDropdown);
            }
            break;
        case "bh-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-dropdown-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhDropdown as B, defineCustomElement as d };
//# sourceMappingURL=p-DVhHZCku.js.map

//# sourceMappingURL=p-DVhHZCku.js.map