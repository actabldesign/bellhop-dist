'use strict';

var index = require('./index-DQwSUT6k.js');
var form = require('./form-9mbajZ3y.js');

const bhInputNumberCss = ":host{display:block}.input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm);width:100%;max-width:100%}.input-field{display:flex;align-items:center;gap:var(--spacing-md);padding:var(--spacing-md);height:36px;width:100%;background:var(--color-white);border:1px solid var(--color-neutral-300);border-radius:var(--spacing-md);transition:all 0.2s ease-in-out;cursor:text;box-shadow:0 0 0 0px transparent;overflow:hidden;position:relative;box-sizing:border-box}.input-field.input-icon-leading{padding:var(--spacing-md) var(--spacing-lg)}.input-content{display:flex;align-items:center;gap:var(--spacing-md);flex:1;height:100%;min-width:0;max-width:100%}.leading-icon{font-size:var(--text-xl-size);color:var(--color-neutral-500);user-select:none;flex-shrink:0;cursor:default;pointer-events:auto;transition:color 0.2s ease-in-out}.input-field.input-focused .leading-icon{color:var(--color-brand-600)}.input-element{flex:1;height:100%;border:none;outline:none;background:transparent;font-family:var(--font-inter);font-weight:400;font-size:var(--text-sm-size);line-height:1.43;color:var(--color-neutral-800);min-width:60px;padding-left:var(--spacing-xs);box-shadow:none}.input-element:focus{outline:none;border:none;box-shadow:none}.input-element::placeholder{color:var(--color-neutral-500)}.input-element:disabled{cursor:not-allowed;opacity:0.5}.input-element::-webkit-outer-spin-button,.input-element::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input-element[type='number']{-moz-appearance:textfield;appearance:textfield}.text-placeholder{color:var(--color-neutral-500)}.text-filled{color:var(--color-neutral-800)}.hint-text{font-family:var(--font-inter);font-weight:400;font-size:var(--text-sm-size);line-height:1.43;color:var(--color-neutral-600)}.input-field.input-hover{border-color:var(--color-brand-500)}.input-field.input-focused{border-color:var(--color-brand-500);box-shadow:0 0 0 1px var(--color-brand-500)}.input-field.input-disabled{opacity:0.5;cursor:not-allowed;background:var(--color-neutral-50)}.input-field.input-error{border-color:var(--color-error-300)}.input-field.input-error.input-hover{border-color:var(--color-error-500)}.input-field.input-error.input-focused{border-color:var(--color-brand-600)}.hint-text.hint-error{color:var(--color-error-600)}.prefix-text,.suffix-text{font-family:var(--font-inter);font-weight:400;font-size:var(--text-sm-size);line-height:1.43;color:var(--color-neutral-600);user-select:none;flex-shrink:0}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}@media (max-width: 768px){.input-wrapper{width:100%}}";

const BhInputNumber = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhChange = index.createEvent(this, "bhChange");
        this.bhFocus = index.createEvent(this, "bhFocus");
        this.bhBlur = index.createEvent(this, "bhBlur");
        this.bhHelpClick = index.createEvent(this, "bhHelpClick");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    get el() { return index.getElement(this); }
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
        form.updateValidity(this.internals, this.inputEl, this.validationMessage);
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
        form.updateValidity(this.internals, this.inputEl);
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
        form.updateValidity(this.internals, this.inputEl, this.validationMessage);
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
        return (index.h("div", { key: '5a62ac405a4dab08e3d7ec641db1336d957bd63c', class: "input-wrapper", style: wrapperStyle }, index.h("bh-label", { key: '1f6fd79e83ced0e705dca9ef25caa27b9a20e79c', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpIconClick }, index.h("div", { key: 'f918424c4e8775ba557532e1cda647037df5466a', class: inputFieldClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, index.h("div", { key: '61d930d8c8c54bf378f2194fdb104a2eeb314342', class: "input-content" }, this.showLeadingIcon && (index.h("span", { key: 'aa7ef4bda300371390b62f08d29d92b891853ccc', class: "leading-icon material-symbols-outlined" }, this.leadingIcon)), this.prefixText && index.h("span", { key: 'e64fa876433e2640d333270950f282e49920910c', class: "prefix-text" }, this.prefixText), index.h("input", { key: '8839a9db6d5bb05315465bdc1e2c3b073ca8e029', ref: (el) => (this.inputEl = el), type: "number", name: this.name, value: this.currentValue ?? '', placeholder: this.placeholder, disabled: this.disabled, required: this.required, class: `input-element ${textColorClass}`, onInput: this.handleInputChange, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, min: this.min ?? undefined, max: this.max ?? undefined, step: this.step }), this.suffixText && index.h("span", { key: '156a5a3928c46f7c35d12aa94ca7de9b4217f662', class: "suffix-text" }, this.suffixText), index.h("bh-button-icon", { key: '679c52af8ca9aa0033d165d5ded338a5656e00d2', hierarchy: "tertiary", size: "xs", iconName: "remove", disabled: isDecrementDisabled, onClick: this.decrement, "aria-label": "Decrease value" }), index.h("bh-button-icon", { key: 'f65a5a9dfb1909d77f2106a8920bb5979699e371', hierarchy: "tertiary", size: "xs", iconName: "add", disabled: isIncrementDisabled, onClick: this.increment, "aria-label": "Increase value" })))), this.showHintText && displayHintText && (index.h("div", { key: '14492378c9e97845b2a4b66834657fac2ccdcd9d', class: { 'hint-text': true, 'hint-error': showError } }, displayHintText))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["watchValue"]
    }; }
};
BhInputNumber.style = bhInputNumberCss;

exports.bh_input_number = BhInputNumber;
//# sourceMappingURL=bh-input-number.entry.cjs.js.map
