'use strict';

var index = require('./index-DQwSUT6k.js');

const bhAccordionCss = ":host{display:block;width:100%}.accordion-container{display:flex;flex-direction:column;width:100%;background-color:var(--color-white)}.accordion-single .accordion-container{}.accordion-multiple .accordion-container{}";

const BhAccordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhAccordionChange = index.createEvent(this, "bhAccordionChange");
    }
    /**
     * The mode of the accordion:
     * - 'single': Only one item can be expanded at a time
     * - 'multiple': Multiple items can be expanded simultaneously
     */
    mode = 'single';
    /**
     * The value(s) of the currently expanded item(s).
     * For single mode: a string value
     * For multiple mode: an array of string values (comma-separated string)
     */
    value = '';
    /**
     * Whether to collapse other items when one is expanded (only applies in single mode)
     */
    collapsible = true;
    /**
     * Internal state to track expanded items
     */
    expandedItems = new Set();
    /**
     * Emitted when the expanded state changes
     */
    bhAccordionChange;
    componentWillLoad() {
        this.parseValue();
    }
    handleValueChange() {
        this.parseValue();
        this.updateChildItems();
    }
    parseValue() {
        if (!this.value) {
            this.expandedItems = new Set();
            return;
        }
        if (this.mode === 'multiple') {
            this.expandedItems = new Set(this.value.split(',').filter(Boolean));
        }
        else {
            this.expandedItems = new Set([this.value]);
        }
    }
    updateChildItems() {
        const slot = this.getSlot();
        if (!slot)
            return;
        const items = slot.assignedElements();
        items.forEach((item) => {
            if (item.tagName.toLowerCase() === 'bh-accordion-item') {
                item.expanded = this.expandedItems.has(item.value);
            }
        });
    }
    getSlot() {
        const host = document.querySelector('bh-accordion');
        if (!host?.shadowRoot)
            return null;
        return host.shadowRoot.querySelector('slot');
    }
    handleAccordionToggle(event) {
        const { value, expanded } = event.detail;
        if (this.mode === 'single') {
            if (expanded) {
                this.expandedItems = new Set([value]);
            }
            else if (this.collapsible) {
                this.expandedItems = new Set();
            }
        }
        else {
            if (expanded) {
                this.expandedItems.add(value);
            }
            else {
                this.expandedItems.delete(value);
            }
            this.expandedItems = new Set(this.expandedItems);
        }
        this.updateValue();
        this.updateChildItems();
    }
    updateValue() {
        const items = Array.from(this.expandedItems);
        if (this.mode === 'multiple') {
            this.value = items.join(',');
            this.bhAccordionChange.emit(items);
        }
        else {
            this.value = items[0] || '';
            this.bhAccordionChange.emit(this.value);
        }
    }
    render() {
        const hostClasses = {
            accordion: true,
            [`accordion-${this.mode}`]: true,
        };
        return (index.h(index.Host, { key: '081f1b04508692b1b6d826278ce6ef9ba2a79b1c', class: hostClasses }, index.h("div", { key: '17db8434d1f5cddfb1e24ccfa4fb6e2e31210903', class: "accordion-container", part: "container", role: "presentation" }, index.h("slot", { key: 'f5cb9dd421af2fe4d1f930c542bba2ba0e1e8132' }))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
BhAccordion.style = bhAccordionCss;

exports.bh_accordion = BhAccordion;
//# sourceMappingURL=bh-accordion.entry.cjs.js.map
