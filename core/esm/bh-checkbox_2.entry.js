import { r as registerInstance, c as createEvent, a as getElement, h } from './index-nAAobRRQ.js';
import { a as syncCheckableFormValue, v as validateRequired } from './form-CPgx0iFq.js';

const bhCheckboxCss = ":host{display:inline-block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.checkbox-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.checkbox-wrapper{display:inline-flex;align-items:flex-start;gap:8px;cursor:pointer;user-select:none;position:relative}.checkbox-wrapper-disabled{cursor:not-allowed}.checkbox{display:inline-flex;align-items:center;justify-content:center;outline:none;user-select:none;transition:all 0.2s ease;box-sizing:border-box;background:var(--color-white);border:2px solid var(--color-neutral-300);position:relative;flex-shrink:0;pointer-events:none}.checkbox-sm{width:16px;height:16px;border-radius:var(--radius-xs);margin-top:3px}.checkbox-md{width:20px;height:20px;border-radius:var(--radius-sm);margin-top:2px}.checkbox-wrapper:not(.checkbox-wrapper-with-label) .checkbox-sm,.checkbox-wrapper:not(.checkbox-wrapper-with-label) .checkbox-md{margin-top:0}.checkbox.checkbox-checked{background:var(--color-brand-600);border-color:var(--color-brand-600);color:var(--color-white)}.checkbox.checkbox-hover:not(.checkbox-disabled){background:var(--color-neutral-100);border-color:var(--color-neutral-300)}.checkbox.checkbox-checked.checkbox-hover:not(.checkbox-disabled){background:var(--color-brand-700);border-color:var(--color-brand-700)}.checkbox.checkbox-focused:not(.checkbox-disabled){border-color:var(--color-neutral-300);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.checkbox.checkbox-checked.checkbox-focused:not(.checkbox-disabled){background:var(--color-brand-600);border-color:var(--color-brand-600);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.checkbox.checkbox-disabled{background:var(--color-neutral-50);border-color:var(--color-neutral-300);cursor:not-allowed;opacity:1}.checkbox.checkbox-checked.checkbox-disabled{background:var(--color-neutral-50);border:2px solid var(--color-neutral-300);color:var(--color-neutral-300)}.checkbox-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);line-height:1;font-variation-settings:'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 20}.checkbox .check-icon{color:var(--color-white)}.checkbox-disabled .check-icon{color:var(--color-neutral-300)}.checkbox .minus-icon{color:var(--color-white)}.checkbox-disabled .minus-icon{color:var(--color-neutral-300)}.checkbox-sm .checkbox-icon{font-size:14px}.checkbox-md .checkbox-icon{font-size:18px}.checkbox-control{display:inline-flex;align-items:flex-start;cursor:pointer}.checkbox-wrapper-disabled .checkbox-control{cursor:not-allowed}";

const BhCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhChange = createEvent(this, "bhChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    get el() { return getElement(this); }
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
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    formResetCallback() {
        this.checked = this.defaultChecked;
        this.indeterminate = false;
        if (this.inputRef) {
            this.inputRef.checked = this.defaultChecked;
            this.inputRef.indeterminate = false;
        }
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
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
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
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
    handleControlClick = () => {
        if (this.disabled)
            return;
        this.inputRef?.click();
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
        return (h("div", { class: "checkbox-control", onClick: this.handleControlClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("input", { ref: (el) => (this.inputRef = el), type: "checkbox", id: this.uniqueId, name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, class: "checkbox-input", onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, "aria-describedby": this.supportingText ? `${this.uniqueId}-description` : undefined }), h("div", { class: checkboxClasses, part: "checkbox", "aria-hidden": "true" }, this.checked && !this.indeterminate && (h("span", { class: "material-symbols-outlined checkbox-icon check-icon" }, "check")), this.indeterminate && (h("span", { class: "material-symbols-outlined checkbox-icon minus-icon" }, "remove")))));
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
            return (h("div", { class: wrapperClasses, part: "wrapper" }, h("bh-label", { layout: "inline-start", label: this.label, supportingText: this.supportingText, disabled: this.disabled, for: this.uniqueId }, this.renderCheckboxControl())));
        }
        // Standalone checkbox without label
        return (h("div", { class: wrapperClasses, part: "wrapper" }, this.renderCheckboxControl()));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "checked": ["handleCheckedChange"],
        "indeterminate": ["handleIndeterminateChange"]
    }; }
};
BhCheckbox.style = bhCheckboxCss;

const bhRadioButtonCss = ":host{display:inline-block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.radio{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;user-select:none;transition:background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;box-sizing:border-box;background:var(--color-white);border:2px solid var(--color-neutral-300);border-radius:var(--radius-full);position:relative;flex-shrink:0}.radio-sm{width:16px;height:16px}.radio-md{width:20px;height:20px}.radio.radio-selected{background:var(--color-brand-600);border-color:var(--color-brand-600);animation:fillExpand 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.radio:hover:not(.radio-disabled){background:var(--color-neutral-100);border-color:var(--color-neutral-300)}.radio.radio-selected:hover:not(.radio-disabled){background:var(--color-brand-600);border-color:var(--color-brand-600)}.radio.radio-focused:not(.radio-disabled){border-color:var(--color-neutral-300);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.radio.radio-selected.radio-focused:not(.radio-disabled){background:var(--color-brand-600);border-color:var(--color-brand-600);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.radio.radio-disabled{background:var(--color-neutral-50);border-color:var(--color-neutral-300);cursor:not-allowed;opacity:1}.radio.radio-selected.radio-disabled{background:var(--color-neutral-50);border:2px solid var(--color-neutral-300)}.radio-dot{width:6px;height:6px;border-radius:var(--radius-full);background:var(--color-white);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.radio-sm .radio-dot{width:4px;height:4px}.radio-disabled .radio-dot{background:var(--color-neutral-300)}.radio:focus{outline:none}.radio:focus:not(.radio-disabled){box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}@keyframes fillExpand{0%{transform:scale(0.95)}50%{transform:scale(1.05)}100%{transform:scale(1)}}.radio-wrapper{display:inline-block}.radio-control{display:inline-flex;align-items:flex-start;cursor:pointer;outline:none}.radio-wrapper-disabled .radio-control{cursor:not-allowed}.radio-wrapper-with-label .radio-sm{margin-top:3px}.radio-wrapper-with-label .radio-md{margin-top:2px}";

const BhRadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhChange = createEvent(this, "bhChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    /**
     * The size of the radio button
     */
    size = 'md';
    /**
     * Whether the radio button is selected
     */
    selected = false;
    /**
     * Whether the radio button is disabled
     */
    disabled = false;
    /**
     * The value associated with this radio button
     */
    value = '';
    /**
     * The name of the radio group
     */
    name = '';
    /**
     * Optional label text - when provided, renders radio with label
     */
    label = '';
    /**
     * Optional supporting text below the label
     */
    supportingText = '';
    /**
     * Track focus state internally
     */
    isFocused = false;
    /**
     * Track hover state internally
     */
    isHovered = false;
    /**
     * Emitted when the radio button selection changes
     */
    bhChange;
    componentDidLoad() {
        syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
    }
    formResetCallback() {
        this.selected = false;
        syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
    }
    handleClick = () => {
        if (this.disabled || this.selected)
            return;
        this.selected = true;
        syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
        this.bhChange.emit(this.value);
    };
    handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleClick();
        }
    };
    handleFocus = () => {
        this.isFocused = true;
    };
    handleBlur = () => {
        this.isFocused = false;
    };
    handleMouseEnter = () => {
        this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    uniqueId = `bh-radio-${Math.random().toString(36).substring(2, 9)}`;
    renderRadioControl() {
        const radioClasses = {
            'radio': true,
            [`radio-${this.size}`]: true,
            'radio-selected': this.selected,
            'radio-disabled': this.disabled,
            'radio-focused': this.isFocused && !this.disabled,
            'radio-hover': this.isHovered && !this.disabled,
        };
        return (h("div", { class: "radio-control", onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: "radio", "aria-checked": String(this.selected), "aria-disabled": String(this.disabled) }, h("div", { class: radioClasses, part: "radio" }, this.selected && h("div", { class: "radio-dot" }))));
    }
    render() {
        const hasLabel = this.label || this.supportingText;
        const wrapperClasses = {
            'radio-wrapper': true,
            'radio-wrapper-with-label': !!hasLabel,
            'radio-wrapper-disabled': this.disabled,
        };
        // Render with bh-label when label/supportingText is provided
        if (hasLabel) {
            return (h("div", { class: wrapperClasses, part: "wrapper" }, h("bh-label", { layout: "inline-start", label: this.label, supportingText: this.supportingText, disabled: this.disabled, for: this.uniqueId }, this.renderRadioControl())));
        }
        // Standalone radio button without label
        return (h("div", { class: wrapperClasses, part: "wrapper" }, this.renderRadioControl()));
    }
    static get formAssociated() { return true; }
};
BhRadioButton.style = bhRadioButtonCss;

export { BhCheckbox as bh_checkbox, BhRadioButton as bh_radio_button };
//# sourceMappingURL=bh-checkbox.bh-radio-button.entry.js.map
