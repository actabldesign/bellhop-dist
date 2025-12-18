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
        return (h(Host, { key: '0c2f1ecc9d3eb6f6826811e6d3a5597cb024f76b', class: hostClasses }, h("div", { key: '07eac8349ec20a34b56fa216eb0111ccc9b29cb1', class: "accordion-header", part: "header", role: "button", tabindex: this.disabled ? -1 : 0, "aria-expanded": this.expanded ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `content-${this.value}`, onClick: this.handleHeaderClick, onKeyDown: this.handleKeyDown }, h("div", { key: 'bba216c5755b48a8f6e41aa7eea3d9a8deb11015', class: "accordion-header-content" }, h("span", { key: '8e6bdb61f7c1f29ed59ef6febca2834ef19c4036', class: "accordion-title", part: "title" }, this.header)), h("span", { key: '41d856e6da6cd64634c67de168f548f4307964e3', class: "accordion-icon material-symbols-outlined", part: "icon" }, iconName)), h("div", { key: 'cd9767f9ab78dd18d2c2e8a93b757a287e02c2d2', id: `content-${this.value}`, class: "accordion-content", part: "content", role: "region", "aria-labelledby": `header-${this.value}`, "aria-hidden": !this.expanded ? 'true' : 'false' }, h("div", { key: '32dbf5b959a5ebd0484344e1070af8e9dbab98ed', class: "accordion-content-inner" }, h("slot", { key: 'cf338a1116f4c2926eba447ca40ae0308f91529e' })))));
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
