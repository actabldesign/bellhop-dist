import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhPageNavigationSingleLevelCss = ".page-navigation{width:320px;min-width:280px;background-color:var(--color-white);padding:var(--spacing-xl) var(--spacing-md);font-family:var(--font-inter);height:100vh;overflow-y:auto;border-right:1px solid var(--color-neutral-200);box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.page-navigation-header{margin-bottom:var(--spacing-3xl)}.page-navigation-title{font-size:var(--text-xl-size);font-weight:var(--weight-semibold);line-height:var(--text-xl-line);color:var(--color-neutral-900);padding:var(--spacing-none) var(--spacing-xl);margin:0}.page-navigation-list{display:flex;flex-direction:column;gap:var(--spacing-sm)}.page-navigation-single-level{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all 0.15s ease;min-height:40px;max-height:44px;box-sizing:border-box;border-radius:6px;margin:var(--spacing-none) var(--spacing-xs);background-color:transparent;border:1px solid transparent}.page-navigation-single-level.active{background-color:transparent;border:1px solid transparent}.page-navigation-single-level:hover{background-color:var(--color-neutral-50) !important}.page-navigation-multi-level{margin:var(--spacing-none) var(--spacing-xs)}.page-navigation-multi-level-parent{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all 0.15s ease;min-height:40px;max-height:44px;box-sizing:border-box;border-radius:var(--radius-sm);background-color:transparent;border:1px solid transparent}.page-navigation-multi-level.has-active-child .page-navigation-multi-level-parent{background-color:transparent;border:1px solid transparent}.page-navigation-multi-level-parent:hover{background-color:var(--color-neutral-50) !important}.page-navigation-children{margin-top:var(--spacing-xs);margin-bottom:var(--spacing-xs);position:relative;margin-left:var(--spacing-xl);display:flex;flex-direction:column;gap:var(--spacing-xs);max-height:1000px;opacity:1;transition:max-height 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    opacity 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    margin 0.4s cubic-bezier(0.08, 0.52, 0.52, 1)}.page-navigation-children.collapsed{max-height:0;opacity:0;margin-top:0;margin-bottom:0}.page-navigation-children::before{content:'';position:absolute;left:0;top:-2px;height:calc(100% + 4px);width:2px;background-color:var(--color-neutral-200);margin-left:var(--spacing-sm);z-index:2}.page-navigation-child{display:flex;align-items:center;padding:var(--spacing-md) var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all 0.15s ease;min-height:36px;box-sizing:border-box;border-radius:var(--radius-sm);margin:var(--spacing-none) var(--spacing-xs);background-color:transparent;border:1px solid transparent;margin-left:9px}.page-navigation-child:hover:not(.active){background-color:var(--color-neutral-50);position:relative;z-index:1}.page-navigation-child:hover:not(.active)::after{content:'';position:absolute;left:-20px;top:0;bottom:0;width:20px;background-color:var(--color-neutral-100);z-index:1;border-radius:var(--radius-sm)}.page-navigation-child.active{background-color:transparent}.page-navigation-child.active::before{content:'';position:absolute;left:-4.5px;top:50%;transform:translateY(-50%);width:2px;height:24px;background-color:var(--color-brand-600);z-index:3}.page-navigation-item-content,.page-navigation-child-content{display:flex;align-items:center;gap:var(--spacing-md);width:100%}.page-navigation-item-icon{flex-shrink:0;color:var(--color-neutral-600);font-size:20px;width:20px;height:20px;transition:color 0.15s ease}.page-navigation-animate-smooth{transform-origin:top center;transition:all var(--animation-duration-normal) var(--animation-ease-enter)}.page-navigation-chevron-icon{flex-shrink:0;color:var(--color-neutral-600);font-size:20px;width:20px;height:20px;transition:color 0.15s ease, transform var(--animation-duration-fast) var(--animation-ease-smooth)}.page-navigation-chevron-icon.expanded{transform:rotate(180deg)}.page-navigation-single-level.active .page-navigation-item-icon,.page-navigation-multi-level.has-active-child .page-navigation-item-icon{color:var(--color-neutral-900)}.page-navigation-item-label,.page-navigation-child-label{font-family:'Inter', sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all 0.15s ease}.page-navigation-single-level.active .page-navigation-item-label,.page-navigation-multi-level.has-active-child .page-navigation-item-label{color:var(--color-neutral-900);font-weight:600}.page-navigation-child.active .page-navigation-child-label{color:var(--color-brand-600);font-weight:600}.page-navigation-item-badge,.page-navigation-child-badge{margin-left:auto}@media (max-width: 768px){.page-navigation{width:280px;min-width:280px}}";

const BhPageNavigationSingleLevel = /*@__PURE__*/ proxyCustomElement(class BhPageNavigationSingleLevel extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhItemClick = createEvent(this, "bhItemClick");
    }
    /**
     * Label text for the navigation item
     */
    label;
    /**
     * Material icon name
     */
    icon = 'radio_button_unchecked';
    /**
     * Whether the item is currently active/selected
     */
    isActive = false;
    /**
     * Event emitted when the navigation item is clicked
     */
    bhItemClick;
    handleClick = () => {
        this.bhItemClick.emit();
    };
    getItemClasses() {
        return {
            'page-navigation-single-level': true,
            'page-navigation-animate-smooth': true,
            'active': this.isActive,
        };
    }
    render() {
        return (h(Host, { key: '5387b77b73fdc815daea9186650806bde7df23aa' }, h("div", { key: '8ce567faedcab4229e8255b4641d226e48b689ba', class: this.getItemClasses(), onClick: () => this.handleClick() }, h("div", { key: 'e7cc690ae45617f1c0a52553b8e10dee57862d8a', class: "page-navigation-item-content" }, h("span", { key: '3ae6648a0b4e96851548299c0a40cd71d020e476', class: "page-navigation-item-icon material-symbols-outlined" }, this.icon), h("span", { key: '005a1932186fb40b2fc31f8d5f77a97c73da989e', class: "page-navigation-item-label" }, this.label)))));
    }
    static get style() { return bhPageNavigationSingleLevelCss; }
}, [769, "bh-page-navigation-single-level", {
        "label": [1],
        "icon": [1],
        "isActive": [4, "is-active"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-page-navigation-single-level"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-page-navigation-single-level":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhPageNavigationSingleLevel);
            }
            break;
    } });
}
defineCustomElement();

export { BhPageNavigationSingleLevel as B, defineCustomElement as d };
//# sourceMappingURL=p-CQBqn1IO.js.map

//# sourceMappingURL=p-CQBqn1IO.js.map