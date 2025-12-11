import { h, Host, } from "@stencil/core";
/**
 * @slot - Content displayed when the accordion item is expanded
 */
export class BhAccordionItem {
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
    static get is() { return "bh-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-accordion-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-accordion-item.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unique identifier for this accordion item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "header": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The header/title text for the accordion item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header"
            },
            "expanded": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether this accordion item is currently expanded"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "expanded",
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Whether this accordion item is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isAnimating": {}
        };
    }
    static get events() {
        return [{
                "method": "bhAccordionToggle",
                "name": "bhAccordionToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the accordion item is toggled"
                },
                "complexType": {
                    "original": "{ value: string; expanded: boolean }",
                    "resolved": "{ value: string; expanded: boolean; }",
                    "references": {}
                }
            }, {
                "method": "bhAccordionClick",
                "name": "bhAccordionClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the accordion header is clicked"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "expanded",
                "methodName": "handleExpandedChange"
            }];
    }
}
//# sourceMappingURL=bh-accordion-item.js.map
