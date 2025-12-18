import { r as registerInstance, c as createEvent, h } from './index-nAAobRRQ.js';
import { a as syncCheckableFormValue, v as validateRequired } from './form-CPgx0iFq.js';

const bhToggleCss = ":host{display:inline-block}.toggle-wrapper{display:flex;align-items:center;gap:0}.toggle-with-text.toggle-size-sm{gap:var(--spacing-md)}.toggle-with-text.toggle-size-md{gap:var(--spacing-lg)}.toggle-switch{position:relative;display:inline-block;border-radius:var(--radius-full);cursor:pointer;transition:background-color 0.2s ease;outline:none;border:1px solid transparent;background:transparent;overflow:visible;padding:0}.toggle-switch:focus{outline:none}.toggle-switch.toggle-disabled{cursor:not-allowed;opacity:0.38}.toggle-switch.toggle-sm{width:36px;height:20px}.toggle-switch.toggle-md{width:40px;height:24px}.toggle-switch.toggle-unpressed{background-color:var(--color-neutral-300);border-color:transparent}.toggle-switch.toggle-unpressed.toggle-hover{background-color:var(--color-neutral-400);border-color:transparent}.toggle-switch.toggle-unpressed.toggle-focus{background-color:var(--color-neutral-200);border-color:transparent}.toggle-switch.toggle-unpressed.toggle-focus .toggle-button::after{content:'';position:absolute;top:-6px;left:-6px;right:-6px;bottom:-6px;border-radius:var(--radius-full);background:var(--color-neutral-600);opacity:0.12;pointer-events:none}.toggle-switch.toggle-unpressed.toggle-disabled{background-color:var(--color-neutral-100);border-color:transparent}.toggle-switch.toggle-pressed{background-color:var(--color-brand-600);border-color:var(--color-brand-600)}.toggle-switch.toggle-pressed.toggle-hover{background-color:var(--color-brand-700);border-color:var(--color-brand-700)}.toggle-switch.toggle-pressed.toggle-focus{background-color:var(--color-brand-600);border-color:var(--color-brand-600)}.toggle-switch.toggle-pressed.toggle-focus .toggle-button::after{content:'';position:absolute;top:-6px;left:-6px;right:-6px;bottom:-6px;border-radius:var(--radius-full);background:var(--color-brand-100);opacity:0.24;pointer-events:none}.toggle-switch.toggle-pressed.toggle-disabled{background-color:var(--color-neutral-200);border-color:var(--color-neutral-200)}.toggle-switch.toggle-pressed.toggle-disabled .toggle-button{background-color:var(--color-neutral-100)}.toggle-button{position:absolute;top:50%;transform:translateY(-50%);border-radius:var(--radius-full);background-color:var(--color-neutral-600);transition:all 0.2s ease}.toggle-switch.toggle-unpressed .toggle-button{background-color:var(--color-white)}.toggle-switch.toggle-sm.toggle-unpressed .toggle-button{width:16px;height:16px;left:1px}.toggle-switch.toggle-md.toggle-unpressed .toggle-button{width:20px;height:20px;left:1px}.toggle-switch.toggle-unpressed.toggle-hover .toggle-button{background-color:var(--color-white);box-shadow:var(--shadow-sm)}.toggle-switch.toggle-pressed .toggle-button{background-color:var(--color-white)}.toggle-switch.toggle-sm.toggle-pressed .toggle-button{width:16px;height:16px;left:calc(100% - 17px)}.toggle-switch.toggle-md.toggle-pressed .toggle-button{width:20px;height:20px;left:calc(100% - 21px)}.toggle-switch.toggle-pressed.toggle-hover .toggle-button{background-color:var(--color-white)}.toggle-switch.toggle-disabled .toggle-button{background-color:var(--color-neutral-400);box-shadow:none}.toggle-switch.toggle-sm.toggle-unpressed.toggle-disabled .toggle-button{width:16px;height:16px;left:2px;background-color:var(--color-neutral-400)}.toggle-switch.toggle-md.toggle-unpressed.toggle-disabled .toggle-button{width:16px;height:16px;left:4px;background-color:var(--color-neutral-400)}.toggle-switch.toggle-sm.toggle-pressed.toggle-disabled .toggle-button{width:16px;height:16px;left:calc(100% - 17px);background-color:var(--color-neutral-400)}.toggle-switch.toggle-md.toggle-pressed.toggle-disabled .toggle-button{width:20px;height:20px;left:calc(100% - 21px);background-color:var(--color-white)}.toggle-text{display:flex;flex-direction:column;flex:1}.toggle-label{color:var(--color-neutral-700);font-family:var(--font-inter);font-weight:var(--weight-medium);text-align:left;margin:0;line-height:1.5}.toggle-label.toggle-label-sm{font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.toggle-label.toggle-label-md{font-size:var(--text-md-size);line-height:var(--text-md-line)}.toggle-supporting-text{color:var(--color-neutral-600);font-family:var(--font-inter);font-weight:var(--weight-regular);font-size:var(--text-sm-size);line-height:var(--text-sm-line);text-align:left;margin:0;margin-top:var(--spacing-xxs)}@media (prefers-reduced-motion: reduce){.toggle-switch,.toggle-button{transition:none}}@media (prefers-contrast: high){.toggle-switch.toggle-unpressed{border:2px solid currentColor}.toggle-switch.toggle-pressed{border:2px solid currentColor}}.toggle-switch:focus-visible .toggle-button::after{content:'';position:absolute;top:-6px;left:-6px;right:-6px;bottom:-6px;border-radius:var(--radius-full);background:currentColor;opacity:0.24;pointer-events:none}";

const BhToggle = class {
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
     * The size of the toggle
     */
    size = 'md';
    /**
     * Whether to show the label and supporting text
     */
    showText = false;
    /**
     * The label text
     */
    label = '';
    /**
     * Supporting text below the label
     */
    supportingText = '';
    /**
     * Whether the toggle is disabled
     */
    disabled = false;
    /**
     * Whether the toggle is checked (controlled mode)
     */
    checked = false;
    /**
     * Name attribute for form submission
     */
    name = '';
    /**
     * Value when checked (default: 'on')
     */
    value = 'on';
    /**
     * Whether the toggle is required
     */
    required = false;
    /**
     * Default checked state for form reset
     */
    defaultChecked = false;
    /**
     * Internal focus state
     */
    isFocused = false;
    /**
     * Internal hover state
     */
    isHovered = false;
    /**
     * Emitted when the toggle state changes
     */
    bhChange;
    componentDidLoad() {
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    formResetCallback() {
        this.checked = this.defaultChecked;
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    handleToggle = () => {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
        this.bhChange.emit(this.checked);
    };
    handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleToggle();
        }
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
    render() {
        const wrapperClasses = {
            'toggle-wrapper': true,
            'toggle-with-text': this.showText,
            [`toggle-size-${this.size}`]: true,
        };
        const switchClasses = {
            'toggle-switch': true,
            'toggle-pressed': this.checked,
            'toggle-unpressed': !this.checked,
            [`toggle-${this.size}`]: true,
            'toggle-disabled': this.disabled,
            'toggle-focus': this.isFocused && !this.disabled,
            'toggle-hover': this.isHovered && !this.disabled,
        };
        const buttonClasses = {
            'toggle-button': true,
            'toggle-button-pressed': this.checked,
            'toggle-button-unpressed': !this.checked,
            [`toggle-button-${this.size}`]: true,
            'toggle-button-disabled': this.disabled,
        };
        const labelClasses = {
            'toggle-label': true,
            [`toggle-label-${this.size}`]: true,
        };
        return (h("div", { key: 'd07f9c9302c21ab8ecd3e515fe3f1794c2d689b5', class: wrapperClasses, part: "wrapper" }, h("div", { key: 'cfb224564cd11c8dacbf9c2426329acc96b703bd', class: switchClasses, onClick: this.handleToggle, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: "switch", "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": this.label || undefined, part: "switch" }, h("div", { key: '3e120ce6b54cca6bf06b49ad78784b8f44c5221a', class: buttonClasses, part: "button" })), this.showText && (this.label || this.supportingText) && (h("div", { key: 'a4feeb01f7188d35f7871e27cebfb65e72ce580d', class: "toggle-text" }, this.label && (h("span", { key: 'dfa097818d779cc768cde6972c0618c26fca10fa', class: labelClasses }, this.label)), this.supportingText && (h("div", { key: '332221a6cee6770d1b4026076a35bb6ff53054b1', class: "toggle-supporting-text" }, this.supportingText))))));
    }
    static get formAssociated() { return true; }
};
BhToggle.style = bhToggleCss;

export { BhToggle as bh_toggle };
//# sourceMappingURL=bh-toggle.entry.js.map
