'use strict';

var index = require('./index-DQwSUT6k.js');
var form = require('./form-9mbajZ3y.js');

const bhInputPasswordCss = ":host{display:block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm, 8px);width:100%}.input-container{display:flex;align-items:center;gap:var(--spacing-md, 12px);padding:var(--spacing-md, 12px);height:36px;width:100%;background:var(--color-white, #FFFFFF);border:1px solid var(--color-neutral-300, #D0D5DD);border-radius:var(--spacing-md, 8px);transition:all 0.2s ease-in-out;cursor:text;box-sizing:border-box}.input-container.input-container-with-leading{padding:var(--spacing-md, 12px) var(--spacing-lg, 16px)}.input-container.input-container-hover{border-color:var(--color-brand-500, #7F56D9)}.input-container.input-container-focused{border-color:var(--color-brand-500, #7F56D9);box-shadow:0 0 0 1px var(--color-brand-500, #7F56D9)}.input-container.input-container-disabled{opacity:0.5;cursor:not-allowed;background:var(--color-neutral-50, #F9FAFB)}.input-container.input-container-error{border-color:var(--color-error-300, #FDA29B)}.input-container.input-container-error.input-container-hover{border-color:var(--color-error-500, #F05250)}.input-container.input-container-error.input-container-focused{border-color:var(--color-brand-600, #6941C6)}.input-content{display:flex;align-items:center;gap:var(--spacing-md, 12px);flex:1;height:100%;min-width:0}.input-element{flex:1;height:100%;border:none;outline:none;background:transparent;font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-800, #1D2939);min-width:60px;padding:0}.input-element:focus{outline:none;border:none;box-shadow:none}.input-element::placeholder{color:var(--color-neutral-500, #667085)}.input-element:disabled{cursor:not-allowed}.leading-icon{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-500, #667085);user-select:none;flex-shrink:0;cursor:default;transition:color 0.2s ease-in-out}.input-container-focused .leading-icon{color:var(--color-brand-600, #6941C6)}.visibility-toggle{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-400, #98A2B3);cursor:pointer;user-select:none;flex-shrink:0;transition:color 0.2s ease-in-out}.visibility-toggle:hover{color:var(--color-neutral-600, #475467)}.input-container-disabled .visibility-toggle{cursor:not-allowed;pointer-events:none}.hint-text{font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-600, #475467)}.hint-text.hint-error{color:var(--color-error-600, #DC2626)}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:20px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhInputPassword = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhInput = index.createEvent(this, "bhInput");
        this.bhFocus = index.createEvent(this, "bhFocus");
        this.bhBlur = index.createEvent(this, "bhBlur");
        this.bhHelpClick = index.createEvent(this, "bhHelpClick");
        this.bhVisibilityToggle = index.createEvent(this, "bhVisibilityToggle");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    inputEl;
    /**
     * The label for the input
     */
    label = 'Password';
    /**
     * Placeholder text
     */
    placeholder = 'Enter your password';
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
    showLeadingIcon = true;
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
    helpIconTooltip = 'Password requirements';
    /**
     * Leading icon name (Material Symbols)
     */
    leadingIcon = 'lock';
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
     * Track focus state
     */
    isFocused = false;
    /**
     * Track hover state
     */
    isHovered = false;
    /**
     * Track password visibility
     */
    showPassword = false;
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
    /**
     * Emitted when visibility is toggled
     */
    bhVisibilityToggle;
    componentDidLoad() {
        form.syncFormValue(this);
        form.updateValidity(this.internals, this.inputEl, this.validationMessage);
    }
    formResetCallback() {
        this.value = this.defaultValue;
        if (this.inputEl) {
            this.inputEl.value = this.defaultValue;
        }
        form.syncFormValue(this);
        form.updateValidity(this.internals, this.inputEl);
    }
    handleInput = (event) => {
        const target = event.target;
        this.value = target.value;
        this.bhInput.emit(this.value);
        form.syncFormValue(this);
        form.updateValidity(this.internals, this.inputEl, this.validationMessage);
    };
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
    togglePasswordVisibility = () => {
        if (!this.disabled) {
            this.showPassword = !this.showPassword;
            this.bhVisibilityToggle.emit(this.showPassword);
        }
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
        return (index.h("div", { key: 'd51c7f8940ebc898eca8c23b81da07e82f1d03ca', class: "input-wrapper", part: "wrapper" }, index.h("bh-label", { key: 'ff33a1389aee608c4dff434f0725c7e2daefee22', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpClick }, index.h("div", { key: '87cdc44632f27ed2d20254a5243383a1bb6e95b0', class: containerClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, index.h("div", { key: '3632843a862f49e17bbbfd56488436cb412c5551', class: "input-content" }, this.showLeadingIcon && (index.h("span", { key: 'd06f51f0e59874803a54e500c81edddd27c3277c', class: "material-symbols-outlined leading-icon" }, this.leadingIcon)), index.h("input", { key: '64fece5c291e21d4f03834918d527a4da83ac95b', ref: (el) => (this.inputEl = el), type: this.showPassword ? 'text' : 'password', class: "input-element", name: this.name, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, "aria-label": this.label, "aria-describedby": this.showHintText && this.hintText ? 'hint-text' : undefined, "aria-invalid": String(this.error), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, part: "input" })), index.h("span", { key: '1777e0f5bdcfb92e67f9540cf81b1d2179f8de09', class: "material-symbols-outlined visibility-toggle", onClick: this.togglePasswordVisibility, title: this.showPassword ? 'Hide password' : 'Show password' }, this.showPassword ? 'visibility_off' : 'visibility'))), this.showHintText && this.hintText && (index.h("div", { key: '2fe43741a8441ea24d971ddd2eb0545e355ac228', class: { 'hint-text': true, 'hint-error': this.error }, id: "hint-text" }, this.hintText))));
    }
    static get formAssociated() { return true; }
};
BhInputPassword.style = bhInputPasswordCss;

exports.bh_input_password = BhInputPassword;
//# sourceMappingURL=bh-input-password.entry.cjs.js.map
