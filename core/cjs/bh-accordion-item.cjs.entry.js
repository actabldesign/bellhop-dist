'use strict';

var index = require('./index-DQwSUT6k.js');

const bhAccordionItemCss = ":host{display:flex;flex-direction:column;width:100%;background-color:var(--color-white)}.accordion-header{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-lg);padding:var(--spacing-lg) var(--spacing-2xl);cursor:pointer;background-color:var(--color-white);border:none;border-bottom:1px solid var(--color-neutral-100);transition:background-color 0.15s ease}.accordion-header:hover{background-color:var(--color-neutral-25)}.accordion-header:focus{outline:none}.accordion-header:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:-2px}.accordion-header-content{display:flex;flex-direction:column;gap:var(--spacing-xxs);flex:1;min-width:0}.accordion-title{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-semibold);line-height:var(--text-md-line);color:var(--color-neutral-900)}.accordion-icon{display:flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:24px;color:var(--color-neutral-500);transition:transform 0.2s ease;flex-shrink:0}.accordion-content{display:grid;grid-template-rows:0fr;transition:grid-template-rows 0.2s ease;overflow:hidden}.accordion-content-inner{min-height:0;overflow:hidden}:host(.accordion-item-expanded) .accordion-header{border-bottom-color:transparent}:host(.accordion-item-expanded) .accordion-content{grid-template-rows:1fr}:host(.accordion-item-expanded) .accordion-content-inner{padding:var(--spacing-lg) var(--spacing-2xl) var(--spacing-2xl);border-bottom:1px solid var(--color-neutral-100)}:host(.accordion-item-disabled){opacity:0.5;pointer-events:none}:host(.accordion-item-disabled) .accordion-header{cursor:not-allowed}:host(.accordion-item-animating) .accordion-content-inner{overflow:hidden}";

const BhAccordionItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhAccordionToggle = index.createEvent(this, "bhAccordionToggle");
        this.bhAccordionClick = index.createEvent(this, "bhAccordionClick");
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
        return (index.h(index.Host, { key: '0c2f1ecc9d3eb6f6826811e6d3a5597cb024f76b', class: hostClasses }, index.h("div", { key: '07eac8349ec20a34b56fa216eb0111ccc9b29cb1', class: "accordion-header", part: "header", role: "button", tabindex: this.disabled ? -1 : 0, "aria-expanded": this.expanded ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `content-${this.value}`, onClick: this.handleHeaderClick, onKeyDown: this.handleKeyDown }, index.h("div", { key: 'bba216c5755b48a8f6e41aa7eea3d9a8deb11015', class: "accordion-header-content" }, index.h("span", { key: '8e6bdb61f7c1f29ed59ef6febca2834ef19c4036', class: "accordion-title", part: "title" }, this.header)), index.h("span", { key: '41d856e6da6cd64634c67de168f548f4307964e3', class: "accordion-icon material-symbols-outlined", part: "icon" }, iconName)), index.h("div", { key: 'cd9767f9ab78dd18d2c2e8a93b757a287e02c2d2', id: `content-${this.value}`, class: "accordion-content", part: "content", role: "region", "aria-labelledby": `header-${this.value}`, "aria-hidden": !this.expanded ? 'true' : 'false' }, index.h("div", { key: '32dbf5b959a5ebd0484344e1070af8e9dbab98ed', class: "accordion-content-inner" }, index.h("slot", { key: 'cf338a1116f4c2926eba447ca40ae0308f91529e' })))));
    }
    static get watchers() { return {
        "expanded": ["handleExpandedChange"]
    }; }
};
BhAccordionItem.style = bhAccordionItemCss;

exports.bh_accordion_item = BhAccordionItem;
//# sourceMappingURL=bh-accordion-item.entry.cjs.js.map
