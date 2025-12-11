import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { a as syncFormValue, u as updateValidity } from './p-2KjdCYlS.js';
import { d as defineCustomElement$2 } from './p-MIbEYjCv.js';
import { d as defineCustomElement$1 } from './p-D6kh9oF2.js';

const bhInputTextCss = ":host{display:block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm, 8px);width:100%}.input-container{display:flex;align-items:center;gap:var(--spacing-md, 12px);padding:var(--spacing-md, 12px);height:36px;width:100%;background:var(--color-white, #ffffff);border:1px solid var(--color-neutral-300, #d0d5dd);border-radius:var(--spacing-md, 8px);transition:all 0.2s ease-in-out;cursor:text;box-sizing:border-box}.input-container.input-container-with-leading{padding:var(--spacing-md, 12px) var(--spacing-lg, 16px)}.input-container.input-container-hover{border-color:var(--color-brand-500, #7f56d9)}.input-container.input-container-focused{border-color:var(--color-brand-500, #7f56d9);box-shadow:0 0 0 1px var(--color-brand-500, #7f56d9)}.input-container.input-container-disabled{opacity:0.5;cursor:not-allowed;background:var(--color-neutral-50, #f9fafb)}.input-container.input-container-error{border-color:var(--color-error-300, #fda29b)}.input-container.input-container-error.input-container-hover{border-color:var(--color-error-500, #f05250)}.input-container.input-container-error.input-container-focused{border-color:var(--color-brand-600, #6941c6)}.input-content{display:flex;align-items:center;gap:var(--spacing-md, 12px);flex:1;height:100%;min-width:0}.input-element{flex:1;height:100%;border:none;outline:none;background:transparent;font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-800, #1d2939);min-width:60px;padding:0}.input-element:focus{outline:none;border:none;box-shadow:none}.input-element::placeholder{color:var(--color-neutral-500, #667085)}.input-element:disabled{cursor:not-allowed}.leading-icon,.trailing-icon{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-500, #667085);user-select:none;flex-shrink:0;cursor:default;transition:color 0.2s ease-in-out}.input-container-focused .leading-icon,.input-container-focused .trailing-icon{color:var(--color-brand-600, #6941c6)}.hint-text{font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-600, #475467)}.hint-text.hint-error{color:var(--color-error-600, #dc2626)}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:20px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhInputText = /*@__PURE__*/ proxyCustomElement(class BhInputText extends H {
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
        this.internals = this.attachInternals();
    }
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
    static get formAssociated() { return true; }
    static get style() { return bhInputTextCss; }
}, [833, "bh-input-text", {
        "label": [1],
        "placeholder": [1],
        "hintText": [1, "hint-text"],
        "showLabel": [4, "show-label"],
        "showHintText": [4, "show-hint-text"],
        "showHelpIcon": [4, "show-help-icon"],
        "showLeadingIcon": [4, "show-leading-icon"],
        "showTrailingIcon": [4, "show-trailing-icon"],
        "error": [4],
        "disabled": [4],
        "required": [4],
        "helpIconTooltip": [1, "help-icon-tooltip"],
        "leadingIcon": [1, "leading-icon"],
        "trailingIcon": [1, "trailing-icon"],
        "value": [1025],
        "name": [1],
        "defaultValue": [1, "default-value"],
        "validationMessage": [1, "validation-message"],
        "type": [1],
        "width": [1],
        "readOnly": [4, "read-only"],
        "state": [1],
        "isFocused": [32],
        "isHovered": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-input-text", "bh-label", "bh-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-input-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhInputText);
            }
            break;
        case "bh-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bh-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhInputText as B, defineCustomElement as d };
//# sourceMappingURL=p-Dbl0HXBJ.js.map

//# sourceMappingURL=p-Dbl0HXBJ.js.map