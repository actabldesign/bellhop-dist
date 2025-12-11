import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { a as syncFormValue, u as updateValidity } from './p-2KjdCYlS.js';
import { d as defineCustomElement$3 } from './p-MIbEYjCv.js';
import { d as defineCustomElement$2 } from './p-D6kh9oF2.js';

const bhInputPasswordCss = ":host{display:block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm, 8px);width:100%}.input-container{display:flex;align-items:center;gap:var(--spacing-md, 12px);padding:var(--spacing-md, 12px);height:36px;width:100%;background:var(--color-white, #FFFFFF);border:1px solid var(--color-neutral-300, #D0D5DD);border-radius:var(--spacing-md, 8px);transition:all 0.2s ease-in-out;cursor:text;box-sizing:border-box}.input-container.input-container-with-leading{padding:var(--spacing-md, 12px) var(--spacing-lg, 16px)}.input-container.input-container-hover{border-color:var(--color-brand-500, #7F56D9)}.input-container.input-container-focused{border-color:var(--color-brand-500, #7F56D9);box-shadow:0 0 0 1px var(--color-brand-500, #7F56D9)}.input-container.input-container-disabled{opacity:0.5;cursor:not-allowed;background:var(--color-neutral-50, #F9FAFB)}.input-container.input-container-error{border-color:var(--color-error-300, #FDA29B)}.input-container.input-container-error.input-container-hover{border-color:var(--color-error-500, #F05250)}.input-container.input-container-error.input-container-focused{border-color:var(--color-brand-600, #6941C6)}.input-content{display:flex;align-items:center;gap:var(--spacing-md, 12px);flex:1;height:100%;min-width:0}.input-element{flex:1;height:100%;border:none;outline:none;background:transparent;font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-800, #1D2939);min-width:60px;padding:0}.input-element:focus{outline:none;border:none;box-shadow:none}.input-element::placeholder{color:var(--color-neutral-500, #667085)}.input-element:disabled{cursor:not-allowed}.leading-icon{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-500, #667085);user-select:none;flex-shrink:0;cursor:default;transition:color 0.2s ease-in-out}.input-container-focused .leading-icon{color:var(--color-brand-600, #6941C6)}.visibility-toggle{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-400, #98A2B3);cursor:pointer;user-select:none;flex-shrink:0;transition:color 0.2s ease-in-out}.visibility-toggle:hover{color:var(--color-neutral-600, #475467)}.input-container-disabled .visibility-toggle{cursor:not-allowed;pointer-events:none}.hint-text{font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-600, #475467)}.hint-text.hint-error{color:var(--color-error-600, #DC2626)}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:20px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhInputPassword$1 = /*@__PURE__*/ proxyCustomElement(class BhInputPassword extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhInput = createEvent(this, "bhInput");
        this.bhFocus = createEvent(this, "bhFocus");
        this.bhBlur = createEvent(this, "bhBlur");
        this.bhHelpClick = createEvent(this, "bhHelpClick");
        this.bhVisibilityToggle = createEvent(this, "bhVisibilityToggle");
        this.internals = this.attachInternals();
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
    handleInput = (event) => {
        const target = event.target;
        this.value = target.value;
        this.bhInput.emit(this.value);
        syncFormValue(this);
        updateValidity(this.internals, this.inputEl, this.validationMessage);
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
        return (h("div", { key: '65214ad4e72bfdf75610edcac9c3f5723ea87446', class: "input-wrapper", part: "wrapper" }, h("bh-label", { key: 'a7bfffd4d1221aba3ea7642b3589869724d50286', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpClick }, h("div", { key: '2879a7616747302fbd432321db764a6e63548dae', class: containerClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: '11ef311fc118a7595cb210fac70fda53599756a2', class: "input-content" }, this.showLeadingIcon && (h("span", { key: '805a132b4411f3b4016ea522701ac419915e0e88', class: "material-symbols-outlined leading-icon" }, this.leadingIcon)), h("input", { key: '0c4f69d29acb824ccf7fd23dc11b4b4d6385a38b', ref: (el) => (this.inputEl = el), type: this.showPassword ? 'text' : 'password', class: "input-element", name: this.name, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, "aria-label": this.label, "aria-describedby": this.showHintText && this.hintText ? 'hint-text' : undefined, "aria-invalid": String(this.error), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, part: "input" })), h("span", { key: 'ce8f1bd6a95110b76a573e0f65ec43a7cfe6846b', class: "material-symbols-outlined visibility-toggle", onClick: this.togglePasswordVisibility, title: this.showPassword ? 'Hide password' : 'Show password' }, this.showPassword ? 'visibility_off' : 'visibility'))), this.showHintText && this.hintText && (h("div", { key: 'cd3f626bd84d01bcda347e2844c7150a474d91eb', class: { 'hint-text': true, 'hint-error': this.error }, id: "hint-text" }, this.hintText))));
    }
    static get formAssociated() { return true; }
    static get style() { return bhInputPasswordCss; }
}, [833, "bh-input-password", {
        "label": [1],
        "placeholder": [1],
        "hintText": [1, "hint-text"],
        "showLabel": [4, "show-label"],
        "showHintText": [4, "show-hint-text"],
        "showHelpIcon": [4, "show-help-icon"],
        "showLeadingIcon": [4, "show-leading-icon"],
        "error": [4],
        "disabled": [4],
        "required": [4],
        "helpIconTooltip": [1, "help-icon-tooltip"],
        "leadingIcon": [1, "leading-icon"],
        "value": [1025],
        "name": [1],
        "defaultValue": [1, "default-value"],
        "validationMessage": [1, "validation-message"],
        "isFocused": [32],
        "isHovered": [32],
        "showPassword": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-input-password", "bh-label", "bh-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-input-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhInputPassword$1);
            }
            break;
        case "bh-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const BhInputPassword = BhInputPassword$1;
const defineCustomElement = defineCustomElement$1;

export { BhInputPassword, defineCustomElement };
//# sourceMappingURL=bh-input-password.js.map

//# sourceMappingURL=bh-input-password.js.map