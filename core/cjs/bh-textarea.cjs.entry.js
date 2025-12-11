'use strict';

var index = require('./index-tZqSQc8E.js');
var form = require('./form-9mbajZ3y.js');

const bhTextareaCss = ":host{display:block}.textarea-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm);width:100%}.textarea-container{position:relative;display:flex;flex-direction:column;background:var(--color-white);border:1px solid var(--color-neutral-300);border-radius:8px;box-shadow:0px 1px 2px rgba(64, 73, 104, 0.06);transition:all 0.2s ease-in-out;min-height:128px}.textarea-container:hover:not(.textarea-container-disabled):not(.textarea-container-focused){border-color:var(--color-brand-500)}.textarea-container-focused{border-color:var(--color-brand-500);box-shadow:0 0 0 1px var(--color-brand-500)}.textarea-container-error{border-color:var(--color-error-300)}.textarea-container-error:hover:not(.textarea-container-focused){border-color:var(--color-error-500)}.textarea-container-error.textarea-container-focused{border-color:var(--color-brand-500);box-shadow:0 0 0 1px var(--color-brand-500)}.textarea-container-disabled{opacity:0.5;cursor:not-allowed;background:var(--color-neutral-50)}.textarea-content{width:100%}.textarea{box-sizing:border-box;padding:12px 14px;background:transparent;border:none;outline:none;font-family:var(--font-inter);font-weight:400;font-size:var(--text-sm-size);line-height:1.5;color:var(--color-neutral-900);width:100%;min-height:96px;resize:none;caret-color:var(--color-brand-500);flex:1;box-shadow:none}.textarea:focus{outline:none;border:none;box-shadow:none}.textarea::placeholder{color:var(--color-neutral-400)}.textarea:disabled{cursor:not-allowed;color:var(--color-neutral-400)}.hint-text{font-family:var(--font-inter);font-weight:400;font-size:var(--text-sm-size);line-height:1.43;color:var(--color-neutral-600)}.hint-text.hint-error{color:var(--color-error-600)}@media (max-width: 768px){.textarea{font-size:16px;}}";

const BhTextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhInput = index.createEvent(this, "bhInput");
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
        form.syncFormValue(this);
        form.updateValidity(this.internals, this.textareaEl, this.validationMessage);
    }
    formResetCallback() {
        this.value = this.defaultValue;
        if (this.textareaEl) {
            this.textareaEl.value = this.defaultValue;
        }
        form.syncFormValue(this);
        form.updateValidity(this.internals, this.textareaEl);
    }
    handleInput = (event) => {
        const target = event.target;
        this.value = target.value;
        this.bhInput.emit(this.value);
        form.syncFormValue(this);
        form.updateValidity(this.internals, this.textareaEl, this.validationMessage);
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
        return (index.h("div", { key: '26fc849122d7d1749963cf522cf29eb2551efef3', class: "textarea-wrapper", part: "wrapper" }, index.h("bh-label", { key: '32c9deddf4c40bf8ce2ff683289d4fff9c396f09', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpClick }, index.h("div", { key: 'eb8c890cd5ead8b49ac4932479e3aedd03d78701', class: containerClasses }, index.h("div", { key: 'c639ada3e32f70f807326c13120e294ca7e14c42', class: "textarea-content" }, index.h("textarea", { key: '9f9f6aa306d726bf1b13baf75dac1e5e9ef199d8', ref: (el) => (this.textareaEl = el), class: textareaClasses, name: this.name, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, rows: this.rows, maxLength: this.maxLength, style: { resize: this.resize }, "aria-label": this.label, "aria-describedby": this.showHintText && this.hintText ? 'hint-text' : undefined, "aria-invalid": String(this.error), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, part: "textarea" })))), this.showHintText && this.hintText && (index.h("div", { key: '2b0288f4b0c3888ad4f9ca2870f6da14e6e39cdf', class: { 'hint-text': true, 'hint-error': this.error }, id: "hint-text" }, this.hintText))));
    }
    static get formAssociated() { return true; }
};
BhTextarea.style = bhTextareaCss;

exports.bh_textarea = BhTextarea;
//# sourceMappingURL=bh-textarea.entry.cjs.js.map
