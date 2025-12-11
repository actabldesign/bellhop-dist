import { h } from "@stencil/core";
export class BhLabel {
    el;
    tooltipTimerRef;
    /**
     * The label text to display
     */
    label = '';
    /**
     * Layout style for the label container
     * - block: Label above content (default for form fields)
     * - inline: Label next to content (label first)
     * - inline-start: Content next to label (content first, for checkboxes/radios)
     * - inline-space-between: Label and content on opposite ends
     */
    layout = 'block';
    /**
     * The id of the form element the label is bound to.
     * Use when the labeled element is not a child of this component.
     */
    for = '';
    /**
     * Supporting text displayed below the label (second line)
     * for instructions or additional description
     */
    supportingText = '';
    /**
     * Whether to show the required asterisk
     */
    required = false;
    /**
     * Whether to show the help icon
     */
    showHelpIcon = false;
    /**
     * Tooltip text for the help icon
     */
    helpIconTooltip = 'Help';
    /**
     * Whether the label is disabled
     */
    disabled = false;
    showHelpTooltip = false;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick;
    disconnectedCallback() {
        if (this.tooltipTimerRef) {
            clearTimeout(this.tooltipTimerRef);
        }
    }
    handleHelpIconMouseEnter = () => {
        if (this.tooltipTimerRef) {
            clearTimeout(this.tooltipTimerRef);
        }
        this.tooltipTimerRef = setTimeout(() => {
            this.showHelpTooltip = true;
        }, 300);
    };
    handleHelpIconMouseLeave = () => {
        if (this.tooltipTimerRef) {
            clearTimeout(this.tooltipTimerRef);
            this.tooltipTimerRef = undefined;
        }
        this.showHelpTooltip = false;
    };
    handleHelpIconClick = () => {
        this.bhHelpClick.emit();
    };
    render() {
        const wrapperClasses = {
            'label-container': true,
            [`layout-${this.layout}`]: true,
            'disabled': this.disabled,
        };
        const labelClasses = {
            'label-text': true,
            'disabled': this.disabled,
        };
        const supportingClasses = {
            'supporting-text': true,
            'disabled': this.disabled,
        };
        const labelWrapper = (h("div", { class: "label-wrapper" }, this.label && (h("label", { class: labelClasses, htmlFor: this.for || undefined }, this.label)), this.required && h("span", { class: "asterisk" }, "*"), this.showHelpIcon && (h("div", { class: "icon-with-tooltip" }, h("span", { class: "help-icon material-symbols-outlined", onClick: this.handleHelpIconClick, onMouseEnter: this.handleHelpIconMouseEnter, onMouseLeave: this.handleHelpIconMouseLeave }, "help"), h("bh-tooltip", { text: this.helpIconTooltip, position: "top", visible: this.showHelpTooltip })))));
        const supportingTextEl = this.supportingText && (h("p", { class: supportingClasses }, this.supportingText));
        const contentSlot = (h("div", { class: "label-content" }, h("slot", null)));
        // For inline-start layout, content comes first (used for checkbox/radio)
        if (this.layout === 'inline-start') {
            return (h("div", { class: wrapperClasses }, contentSlot, h("div", { class: "label-text-group" }, labelWrapper, supportingTextEl)));
        }
        // Default layout: label wrapper first, then content
        return (h("div", { class: wrapperClasses }, labelWrapper, supportingTextEl, contentSlot));
    }
    static get is() { return "bh-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-label.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-label.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label text to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LabelLayout",
                    "resolved": "\"block\" | \"inline\" | \"inline-space-between\" | \"inline-start\"",
                    "references": {
                        "LabelLayout": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-label/bh-label.tsx",
                            "id": "src/components/bh-label/bh-label.tsx::LabelLayout"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout style for the label container\n- block: Label above content (default for form fields)\n- inline: Label next to content (label first)\n- inline-start: Content next to label (content first, for checkboxes/radios)\n- inline-space-between: Label and content on opposite ends"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "layout",
                "defaultValue": "'block'"
            },
            "for": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The id of the form element the label is bound to.\nUse when the labeled element is not a child of this component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "for",
                "defaultValue": "''"
            },
            "supportingText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Supporting text displayed below the label (second line)\nfor instructions or additional description"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "supporting-text",
                "defaultValue": "''"
            },
            "required": {
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
                    "text": "Whether to show the required asterisk"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
            },
            "showHelpIcon": {
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
                    "text": "Whether to show the help icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-help-icon",
                "defaultValue": "false"
            },
            "helpIconTooltip": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tooltip text for the help icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "help-icon-tooltip",
                "defaultValue": "'Help'"
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
                    "text": "Whether the label is disabled"
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
            "showHelpTooltip": {}
        };
    }
    static get events() {
        return [{
                "method": "bhHelpClick",
                "name": "bhHelpClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the help icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bh-label.js.map
