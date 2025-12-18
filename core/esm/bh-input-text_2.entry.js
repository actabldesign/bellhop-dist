import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';
import { s as syncFormValue, u as updateValidity } from './form-CPgx0iFq.js';

const bhInputTextCss = ":host{display:block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm, 8px);width:100%}.input-container{display:flex;align-items:center;gap:var(--spacing-md, 12px);padding:var(--spacing-md, 12px);height:36px;width:100%;background:var(--color-white, #ffffff);border:1px solid var(--color-neutral-300, #d0d5dd);border-radius:var(--spacing-md, 8px);transition:all 0.2s ease-in-out;cursor:text;box-sizing:border-box}.input-container.input-container-with-leading{padding:var(--spacing-md, 12px) var(--spacing-lg, 16px)}.input-container.input-container-hover{border-color:var(--color-brand-500, #7f56d9)}.input-container.input-container-focused{border-color:var(--color-brand-500, #7f56d9);box-shadow:0 0 0 1px var(--color-brand-500, #7f56d9)}.input-container.input-container-disabled{opacity:0.5;cursor:not-allowed;background:var(--color-neutral-50, #f9fafb)}.input-container.input-container-error{border-color:var(--color-error-300, #fda29b)}.input-container.input-container-error.input-container-hover{border-color:var(--color-error-500, #f05250)}.input-container.input-container-error.input-container-focused{border-color:var(--color-brand-600, #6941c6)}.input-content{display:flex;align-items:center;gap:var(--spacing-md, 12px);flex:1;height:100%;min-width:0}.input-element{flex:1;height:100%;border:none;outline:none;background:transparent;font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-800, #1d2939);min-width:60px;padding:0}.input-element:focus{outline:none;border:none;box-shadow:none}.input-element::placeholder{color:var(--color-neutral-500, #667085)}.input-element:disabled{cursor:not-allowed}.leading-icon,.trailing-icon{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-500, #667085);user-select:none;flex-shrink:0;cursor:default;transition:color 0.2s ease-in-out}.input-container-focused .leading-icon,.input-container-focused .trailing-icon{color:var(--color-brand-600, #6941c6)}.hint-text{font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-600, #475467)}.hint-text.hint-error{color:var(--color-error-600, #dc2626)}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:20px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhInputText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhInput = createEvent(this, "bhInput");
        this.bhFocus = createEvent(this, "bhFocus");
        this.bhBlur = createEvent(this, "bhBlur");
        this.bhHelpClick = createEvent(this, "bhHelpClick");
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
        return (h("div", { key: 'f518e4c3140c3407e3f0ec864ddbe5e923ec6fdb', class: "input-wrapper", part: "wrapper", style: wrapperStyle }, h("bh-label", { key: 'b5d5afff678974697a617fe4753e445a37957a53', label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: this.handleHelpClick }, h("div", { key: '4254972b8386826b614928c210399d6e113b3d43', class: containerClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: '7ed52780a55645b81eef2334914903045c3680cc', class: "input-content" }, this.showLeadingIcon && (h("span", { key: '6e870c8c4677d9d9f900298e8205f072f9024348', class: "material-symbols-outlined leading-icon" }, this.leadingIcon)), h("input", { key: '23579144195274ac413d24a5811d44e3ce072047', ref: (el) => (this.inputEl = el), type: this.type, class: "input-element", name: this.name, value: this.value, placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readOnly, required: this.required, "aria-label": this.label, "aria-describedby": this.showHintText && this.hintText ? 'hint-text' : undefined, "aria-invalid": String(this.error), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, part: "input" }), this.showTrailingIcon && (h("span", { key: '840dad44c2f5bc9060e5a09ff86e9aebfdb8d950', class: "material-symbols-outlined trailing-icon" }, this.trailingIcon))))), this.showHintText && this.hintText && (h("div", { key: '69dfc89a179b2672c0776e0bb75ceb957b9cb1e0', class: { 'hint-text': true, 'hint-error': this.error }, id: "hint-text" }, this.hintText))));
    }
    static get formAssociated() { return true; }
};
BhInputText.style = bhInputTextCss;

const bhPickerMenuCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.picker-menu{width:fit-content;min-width:320px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0px 32px 64px -12px rgba(64, 73, 104, 0.14),\n    0px 0px 1px 1px rgba(64, 73, 104, 0.1);border:1px solid var(--color-neutral-200);overflow:hidden;flex-shrink:0;position:relative;box-sizing:border-box}.picker-menu.animate-dropdown-enter{animation:dropdownEnter 0.15s ease-out forwards}.picker-menu.animate-dropdown-exit{animation:dropdownExit 0.15s ease-out forwards}@keyframes dropdownEnter{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes dropdownExit{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}.picker-menu.no-footer{padding-bottom:var(--spacing-md)}.picker-menu-footer{border-top:1px solid var(--color-neutral-200);padding:var(--spacing-xl) var(--spacing-xl);background:var(--color-white)}.picker-menu-actions{display:flex;justify-content:flex-end;align-items:center;gap:var(--spacing-lg)}.picker-menu-actions.has-today-button{justify-content:space-between}.picker-menu-main-actions{display:flex;gap:var(--spacing-lg)}";

const BhPickerMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhChange = createEvent(this, "bhChange");
        this.bhMonthYearSelect = createEvent(this, "bhMonthYearSelect");
        this.bhCancel = createEvent(this, "bhCancel");
        this.bhApply = createEvent(this, "bhApply");
        this.bhToday = createEvent(this, "bhToday");
    }
    /**
     * Minimum year in the picker
     */
    minYear = 1998;
    /**
     * Maximum year in the picker
     */
    maxYear = 2060;
    /**
     * Whether the picker is disabled
     */
    disabled = false;
    /**
     * Array of disabled months
     */
    disabledMonths = [];
    /**
     * Animation class for the menu
     */
    animationClass = 'animate-dropdown-enter';
    /**
     * Whether the menu is visible
     */
    visible = true;
    /**
     * Whether to show the footer with action buttons
     */
    showFooter = true;
    /**
     * Whether to show the today button
     */
    showTodayButton = false;
    /**
     * Whether the apply button is disabled
     */
    disableApply = false;
    /**
     * Current value
     */
    value;
    isClosing = false;
    shouldRender = true;
    selectedMonth = null;
    selectedYear = null;
    /**
     * Event emitted when value changes
     */
    bhChange;
    /**
     * Event emitted when a month/year is selected
     */
    bhMonthYearSelect;
    /**
     * Event emitted when cancel is clicked
     */
    bhCancel;
    /**
     * Event emitted when apply is clicked
     */
    bhApply;
    /**
     * Event emitted when today button is clicked
     */
    bhToday;
    handleVisibleChange(newValue) {
        if (newValue) {
            this.shouldRender = true;
            this.isClosing = false;
        }
        else {
            this.isClosing = true;
            setTimeout(() => {
                this.shouldRender = false;
                this.isClosing = false;
            }, 150);
        }
    }
    handleValueChange(newValue) {
        if (newValue) {
            this.selectedMonth = newValue.month;
            this.selectedYear = newValue.year;
        }
    }
    componentWillLoad() {
        this.shouldRender = this.visible;
        if (this.value) {
            this.selectedMonth = this.value.month;
            this.selectedYear = this.value.year;
        }
        else {
            // Initialize with current date
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            if (currentYear >= this.minYear && currentYear <= this.maxYear) {
                this.selectedMonth = currentMonth;
                this.selectedYear = currentYear;
            }
            else if (currentYear < this.minYear) {
                this.selectedYear = this.minYear;
                this.selectedMonth = currentMonth;
            }
            else {
                this.selectedYear = this.maxYear;
                this.selectedMonth = currentMonth;
            }
        }
    }
    handleMonthYearSelect = (event) => {
        const selection = event.detail;
        this.selectedMonth = selection.month;
        this.selectedYear = selection.year;
        this.bhChange.emit(selection);
        this.bhMonthYearSelect.emit(selection);
    };
    handleCancel = () => {
        this.bhCancel.emit();
    };
    handleApply = () => {
        this.bhApply.emit();
    };
    handleToday = () => {
        this.bhToday.emit();
    };
    render() {
        if (!this.shouldRender) {
            return null;
        }
        const menuClasses = {
            'picker-menu': true,
            'animate-dropdown-exit': this.isClosing,
            [this.animationClass]: !this.isClosing,
            'no-footer': !this.showFooter,
        };
        return (h(Host, null, h("div", { class: menuClasses }, h("slot", null, h("bh-month-picker-content", { minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledMonths: this.disabledMonths, scrollable: true, selectedMonth: this.selectedMonth ?? undefined, selectedYear: this.selectedYear ?? undefined, onBhChange: this.handleMonthYearSelect })), this.showFooter && (h("div", { class: "picker-menu-footer" }, h("div", { class: `picker-menu-actions ${this.showTodayButton ? 'has-today-button' : ''}` }, this.showTodayButton && (h("bh-button", { hierarchy: "secondary", size: "sm", icon: "only", iconName: "today", onBhClick: this.handleToday })), h("div", { class: "picker-menu-main-actions" }, h("bh-button", { hierarchy: "secondary", size: "sm", label: "Cancel", onBhClick: this.handleCancel }), h("bh-button", { hierarchy: "primary", size: "sm", label: "Apply", disabled: this.disableApply, onBhClick: this.handleApply }))))))));
    }
    static get watchers() { return {
        "visible": ["handleVisibleChange"],
        "value": ["handleValueChange"]
    }; }
};
BhPickerMenu.style = bhPickerMenuCss;

export { BhInputText as bh_input_text, BhPickerMenu as bh_picker_menu };
//# sourceMappingURL=bh-input-text.bh-picker-menu.entry.js.map
