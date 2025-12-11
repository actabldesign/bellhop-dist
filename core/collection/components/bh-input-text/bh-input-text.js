import { h } from "@stencil/core";
import { syncFormValue, updateValidity } from "../../utils/form";
export class BhInputText {
    internals;
    inputEl;
    /**
     * The label for the input
     */
    label = 'Email';
    /**
     * Placeholder text
     */
    placeholder = 'fujiwara@act-hq.com';
    /**
     * Hint text shown below the input
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
     * Whether to show a leading icon
     */
    showLeadingIcon = false;
    /**
     * Whether to show a trailing icon
     */
    showTrailingIcon = false;
    /**
     * Whether the field has an error
     */
    error = false;
    /**
     * Whether the input is disabled
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
     * Leading icon name (Material Symbols)
     */
    leadingIcon = 'mail';
    /**
     * Trailing icon name (Material Symbols)
     */
    trailingIcon = 'search';
    /**
     * The input value
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
     * Input type (text, email, tel, url, etc.)
     */
    type = 'text';
    /**
     * Width of the input (e.g., '100%', '200px')
     */
    width = '';
    /**
     * Whether the input is read-only
     */
    readOnly = false;
    /**
     * Visual state of the input (for programmatic control)
     */
    state = 'default';
    /**
     * Track focus state
     */
    isFocused = false;
    /**
     * Track hover state
     */
    isHovered = false;
    /**
     * Emitted when the value changes
     */
    bhInput;
    /**
     * Emitted when the input gains focus
     */
    bhFocus;
    /**
     * Emitted when the input loses focus
     */
    bhBlur;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick;
    handleInput = (event) => {
        const target = event.target;
        this.value = target.value;
        this.bhInput.emit(this.value);
        syncFormValue(this);
        updateValidity(this.internals, this.inputEl, this.validationMessage);
    };
    componentDidLoad() {
        syncFormValue(this);
        updateValidity(this.internals, this.inputEl, this.validationMessage);
    }
    formResetCallback() {
        this.value = this.defaultValue;
        if (this.inputEl) {
            this.inputEl.value = this.defaultValue;
        }
        syncFormValue(this);
        updateValidity(this.internals, this.inputEl);
    }
    handleFocus = () => {
        this.isFocused = true;
        this.bhFocus.emit();
    };
    handleBlur = () => {
        this.isFocused = false;
        this.bhBlur.emit();
    };
    handleMouseEnter = () => {
        if (!this.isFocused) {
            this.isHovered = true;
        }
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    handleHelpClick = () => {
        this.bhHelpClick.emit();
    };
    render() {
        const containerClasses = {
            'input-container': true,
            'input-container-focused': this.isFocused,
            'input-container-hover': this.isHovered && !this.isFocused,
            'input-container-error': this.error,
            'input-container-disabled': this.disabled,
            'input-container-with-leading': this.showLeadingIcon,
        };
        const wrapperStyle = this.width ? { width: this.width } : {};
        return (h("div", { key: '8be476e7f8d85ed21706e81315a7fe40588ace3a', class: "input-wrapper", part: "wrapper", style: wrapperStyle }, h("bh-label", { key: '55bb3367d150c5db61d74ed25226d69438f66270', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpClick }, h("div", { key: '2169c7fc04983918bebcf5d5a70a29fe815bd505', class: containerClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: '3d6d5214a7ed55b056ffdd6a122f7fbdcf07bc6a', class: "input-content" }, this.showLeadingIcon && (h("span", { key: 'd965c766b8a9a5161eeee18bbce611743690d083', class: "material-symbols-outlined leading-icon" }, this.leadingIcon)), h("input", { key: '8e2f44e90820c1610668cb8b3a358db7ae9064e3', ref: (el) => (this.inputEl = el), type: this.type, class: "input-element", name: this.name, value: this.value, placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readOnly, required: this.required, "aria-label": this.label, "aria-describedby": this.showHintText && this.hintText ? 'hint-text' : undefined, "aria-invalid": String(this.error), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, part: "input" }), this.showTrailingIcon && (h("span", { key: 'b46caa1cbec2f649ee5cb2a098e4f4241ab4eabb', class: "material-symbols-outlined trailing-icon" }, this.trailingIcon))))), this.showHintText && this.hintText && (h("div", { key: 'd33e25eda39c460df62e77a07dae8ebf69938f57', class: { 'hint-text': true, 'hint-error': this.error }, id: "hint-text" }, this.hintText))));
    }
    static get is() { return "bh-input-text"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-input-text.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-input-text.css"]
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
                    "text": "The label for the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Email'"
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
                "defaultValue": "'fujiwara@act-hq.com'"
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
                    "text": "Hint text shown below the input"
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
            "showLeadingIcon": {
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
                    "text": "Whether to show a leading icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-leading-icon",
                "defaultValue": "false"
            },
            "showTrailingIcon": {
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
                    "text": "Whether to show a trailing icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-trailing-icon",
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
                    "text": "Whether the input is disabled"
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
            "leadingIcon": {
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
                    "text": "Leading icon name (Material Symbols)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "leading-icon",
                "defaultValue": "'mail'"
            },
            "trailingIcon": {
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
                    "text": "Trailing icon name (Material Symbols)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trailing-icon",
                "defaultValue": "'search'"
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
                    "text": "The input value"
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
            "type": {
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
                    "text": "Input type (text, email, tel, url, etc.)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'text'"
            },
            "width": {
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
                    "text": "Width of the input (e.g., '100%', '200px')"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "''"
            },
            "readOnly": {
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
                    "text": "Whether the input is read-only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "read-only",
                "defaultValue": "false"
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'error' | 'disabled' | 'focus' | 'filled' | 'hover'",
                    "resolved": "\"default\" | \"disabled\" | \"error\" | \"filled\" | \"focus\" | \"hover\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual state of the input (for programmatic control)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "state",
                "defaultValue": "'default'"
            }
        };
    }
    static get states() {
        return {
            "isFocused": {},
            "isHovered": {}
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
                    "text": "Emitted when the input gains focus"
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
                    "text": "Emitted when the input loses focus"
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
//# sourceMappingURL=bh-input-text.js.map
