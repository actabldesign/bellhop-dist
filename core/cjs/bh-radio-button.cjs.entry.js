'use strict';

var index = require('./index-tZqSQc8E.js');
var form = require('./form-9mbajZ3y.js');

const bhRadioButtonCss = ":host{display:inline-block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.radio{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;user-select:none;transition:background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;box-sizing:border-box;background:var(--color-white);border:2px solid var(--color-neutral-300);border-radius:var(--radius-full);position:relative;flex-shrink:0}.radio-sm{width:16px;height:16px}.radio-md{width:20px;height:20px}.radio.radio-selected{background:var(--color-brand-600);border-color:var(--color-brand-600);animation:fillExpand 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.radio:hover:not(.radio-disabled){background:var(--color-neutral-100);border-color:var(--color-neutral-300)}.radio.radio-selected:hover:not(.radio-disabled){background:var(--color-brand-600);border-color:var(--color-brand-600)}.radio.radio-focused:not(.radio-disabled){border-color:var(--color-neutral-300);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.radio.radio-selected.radio-focused:not(.radio-disabled){background:var(--color-brand-600);border-color:var(--color-brand-600);box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}.radio.radio-disabled{background:var(--color-neutral-50);border-color:var(--color-neutral-300);cursor:not-allowed;opacity:1}.radio.radio-selected.radio-disabled{background:var(--color-neutral-50);border:2px solid var(--color-neutral-300)}.radio-dot{width:6px;height:6px;border-radius:var(--radius-full);background:var(--color-white);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.radio-sm .radio-dot{width:4px;height:4px}.radio-disabled .radio-dot{background:var(--color-neutral-300)}.radio:focus{outline:none}.radio:focus:not(.radio-disabled){box-shadow:0px 0px 0px 4px var(--color-brand-100),\n    0px 0px 0px 2px var(--color-white)}@keyframes fillExpand{0%{transform:scale(0.95)}50%{transform:scale(1.05)}100%{transform:scale(1)}}.radio-wrapper{display:inline-block}.radio-control{display:inline-flex;align-items:flex-start;cursor:pointer;outline:none}.radio-wrapper-disabled .radio-control{cursor:not-allowed}.radio-wrapper-with-label .radio-sm{margin-top:3px}.radio-wrapper-with-label .radio-md{margin-top:2px}";

const BhRadioButton = class {
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
        form.syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
    }
    formResetCallback() {
        this.selected = false;
        form.syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
    }
    handleClick = () => {
        if (this.disabled || this.selected)
            return;
        this.selected = true;
        form.syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
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
        return (index.h("div", { class: "radio-control", onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: "radio", "aria-checked": String(this.selected), "aria-disabled": String(this.disabled) }, index.h("div", { class: radioClasses, part: "radio" }, this.selected && index.h("div", { class: "radio-dot" }))));
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
            return (index.h("div", { class: wrapperClasses, part: "wrapper" }, index.h("bh-label", { layout: "inline-start", label: this.label, supportingText: this.supportingText, disabled: this.disabled, for: this.uniqueId }, this.renderRadioControl())));
        }
        // Standalone radio button without label
        return (index.h("div", { class: wrapperClasses, part: "wrapper" }, this.renderRadioControl()));
    }
    static get formAssociated() { return true; }
};
BhRadioButton.style = bhRadioButtonCss;

exports.bh_radio_button = BhRadioButton;
//# sourceMappingURL=bh-radio-button.entry.cjs.js.map
