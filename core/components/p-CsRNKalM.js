import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { s as syncCheckableFormValue, v as validateRequired } from './p-2KjdCYlS.js';

const bhToggleCss = ":host{display:inline-block}.toggle-wrapper{display:flex;align-items:center;gap:0}.toggle-with-text.toggle-size-sm{gap:var(--spacing-md)}.toggle-with-text.toggle-size-md{gap:var(--spacing-lg)}.toggle-switch{position:relative;display:inline-block;border-radius:var(--radius-full);cursor:pointer;transition:background-color 0.2s ease;outline:none;border:1px solid transparent;background:transparent;overflow:visible;padding:0}.toggle-switch:focus{outline:none}.toggle-switch.toggle-disabled{cursor:not-allowed;opacity:0.38}.toggle-switch.toggle-sm{width:36px;height:20px}.toggle-switch.toggle-md{width:40px;height:24px}.toggle-switch.toggle-unpressed{background-color:var(--color-neutral-300);border-color:transparent}.toggle-switch.toggle-unpressed.toggle-hover{background-color:var(--color-neutral-400);border-color:transparent}.toggle-switch.toggle-unpressed.toggle-focus{background-color:var(--color-neutral-200);border-color:transparent}.toggle-switch.toggle-unpressed.toggle-focus .toggle-button::after{content:'';position:absolute;top:-6px;left:-6px;right:-6px;bottom:-6px;border-radius:var(--radius-full);background:var(--color-neutral-600);opacity:0.12;pointer-events:none}.toggle-switch.toggle-unpressed.toggle-disabled{background-color:var(--color-neutral-100);border-color:transparent}.toggle-switch.toggle-pressed{background-color:var(--color-brand-600);border-color:var(--color-brand-600)}.toggle-switch.toggle-pressed.toggle-hover{background-color:var(--color-brand-700);border-color:var(--color-brand-700)}.toggle-switch.toggle-pressed.toggle-focus{background-color:var(--color-brand-600);border-color:var(--color-brand-600)}.toggle-switch.toggle-pressed.toggle-focus .toggle-button::after{content:'';position:absolute;top:-6px;left:-6px;right:-6px;bottom:-6px;border-radius:var(--radius-full);background:var(--color-brand-100);opacity:0.24;pointer-events:none}.toggle-switch.toggle-pressed.toggle-disabled{background-color:var(--color-neutral-200);border-color:var(--color-neutral-200)}.toggle-switch.toggle-pressed.toggle-disabled .toggle-button{background-color:var(--color-neutral-100)}.toggle-button{position:absolute;top:50%;transform:translateY(-50%);border-radius:var(--radius-full);background-color:var(--color-neutral-600);transition:all 0.2s ease}.toggle-switch.toggle-unpressed .toggle-button{background-color:var(--color-white)}.toggle-switch.toggle-sm.toggle-unpressed .toggle-button{width:16px;height:16px;left:1px}.toggle-switch.toggle-md.toggle-unpressed .toggle-button{width:20px;height:20px;left:1px}.toggle-switch.toggle-unpressed.toggle-hover .toggle-button{background-color:var(--color-white);box-shadow:var(--shadow-sm)}.toggle-switch.toggle-pressed .toggle-button{background-color:var(--color-white)}.toggle-switch.toggle-sm.toggle-pressed .toggle-button{width:16px;height:16px;left:calc(100% - 17px)}.toggle-switch.toggle-md.toggle-pressed .toggle-button{width:20px;height:20px;left:calc(100% - 21px)}.toggle-switch.toggle-pressed.toggle-hover .toggle-button{background-color:var(--color-white)}.toggle-switch.toggle-disabled .toggle-button{background-color:var(--color-neutral-400);box-shadow:none}.toggle-switch.toggle-sm.toggle-unpressed.toggle-disabled .toggle-button{width:16px;height:16px;left:2px;background-color:var(--color-neutral-400)}.toggle-switch.toggle-md.toggle-unpressed.toggle-disabled .toggle-button{width:16px;height:16px;left:4px;background-color:var(--color-neutral-400)}.toggle-switch.toggle-sm.toggle-pressed.toggle-disabled .toggle-button{width:16px;height:16px;left:calc(100% - 17px);background-color:var(--color-neutral-400)}.toggle-switch.toggle-md.toggle-pressed.toggle-disabled .toggle-button{width:20px;height:20px;left:calc(100% - 21px);background-color:var(--color-white)}.toggle-text{display:flex;flex-direction:column;flex:1}.toggle-label{color:var(--color-neutral-700);font-family:var(--font-inter);font-weight:var(--weight-medium);text-align:left;margin:0;line-height:1.5}.toggle-label.toggle-label-sm{font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.toggle-label.toggle-label-md{font-size:var(--text-md-size);line-height:var(--text-md-line)}.toggle-supporting-text{color:var(--color-neutral-600);font-family:var(--font-inter);font-weight:var(--weight-regular);font-size:var(--text-sm-size);line-height:var(--text-sm-line);text-align:left;margin:0;margin-top:var(--spacing-xxs)}@media (prefers-reduced-motion: reduce){.toggle-switch,.toggle-button{transition:none}}@media (prefers-contrast: high){.toggle-switch.toggle-unpressed{border:2px solid currentColor}.toggle-switch.toggle-pressed{border:2px solid currentColor}}.toggle-switch:focus-visible .toggle-button::after{content:'';position:absolute;top:-6px;left:-6px;right:-6px;bottom:-6px;border-radius:var(--radius-full);background:currentColor;opacity:0.24;pointer-events:none}";

const BhToggle = /*@__PURE__*/ proxyCustomElement(class BhToggle extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhChange = createEvent(this, "bhChange");
        this.internals = this.attachInternals();
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
        return (h("div", { key: '59ea31ccba3b8a5d19d991728abfa832af696c22', class: wrapperClasses, part: "wrapper" }, h("div", { key: '6a379c430ad0132a7bea6d72e8eaf48eb3444a7e', class: switchClasses, onClick: this.handleToggle, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: "switch", "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": this.label || undefined, part: "switch" }, h("div", { key: '3e9914d0096f303fd19aa44881f8463b5846b1ed', class: buttonClasses, part: "button" })), this.showText && (this.label || this.supportingText) && (h("div", { key: '9e46745a9ed60dc29c4da37e503576b40ece91c6', class: "toggle-text" }, this.label && (h("span", { key: 'f53a5c4d6fe6a3c2904fd05bc54603128995099c', class: labelClasses }, this.label)), this.supportingText && (h("div", { key: '1e4d3e0d5ccdb230306e74692309ae837b0d5ec4', class: "toggle-supporting-text" }, this.supportingText))))));
    }
    static get formAssociated() { return true; }
    static get style() { return bhToggleCss; }
}, [833, "bh-toggle", {
        "size": [1],
        "showText": [4, "show-text"],
        "label": [1],
        "supportingText": [1, "supporting-text"],
        "disabled": [4],
        "checked": [1028],
        "name": [1],
        "value": [1],
        "required": [4],
        "defaultChecked": [4, "default-checked"],
        "isFocused": [32],
        "isHovered": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhToggle);
            }
            break;
    } });
}
defineCustomElement();

export { BhToggle as B, defineCustomElement as d };
//# sourceMappingURL=p-CsRNKalM.js.map

//# sourceMappingURL=p-CsRNKalM.js.map