import { h } from "@stencil/core";
import { updateValidity } from "../../utils/form";
export class BhInputNumber {
    el;
    internals;
    inputEl;
    /**
     * Whether the input is in an error state
     */
    error = false;
    /**
     * Whether the field is required
     */
    required = false;
    /**
     * Whether the input is disabled
     */
    disabled = false;
    /**
     * Whether to show the help icon
     */
    showHelpIcon = false;
    /**
     * Whether to show the leading icon
     */
    showLeadingIcon = false;
    /**
     * Whether to show the label
     */
    showLabel = true;
    /**
     * Whether to show the hint text
     */
    showHintText = true;
    /**
     * Label text for the input
     */
    label = 'Amount';
    /**
     * Placeholder text
     */
    placeholder = '0';
    /**
     * Hint text displayed below the input
     */
    hintText = 'Enter a numeric value.';
    /**
     * Leading icon name (Material Symbols)
     */
    leadingIcon = 'tag';
    /**
     * Tooltip text for the help icon
     */
    helpIconTooltip = 'Help';
    /**
     * Current numeric value
     */
    value = null;
    /**
     * Minimum allowed value
     */
    min = null;
    /**
     * Maximum allowed value
     */
    max = null;
    /**
     * Step value for increment/decrement
     */
    step = 1;
    /**
     * Text prefix before the input value
     */
    prefixText = '';
    /**
     * Text suffix after the input value
     */
    suffixText = '';
    /**
     * Width of the component
     */
    width = '';
    /**
     * Name attribute for form submission
     */
    name = '';
    /**
     * Default value for form reset
     */
    defaultValue = null;
    /**
     * Custom validation message
     */
    validationMessage = '';
    internalState = 'placeholder';
    isHovered = false;
    isFocused = false;
    internalValue = null;
    hasValidationError = false;
    /**
     * Event emitted when the value changes
     */
    bhChange;
    /**
     * Event emitted when the input receives focus
     */
    bhFocus;
    /**
     * Event emitted when the input loses focus
     */
    bhBlur;
    /**
     * Event emitted when the help icon is clicked
     */
    bhHelpClick;
    get isControlled() {
        return this.value !== undefined && this.value !== null;
    }
    get currentValue() {
        return this.isControlled ? this.value : this.internalValue;
    }
    watchValue(newValue) {
        this.hasValidationError = this.isOutOfBounds(newValue);
        this.updateInternalState(newValue);
    }
    componentWillLoad() {
        if (this.value !== null && this.value !== undefined) {
            this.internalValue = this.value;
        }
        this.hasValidationError = this.isOutOfBounds(this.currentValue);
        this.updateInternalState(this.currentValue);
    }
    componentDidLoad() {
        this.syncNumberFormValue();
        updateValidity(this.internals, this.inputEl, this.validationMessage);
    }
    formResetCallback() {
        this.value = this.defaultValue;
        this.internalValue = this.defaultValue;
        if (this.inputEl) {
            this.inputEl.value = this.defaultValue !== null ? String(this.defaultValue) : '';
        }
        this.hasValidationError = this.isOutOfBounds(this.defaultValue);
        this.updateInternalState(this.defaultValue);
        this.syncNumberFormValue();
        updateValidity(this.internals, this.inputEl);
    }
    syncNumberFormValue() {
        if (!this.internals || !this.name)
            return;
        const val = this.currentValue;
        if (val === null || val === undefined) {
            this.internals.setFormValue(null);
        }
        else {
            this.internals.setFormValue(String(val));
        }
    }
    isOutOfBounds(val) {
        if (val === null)
            return false;
        if (this.min !== null && val < this.min)
            return true;
        if (this.max !== null && val > this.max)
            return true;
        return false;
    }
    updateInternalState(val) {
        if (val !== null && val !== undefined) {
            this.internalState = 'filled';
        }
        else if (!this.isFocused && !this.isHovered) {
            this.internalState = 'placeholder';
        }
    }
    validateValue(val) {
        if (this.min !== null && val < this.min) {
            return this.min;
        }
        if (this.max !== null && val > this.max) {
            return this.max;
        }
        return val;
    }
    updateValue(newValue, allowOutOfBounds = false) {
        let finalValue;
        if (newValue === null) {
            finalValue = null;
        }
        else if (allowOutOfBounds) {
            finalValue = newValue;
        }
        else {
            finalValue = this.validateValue(newValue);
        }
        this.internalValue = finalValue;
        this.value = finalValue;
        this.hasValidationError = this.isOutOfBounds(finalValue);
        this.syncNumberFormValue();
        updateValidity(this.internals, this.inputEl, this.validationMessage);
        this.bhChange.emit(finalValue);
    }
    handleInputChange = (event) => {
        const input = event.target;
        const inputValue = input.value;
        const numericValue = inputValue === '' ? null : parseFloat(inputValue);
        if (numericValue !== null && !isNaN(numericValue)) {
            this.updateValue(numericValue, true);
        }
        else if (inputValue === '') {
            this.updateValue(null, true);
        }
    };
    increment = () => {
        const baseValue = this.currentValue ?? 0;
        const newValue = baseValue + this.step;
        this.updateValue(newValue);
    };
    decrement = () => {
        const baseValue = this.currentValue ?? 0;
        const newValue = baseValue - this.step;
        this.updateValue(newValue);
    };
    handleInputFocus = () => {
        this.isFocused = true;
        this.internalState = 'focused';
        this.bhFocus.emit();
    };
    handleInputBlur = () => {
        this.isFocused = false;
        this.updateInternalState(this.currentValue);
        this.bhBlur.emit();
    };
    handleMouseEnter = () => {
        if (!this.isFocused) {
            this.isHovered = true;
            this.internalState = 'hover';
        }
    };
    handleMouseLeave = () => {
        this.isHovered = false;
        if (!this.isFocused) {
            this.updateInternalState(this.currentValue);
        }
    };
    handleHelpIconClick = () => {
        this.bhHelpClick.emit();
    };
    getValidationErrorMessage() {
        if (!this.hasValidationError || this.currentValue === null)
            return '';
        if (this.min !== null && this.max !== null) {
            return `Enter a number between ${this.min} and ${this.max}.`;
        }
        if (this.min !== null && this.currentValue < this.min) {
            return `Value must be at least ${this.min}`;
        }
        if (this.max !== null && this.currentValue > this.max) {
            return `Value must be no more than ${this.max}`;
        }
        return '';
    }
    render() {
        const showError = this.error || this.hasValidationError;
        const displayHintText = showError && this.hasValidationError ? this.getValidationErrorMessage() : this.hintText;
        const inputFieldClasses = {
            'input-field': true,
            'input-hover': this.internalState === 'hover' || this.isHovered,
            'input-focused': this.internalState === 'focused' || this.isFocused,
            'input-error': showError,
            'input-disabled': this.disabled,
            'input-icon-leading': this.showLeadingIcon,
        };
        const textColorClass = this.currentValue !== null && this.currentValue !== undefined ? 'text-filled' : 'text-placeholder';
        const wrapperStyle = this.width ? { width: this.width } : {};
        const isDecrementDisabled = this.disabled || (this.min !== null && this.currentValue !== null && this.currentValue <= this.min);
        const isIncrementDisabled = this.disabled || (this.max !== null && this.currentValue !== null && this.currentValue >= this.max);
        return (h("div", { key: 'e575b1982af49b05d43e26107d0e6f0259693309', class: "input-wrapper", style: wrapperStyle }, h("bh-label", { key: 'a6ba247e1aa8faf69882624964e24994237f9b99', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpIconClick }, h("div", { key: '2e518017ed3e16bfb0109f67f0b97fdc4088da10', class: inputFieldClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'ae95010994de4d51220e085abe345b0fe3693e9f', class: "input-content" }, this.showLeadingIcon && (h("span", { key: 'f5a4c54ff0d2bbe6e125d86f47587b16be34595a', class: "leading-icon material-symbols-outlined" }, this.leadingIcon)), this.prefixText && h("span", { key: 'd361eac479f123fe971f661a68a2bb0248f41c82', class: "prefix-text" }, this.prefixText), h("input", { key: 'a7c1b3d4dc7c0a97532dbc9bf52ad00f4466e93e', ref: (el) => (this.inputEl = el), type: "number", name: this.name, value: this.currentValue ?? '', placeholder: this.placeholder, disabled: this.disabled, required: this.required, class: `input-element ${textColorClass}`, onInput: this.handleInputChange, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, min: this.min ?? undefined, max: this.max ?? undefined, step: this.step }), this.suffixText && h("span", { key: '0f45089745e92275fa5fef6539dea724aa75ca64', class: "suffix-text" }, this.suffixText), h("bh-button-icon", { key: 'cf8f2059727fc00b0640e01ae39182dd6e434ab6', hierarchy: "tertiary", size: "xs", iconName: "remove", disabled: isDecrementDisabled, onClick: this.decrement, "aria-label": "Decrease value" }), h("bh-button-icon", { key: '59cc6e617af95da7ee44a7fac4aa04505432d88a', hierarchy: "tertiary", size: "xs", iconName: "add", disabled: isIncrementDisabled, onClick: this.increment, "aria-label": "Increase value" })))), this.showHintText && displayHintText && (h("div", { key: '387bb2b4602cf09f2a1942d1b082b2604548b5a2', class: { 'hint-text': true, 'hint-error': showError } }, displayHintText))));
    }
    static get is() { return "bh-input-number"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-input-number.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-input-number.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Whether the input is in an error state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error",
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
                    "text": "Whether to show the leading icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-leading-icon",
                "defaultValue": "false"
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
                    "text": "Whether to show the hint text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-hint-text",
                "defaultValue": "true"
            },
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
                    "text": "Label text for the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Amount'"
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
                "defaultValue": "'0'"
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
                    "text": "Hint text displayed below the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint-text",
                "defaultValue": "'Enter a numeric value.'"
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
                "defaultValue": "'tag'"
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
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number | null",
                    "resolved": "null | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current numeric value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "null"
            },
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "null | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum allowed value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min",
                "defaultValue": "null"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "null | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum allowed value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max",
                "defaultValue": "null"
            },
            "step": {
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
                    "text": "Step value for increment/decrement"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "step",
                "defaultValue": "1"
            },
            "prefixText": {
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
                    "text": "Text prefix before the input value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "prefix-text",
                "defaultValue": "''"
            },
            "suffixText": {
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
                    "text": "Text suffix after the input value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "suffix-text",
                "defaultValue": "''"
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
                    "text": "Width of the component"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
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
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "null | number",
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
                "defaultValue": "null"
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
            }
        };
    }
    static get states() {
        return {
            "internalState": {},
            "isHovered": {},
            "isFocused": {},
            "internalValue": {},
            "hasValidationError": {}
        };
    }
    static get events() {
        return [{
                "method": "bhChange",
                "name": "bhChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the value changes"
                },
                "complexType": {
                    "original": "number | null",
                    "resolved": "null | number",
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
                    "text": "Event emitted when the input receives focus"
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
                    "text": "Event emitted when the input loses focus"
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
                    "text": "Event emitted when the help icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bh-input-number.js.map
