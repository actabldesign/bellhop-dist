import { h } from "@stencil/core";
import { syncFormValue, updateValidity } from "../../utils/form";
export class BhTextarea {
    internals;
    textareaEl;
    /**
     * The label for the textarea
     */
    label = 'Comment';
    /**
     * Placeholder text
     */
    placeholder = 'Write a message...';
    /**
     * Hint text shown below the textarea
     */
    hintText = '';
    /**
     * Whether to show the label
     */
    showLabel = true;
    /**
     * Whether to show hint text
     */
    showHintText = true;
    /**
     * Whether to show the help icon
     */
    showHelpIcon = false;
    /**
     * Whether the field has an error
     */
    error = false;
    /**
     * Whether the textarea is disabled
     */
    disabled = false;
    /**
     * Whether the field is required
     */
    required = false;
    /**
     * Tooltip text for the help icon
     */
    helpIconTooltip = 'Help';
    /**
     * The textarea value
     */
    value = '';
    /**
     * Name attribute for form submission
     */
    name = '';
    /**
     * Default value for form reset
     */
    defaultValue = '';
    /**
     * Custom validation message
     */
    validationMessage = '';
    /**
     * Number of visible rows
     */
    rows = 4;
    /**
     * Resize behavior
     */
    resize = 'none';
    /**
     * Maximum character length
     */
    maxLength;
    /**
     * Track focus state
     */
    isFocused = false;
    /**
     * Emitted when the value changes
     */
    bhInput;
    /**
     * Emitted when the textarea gains focus
     */
    bhFocus;
    /**
     * Emitted when the textarea loses focus
     */
    bhBlur;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick;
    componentDidLoad() {
        syncFormValue(this);
        updateValidity(this.internals, this.textareaEl, this.validationMessage);
    }
    formResetCallback() {
        this.value = this.defaultValue;
        if (this.textareaEl) {
            this.textareaEl.value = this.defaultValue;
        }
        syncFormValue(this);
        updateValidity(this.internals, this.textareaEl);
    }
    handleInput = (event) => {
        const target = event.target;
        this.value = target.value;
        this.bhInput.emit(this.value);
        syncFormValue(this);
        updateValidity(this.internals, this.textareaEl, this.validationMessage);
    };
    handleFocus = () => {
        this.isFocused = true;
        this.bhFocus.emit();
    };
    handleBlur = () => {
        this.isFocused = false;
        this.bhBlur.emit();
    };
    handleHelpClick = () => {
        this.bhHelpClick.emit();
    };
    render() {
        const containerClasses = {
            'textarea-container': true,
            'textarea-container-focused': this.isFocused,
            'textarea-container-error': this.error,
            'textarea-container-disabled': this.disabled,
        };
        const textareaClasses = {
            'textarea': true,
            'textarea-error': this.error,
        };
        return (h("div", { key: 'a822380cef2104a61c1a8f2f79900b9ed9c12063', class: "textarea-wrapper", part: "wrapper" }, h("bh-label", { key: 'd8c77f1ddc75f6b42bc47bb8086ada57ca1c3e35', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpClick }, h("div", { key: '6d92f1c3a0f34729c24677c2a071559b5e7d527f', class: containerClasses }, h("div", { key: '9ac271fe196de95b9460eea3bf3cbfd1fd768c13', class: "textarea-content" }, h("textarea", { key: '1900eb1a188165ef624a41de391b5d0648d1b8b4', ref: (el) => (this.textareaEl = el), class: textareaClasses, name: this.name, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, rows: this.rows, maxLength: this.maxLength, style: { resize: this.resize }, "aria-label": this.label, "aria-describedby": this.showHintText && this.hintText ? 'hint-text' : undefined, "aria-invalid": String(this.error), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, part: "textarea" })))), this.showHintText && this.hintText && (h("div", { key: '2733112bfee45f11e13d92631c5f17518634030b', class: { 'hint-text': true, 'hint-error': this.error }, id: "hint-text" }, this.hintText))));
    }
    static get is() { return "bh-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-textarea.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-textarea.css"]
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
                    "text": "The label for the textarea"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Comment'"
            },
            "placeholder": {
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
                    "text": "Placeholder text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'Write a message...'"
            },
            "hintText": {
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
                    "text": "Hint text shown below the textarea"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint-text",
                "defaultValue": "''"
            },
            "showLabel": {
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
                    "text": "Whether to show the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-label",
                "defaultValue": "true"
            },
            "showHintText": {
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
                    "text": "Whether to show hint text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-hint-text",
                "defaultValue": "true"
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
            "error": {
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
                    "text": "Whether the field has an error"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error",
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
                    "text": "Whether the textarea is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
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
                    "text": "Whether the field is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
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
                    "text": "The textarea value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "name": {
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
                    "text": "Name attribute for form submission"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "''"
            },
            "defaultValue": {
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
                    "text": "Default value for form reset"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default-value",
                "defaultValue": "''"
            },
            "validationMessage": {
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
                    "text": "Custom validation message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "validation-message",
                "defaultValue": "''"
            },
            "rows": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of visible rows"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rows",
                "defaultValue": "4"
            },
            "resize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TextareaResize",
                    "resolved": "\"both\" | \"horizontal\" | \"none\" | \"vertical\"",
                    "references": {
                        "TextareaResize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-textarea/bh-textarea.tsx",
                            "id": "src/components/bh-textarea/bh-textarea.tsx::TextareaResize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Resize behavior"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resize",
                "defaultValue": "'none'"
            },
            "maxLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum character length"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-length"
            }
        };
    }
    static get states() {
        return {
            "isFocused": {}
        };
    }
    static get events() {
        return [{
                "method": "bhInput",
                "name": "bhInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "bhFocus",
                "name": "bhFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the textarea gains focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhBlur",
                "name": "bhBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the textarea loses focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
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
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bh-textarea.js.map
