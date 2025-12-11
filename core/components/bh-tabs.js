import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhTabsCss = ":host{display:block;width:100%}.tabs-container{display:flex;flex-direction:column;width:100%}.tabs-list{display:flex;gap:var(--spacing-xs);padding:var(--spacing-none);position:relative}.tabs-full-width .tabs-list{width:100%;gap:var(--spacing-lg);justify-content:center}.tabs-underline.tabs-horizontal .tabs-container{border-bottom:1px solid var(--color-neutral-200)}.tabs-underline.tabs-horizontal .tabs-list{gap:var(--spacing-lg)}.tabs-underline.tabs-horizontal.tabs-full-width .tabs-list{gap:var(--spacing-lg)}.tabs-contained .tabs-list{gap:var(--spacing-xs)}.tabs-vertical{width:auto}.tabs-vertical .tabs-container{width:auto}.tabs-vertical .tabs-list{flex-direction:column;gap:var(--spacing-xs);width:204px}.tabs-underline.tabs-vertical .tabs-container{border-bottom:none}";

const BhTabs$1 = /*@__PURE__*/ proxyCustomElement(class BhTabs extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhTabChange = createEvent(this, "bhTabChange");
    }
    /**
     * The type of tabs: underline or contained style
     */
    type = 'contained';
    /**
     * The orientation of the tabs: horizontal or vertical
     */
    orientation = 'horizontal';
    /**
     * Whether the tabs should take up the full width of the container
     */
    fullWidth = false;
    /**
     * The value of the currently active tab
     */
    value = '';
    /**
     * Emitted when the active tab changes
     */
    bhTabChange;
    handleTabItemClick(event) {
        const value = event.detail;
        if (this.value !== value) {
            this.value = value;
            this.bhTabChange.emit(value);
        }
    }
    render() {
        const hostClasses = {
            tabs: true,
            [`tabs-${this.type}`]: true,
            [`tabs-${this.orientation}`]: true,
            'tabs-full-width': this.fullWidth,
        };
        return (h(Host, { key: '3eae9f235c7436f4ab2321e1d751071678d19418', class: hostClasses }, h("div", { key: '76b0313966bbb5bd1445d64a671480529a47c5ba', class: "tabs-container", part: "container" }, h("div", { key: '20e0d5a75efa9e55c501d350c1837c21e8118367', class: "tabs-list", part: "list", role: "tablist", "aria-orientation": this.orientation }, h("slot", { key: '46c28a21da056e1d10e87e3865a86c8d08f761d0' })))));
    }
    static get style() { return bhTabsCss; }
}, [769, "bh-tabs", {
        "type": [1],
        "orientation": [1],
        "fullWidth": [4, "full-width"],
        "value": [1025]
    }, [[0, "bhTabItemClick", "handleTabItemClick"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhTabs$1);
            }
            break;
    } });
}
defineCustomElement$1();

const BhTabs = BhTabs$1;
const defineCustomElement = defineCustomElement$1;

export { BhTabs, defineCustomElement };
//# sourceMappingURL=bh-tabs.js.map

//# sourceMappingURL=bh-tabs.js.map