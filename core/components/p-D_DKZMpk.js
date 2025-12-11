import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';

const bhNavItemCss = ":host{display:inline-block}.nav-item{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%;max-width:52px;height:fit-content}.nav-item-button{background-color:var(--color-white);box-sizing:border-box;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-md);position:relative;border-radius:var(--radius-sm);flex-shrink:0;transition:background-color 0.2s ease;cursor:pointer;border:none;outline:none}.nav-item-button:hover{background-color:var(--color-neutral-50)}.nav-item-button:focus-visible{box-shadow:0 0 0 2px var(--color-brand-100)}.nav-item.active .nav-item-button{background-color:var(--color-brand-50)}.nav-item-button .icon{width:20px;height:20px;display:block;flex-shrink:0;color:var(--color-neutral-500);transition:color 0.2s ease;font-size:20px;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.nav-item-button:hover .icon{color:var(--color-neutral-700)}.nav-item.active .nav-item-button .icon{color:var(--color-brand-600);font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.nav-item-label{font-family:var(--font-inter);font-weight:var(--weight-medium);height:18px;line-height:18px;font-style:normal;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:var(--color-neutral-700);font-size:10px;text-align:center;white-space:nowrap;width:100%;max-width:100%;margin:var(--spacing-none);margin-top:var(--spacing-xxs);box-sizing:border-box;direction:ltr}.nav-item.active .nav-item-label{color:var(--color-neutral-700);font-weight:var(--weight-semibold)}.nav-item.disabled .nav-item-button{cursor:not-allowed;opacity:0.5}.nav-item.disabled .nav-item-button:hover{background-color:var(--color-white)}.nav-item.disabled .nav-item-button .icon{color:var(--color-neutral-400)}.nav-item.disabled .nav-item-label{color:var(--color-neutral-400)}";

const BhNavItem = /*@__PURE__*/ proxyCustomElement(class BhNavItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
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
    static get style() { return bhNavItemCss; }
}, [769, "bh-nav-item", {
        "icon": [1],
        "label": [1],
        "isActive": [4, "is-active"],
        "disabled": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-nav-item"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-nav-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhNavItem);
            }
            break;
    } });
}
defineCustomElement();

export { BhNavItem as B, defineCustomElement as d };
//# sourceMappingURL=p-D_DKZMpk.js.map

//# sourceMappingURL=p-D_DKZMpk.js.map