import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhTabItemCss = ":host{display:flex}:host(.tab-item-full){flex:1 0 0;min-width:0}.tab-button{display:flex;align-items:center;justify-content:center;gap:var(--spacing-xs);padding:var(--spacing-sm) var(--spacing-md);min-height:36px;font-family:var(--font-inter);font-size:var(--text-sm-size);line-height:var(--text-sm-line);font-weight:var(--weight-semibold);color:var(--color-neutral-600);background:transparent;border:none;border-radius:var(--radius-sm);cursor:pointer;transition:all 0.2s ease-in-out;white-space:nowrap;outline:none;width:100%}:host-context(.tabs-underline) .tab-button{border-radius:0;padding-top:var(--spacing-xs);padding-bottom:var(--spacing-md);border-bottom:2px solid transparent}:host-context(.tabs-full-width) .tab-button{justify-content:center}:host-context(.tabs-contained) .tab-button-active{color:var(--color-brand-600);background-color:var(--color-brand-50)}:host-context(.tabs-underline) .tab-button-active{color:var(--color-brand-600);border-bottom-color:var(--color-brand-600)}:host-context(.tabs-contained) .tab-button:hover:not(.tab-button-disabled):not(.tab-button-active){background-color:var(--color-neutral-50);color:var(--color-neutral-700)}:host-context(.tabs-underline) .tab-button:hover:not(.tab-button-disabled):not(.tab-button-active){color:var(--color-neutral-700)}:host-context(.tabs-contained) .tab-button:active:not(.tab-button-disabled){background-color:var(--color-neutral-100)}.tab-button:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:2px}.tab-button-disabled{cursor:not-allowed;opacity:0.5;pointer-events:none}.tab-label{display:inline-block}:host-context(.tabs-vertical){width:100%}:host-context(.tabs-vertical) .tab-button{justify-content:flex-start;width:100%}:host-context(.tabs-vertical.tabs-contained) .tab-button-active{color:var(--color-brand-600);background-color:var(--color-brand-50)}:host-context(.tabs-vertical.tabs-underline) .tab-button{border-radius:0;border-bottom:none;border-left:2px solid transparent;padding:var(--spacing-sm) var(--spacing-md) var(--spacing-sm) var(--spacing-lg)}:host-context(.tabs-vertical.tabs-underline) .tab-button-active{color:var(--color-brand-600);border-left-color:var(--color-brand-600);border-bottom-color:transparent}";

const BhTabItem$1 = /*@__PURE__*/ proxyCustomElement(class BhTabItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhTabItemClick = createEvent(this, "bhTabItemClick");
    }
    get el() { return this; }
    /**
     * Unique identifier for this tab
     */
    value;
    /**
     * The label text for the tab
     */
    label;
    /**
     * Whether this tab is currently active
     */
    active = false;
    /**
     * Whether this tab is disabled
     */
    disabled = false;
    /**
     * Emitted when the tab is clicked
     */
    bhTabItemClick;
    handleClick = () => {
        if (!this.disabled) {
            this.bhTabItemClick.emit(this.value);
        }
    };
    render() {
        const buttonClasses = {
            'tab-button': true,
            'tab-button-active': this.active,
            'tab-button-disabled': this.disabled,
        };
        return (h(Host, { key: '4ad8e3e786f4a4c8a2c38e518e66ef2ded4c04ca', class: {
                'tab-item': true,
                'tab-item-active': this.active,
                'tab-item-disabled': this.disabled,
            } }, h("button", { key: 'b149a3ed3cdd49e887545281a5f9a1383443aeca', class: buttonClasses, part: "button", role: "tab", "aria-selected": this.active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', disabled: this.disabled, onClick: this.handleClick, type: "button" }, h("span", { key: '03f58f2761a021310a6cd2f811795dbc95e02ea1', class: "tab-label", part: "label" }, this.label), h("slot", { key: 'd96a82e89d9d7c64d1f17c65da4a47f4774ed96a' }))));
    }
    static get style() { return bhTabItemCss; }
}, [769, "bh-tab-item", {
        "value": [1],
        "label": [1],
        "active": [4],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-tab-item"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-tab-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhTabItem$1);
            }
            break;
    } });
}
defineCustomElement$1();

const BhTabItem = BhTabItem$1;
const defineCustomElement = defineCustomElement$1;

export { BhTabItem, defineCustomElement };
//# sourceMappingURL=bh-tab-item.js.map

//# sourceMappingURL=bh-tab-item.js.map