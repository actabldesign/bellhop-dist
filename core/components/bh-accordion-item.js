import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhAccordionItemCss = ":host{display:flex;flex-direction:column;width:100%;background-color:var(--color-white)}.accordion-header{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-lg);padding:var(--spacing-lg) var(--spacing-2xl);cursor:pointer;background-color:var(--color-white);border:none;border-bottom:1px solid var(--color-neutral-100);transition:background-color 0.15s ease}.accordion-header:hover{background-color:var(--color-neutral-25)}.accordion-header:focus{outline:none}.accordion-header:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:-2px}.accordion-header-content{display:flex;flex-direction:column;gap:var(--spacing-xxs);flex:1;min-width:0}.accordion-title{font-family:var(--font-family-body);font-size:var(--font-size-text-md);font-weight:var(--font-weight-semibold);line-height:var(--line-height-text-md);color:var(--color-neutral-900)}.accordion-icon{display:flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:24px;color:var(--color-neutral-500);transition:transform 0.2s ease;flex-shrink:0}.accordion-content{display:grid;grid-template-rows:0fr;transition:grid-template-rows 0.2s ease;overflow:hidden}.accordion-content-inner{min-height:0;overflow:hidden}:host(.accordion-item-expanded) .accordion-header{border-bottom-color:transparent}:host(.accordion-item-expanded) .accordion-content{grid-template-rows:1fr}:host(.accordion-item-expanded) .accordion-content-inner{padding:var(--spacing-lg) var(--spacing-2xl) var(--spacing-2xl);border-bottom:1px solid var(--color-neutral-100)}:host(.accordion-item-disabled){opacity:0.5;pointer-events:none}:host(.accordion-item-disabled) .accordion-header{cursor:not-allowed}:host(.accordion-item-animating) .accordion-content-inner{overflow:hidden}";

const BhAccordionItem$1 = /*@__PURE__*/ proxyCustomElement(class BhAccordionItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhAccordionToggle = createEvent(this, "bhAccordionToggle");
        this.bhAccordionClick = createEvent(this, "bhAccordionClick");
    }
    /**
     * Unique identifier for this accordion item
     */
    value;
    /**
     * The header/title text for the accordion item
     */
    header;
    /**
     * Whether this accordion item is currently expanded
     */
    expanded = false;
    /**
     * Whether this accordion item is disabled
     */
    disabled = false;
    /**
     * Internal state for animation
     */
    isAnimating = false;
    /**
     * Emitted when the accordion item is toggled
     */
    bhAccordionToggle;
    /**
     * Emitted when the accordion header is clicked
     */
    bhAccordionClick;
    handleExpandedChange() {
        this.isAnimating = true;
        setTimeout(() => {
            this.isAnimating = false;
        }, 200);
    }
    handleHeaderClick = () => {
        if (this.disabled)
            return;
        this.expanded = !this.expanded;
        this.bhAccordionClick.emit(this.value);
        this.bhAccordionToggle.emit({
            value: this.value,
            expanded: this.expanded,
        });
    };
    handleKeyDown = (event) => {
        if (this.disabled)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleHeaderClick();
        }
    };
    render() {
        const hostClasses = {
            'accordion-item': true,
            'accordion-item-expanded': this.expanded,
            'accordion-item-disabled': this.disabled,
            'accordion-item-animating': this.isAnimating,
        };
        const iconName = this.expanded ? 'expand_less' : 'expand_more';
        return (h(Host, { key: 'b2670121b2a9706343aa29a5cf1ac1d033ece042', class: hostClasses }, h("div", { key: 'e18a7443b248bbba0706a39f5a65e0c804e5bae5', class: "accordion-header", part: "header", role: "button", tabindex: this.disabled ? -1 : 0, "aria-expanded": this.expanded ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `content-${this.value}`, onClick: this.handleHeaderClick, onKeyDown: this.handleKeyDown }, h("div", { key: 'a5a3be10f39bd63eb31d7b6a90b40f0714866ae5', class: "accordion-header-content" }, h("span", { key: '5d3ff7b6e69fab0e3658873dec49793972f2c0d5', class: "accordion-title", part: "title" }, this.header)), h("span", { key: 'e18cfab4d73e6d41d40c275888a584b1bb117d23', class: "accordion-icon material-symbols-outlined", part: "icon" }, iconName)), h("div", { key: 'd96ba43717314f6787f513f664b282391c4f8cf0', id: `content-${this.value}`, class: "accordion-content", part: "content", role: "region", "aria-labelledby": `header-${this.value}`, "aria-hidden": !this.expanded ? 'true' : 'false' }, h("div", { key: 'eac3f014aeccccd20ddd4f2c3b7ee98636a85a4d', class: "accordion-content-inner" }, h("slot", { key: '29ac3e0932ee7854678637121e395b2be48949a0' })))));
    }
    static get watchers() { return {
        "expanded": ["handleExpandedChange"]
    }; }
    static get style() { return bhAccordionItemCss; }
}, [769, "bh-accordion-item", {
        "value": [1],
        "header": [1],
        "expanded": [1540],
        "disabled": [4],
        "isAnimating": [32]
    }, undefined, {
        "expanded": ["handleExpandedChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-accordion-item"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-accordion-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhAccordionItem$1);
            }
            break;
    } });
}
defineCustomElement$1();

const BhAccordionItem = BhAccordionItem$1;
const defineCustomElement = defineCustomElement$1;

export { BhAccordionItem, defineCustomElement };
//# sourceMappingURL=bh-accordion-item.js.map

//# sourceMappingURL=bh-accordion-item.js.map