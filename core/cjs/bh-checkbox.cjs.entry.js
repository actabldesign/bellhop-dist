'use strict';

var index = require('./index-tZqSQc8E.js');
var form = require('./form-9mbajZ3y.js');

const bhCheckboxCss = ":host{display:inline-block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.checkbox-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.checkbox-wrapper{display:inline-flex;align-items:flex-start;gap:8px;cursor:pointer;user-select:none;position:relative}.checkbox-wrapper-disabled{cursor:not-allowed}.checkbox{display:inline-flex;align-items:center;justify-content:center;outline:none;user-select:none;transition:all 0.2s ease;box-sizing:border-box;background:var(--color-white);border:2px solid var(--color-neutral-300);position:relative;flex-shrink:0;pointer-events:none}.checkbox-sm{width:16px;height:16px;border-radius:var(--radius-xs);margin-top:3px}.checkbox-md{width:20px;height:20px;border-radius:var(--radius-sm);margin-top:2px}.checkbox-wrapper:not(.checkbox-wrapper-with-label) .checkbox-sm,.checkbox-wrapper:not(.checkbox-wrapper-with-label) .checkbox-md{margin-top:0}.checkbox.checkbox-checked{background:var(--color-brand-600);border-color:var(--color-brand-600);color:var(--color-white)}.checkbox.checkbox-hover:not(.checkbox-disabled){background:var(--color-neutral-100);border-color:var(--color-neutral-300)}.checkbox.checkbox-checked.checkbox-hover:not(.checkbox-disabled){background:var(--color-brand-700);border-color:var(--color-brand-700)}.checkbox.checkbox-focused:not(.checkbox-disabled){border-color:var(--color-neutral-300);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.checkbox.checkbox-checked.checkbox-focused:not(.checkbox-disabled){background:var(--color-brand-600);border-color:var(--color-brand-600);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.checkbox.checkbox-disabled{background:var(--color-neutral-50);border-color:var(--color-neutral-300);cursor:not-allowed;opacity:1}.checkbox.checkbox-checked.checkbox-disabled{background:var(--color-neutral-50);border:2px solid var(--color-neutral-300);color:var(--color-neutral-300)}.checkbox-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);line-height:1;font-variation-settings:'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 20}.checkbox .check-icon{color:var(--color-white)}.checkbox-disabled .check-icon{color:var(--color-neutral-300)}.checkbox .minus-icon{color:var(--color-white)}.checkbox-disabled .minus-icon{color:var(--color-neutral-300)}.checkbox-sm .checkbox-icon{font-size:14px}.checkbox-md .checkbox-icon{font-size:18px}.checkbox-control{display:inline-flex;align-items:flex-start;cursor:pointer}.checkbox-wrapper-disabled .checkbox-control{cursor:not-allowed}";

const BhCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhChange = index.createEvent(this, "bhChange");
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
    inputRef;
    uniqueId = `bh-checkbox-${Math.random().toString(36).substring(2, 9)}`;
    /** Checkbox size */
    size = 'md';
    /** Checked state */
    checked = false;
    /** Indeterminate state */
    indeterminate = false;
    /** Disabled state */
    disabled = false;
    /** Name attribute for form submission */
    name = '';
    /** Value attribute for form submission */
    value = 'on';
    /** Optional label text - when provided, renders checkbox with label */
    label = '';
    /** Optional supporting text below the label */
    supportingText = '';
    /** Whether the checkbox is required */
    required = false;
    /** Default checked state for form reset */
    defaultChecked = false;
    /** Internal hover state */
    isHovered = false;
    /** Internal focus state */
    isFocused = false;
    /** Emitted when checkbox state changes via user interaction */
    bhChange;
    handleCheckedChange(newValue) {
        if (this.inputRef) {
            this.inputRef.checked = newValue;
        }
    }
    handleIndeterminateChange(newValue) {
        if (this.inputRef) {
            this.inputRef.indeterminate = newValue;
        }
    }
    componentDidLoad() {
        if (this.inputRef) {
            this.inputRef.indeterminate = this.indeterminate;
        }
        form.syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        form.validateRequired(this.internals, this.required, this.checked);
    }
    formResetCallback() {
        this.checked = this.defaultChecked;
        this.indeterminate = false;
        if (this.inputRef) {
            this.inputRef.checked = this.defaultChecked;
            this.inputRef.indeterminate = false;
        }
        form.syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        form.validateRequired(this.internals, this.required, this.checked);
    }
    handleChange = (event) => {
        event.stopPropagation();
        if (this.disabled)
            return;
        const input = event.target;
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = false;
            if (this.inputRef) {
                this.inputRef.indeterminate = false;
                this.inputRef.checked = false;
            }
        }
        else {
            this.checked = input.checked;
        }
        form.syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        form.validateRequired(this.internals, this.required, this.checked);
        this.bhChange.emit(this.checked);
    };
    handleMouseEnter = () => {
        this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    handleFocus = () => {
        this.isFocused = true;
    };
    handleBlur = () => {
        this.isFocused = false;
    };
    renderCheckboxControl() {
        const isCheckedState = this.checked || this.indeterminate;
        const checkboxClasses = {
            'checkbox': true,
            [`checkbox-${this.size}`]: true,
            'checkbox-checked': isCheckedState,
            'checkbox-disabled': this.disabled,
            'checkbox-focused': this.isFocused && !this.disabled,
            'checkbox-hover': this.isHovered && !this.disabled,
        };
        return (index.h("div", { class: "checkbox-control", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, index.h("input", { ref: (el) => (this.inputRef = el), type: "checkbox", id: this.uniqueId, name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, class: "checkbox-input", onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, "aria-describedby": this.supportingText ? `${this.uniqueId}-description` : undefined }), index.h("div", { class: checkboxClasses, part: "checkbox", "aria-hidden": "true" }, this.checked && !this.indeterminate && (index.h("span", { class: "material-symbols-outlined checkbox-icon check-icon" }, "check")), this.indeterminate && (index.h("span", { class: "material-symbols-outlined checkbox-icon minus-icon" }, "remove")))));
    }
    render() {
        const hasLabel = this.label || this.supportingText;
        const wrapperClasses = {
            'checkbox-wrapper': true,
            'checkbox-wrapper-with-label': !!hasLabel,
            'checkbox-wrapper-disabled': this.disabled,
        };
        // Render with bh-label when label/supportingText is provided
        if (hasLabel) {
            return (index.h("div", { class: wrapperClasses, part: "wrapper" }, index.h("bh-label", { layout: "inline-start", label: this.label, supportingText: this.supportingText, disabled: this.disabled, for: this.uniqueId }, this.renderCheckboxControl())));
        }
        // Standalone checkbox without label
        return (index.h("div", { class: wrapperClasses, part: "wrapper" }, this.renderCheckboxControl()));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "checked": ["handleCheckedChange"],
        "indeterminate": ["handleIndeterminateChange"]
    }; }
};
BhCheckbox.style = bhCheckboxCss;

exports.bh_checkbox = BhCheckbox;
//# sourceMappingURL=bh-checkbox.entry.cjs.js.map
