import { h, Host, } from "@stencil/core";
/**
 * @slot - Accordion items (bh-accordion-item components)
 */
export class BhAccordion {
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
        return (h(Host, { key: '081f1b04508692b1b6d826278ce6ef9ba2a79b1c', class: hostClasses }, h("div", { key: '17db8434d1f5cddfb1e24ccfa4fb6e2e31210903', class: "accordion-container", part: "container", role: "presentation" }, h("slot", { key: 'f5cb9dd421af2fe4d1f930c542bba2ba0e1e8132' }))));
    }
    static get is() { return "bh-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-accordion.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-accordion.css"]
        };
    }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AccordionMode",
                    "resolved": "\"multiple\" | \"single\"",
                    "references": {
                        "AccordionMode": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-accordion/bh-accordion.tsx",
                            "id": "src/components/bh-accordion/bh-accordion.tsx::AccordionMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The mode of the accordion:\n- 'single': Only one item can be expanded at a time\n- 'multiple': Multiple items can be expanded simultaneously"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'single'"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value(s) of the currently expanded item(s).\nFor single mode: a string value\nFor multiple mode: an array of string values (comma-separated string)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "collapsible": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to collapse other items when one is expanded (only applies in single mode)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsible",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "expandedItems": {}
        };
    }
    static get events() {
        return [{
                "method": "bhAccordionChange",
                "name": "bhAccordionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the expanded state changes"
                },
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "bhAccordionToggle",
                "method": "handleAccordionToggle",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-accordion.js.map
