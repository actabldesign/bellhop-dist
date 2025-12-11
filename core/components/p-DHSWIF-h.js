import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$3 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$2 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$1 } from './p-CDgBIIbC.js';

const bhPickerMenuCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.picker-menu{width:fit-content;min-width:320px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0px 32px 64px -12px rgba(64, 73, 104, 0.14),\n    0px 0px 1px 1px rgba(64, 73, 104, 0.1);border:1px solid var(--color-neutral-200);overflow:hidden;flex-shrink:0;position:relative;box-sizing:border-box}.picker-menu.animate-dropdown-enter{animation:dropdownEnter 0.15s ease-out forwards}.picker-menu.animate-dropdown-exit{animation:dropdownExit 0.15s ease-out forwards}@keyframes dropdownEnter{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes dropdownExit{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}.picker-menu.no-footer{padding-bottom:var(--spacing-md)}.picker-menu-footer{border-top:1px solid var(--color-neutral-200);padding:var(--spacing-xl) var(--spacing-xl);background:var(--color-white)}.picker-menu-actions{display:flex;justify-content:flex-end;align-items:center;gap:var(--spacing-lg)}.picker-menu-actions.has-today-button{justify-content:space-between}.picker-menu-main-actions{display:flex;gap:var(--spacing-lg)}";

const BhPickerMenu = /*@__PURE__*/ proxyCustomElement(class BhPickerMenu extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
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
    static get style() { return bhPickerMenuCss; }
}, [769, "bh-picker-menu", {
        "minYear": [2, "min-year"],
        "maxYear": [2, "max-year"],
        "disabled": [4],
        "disabledMonths": [16],
        "animationClass": [1, "animation-class"],
        "visible": [4],
        "showFooter": [4, "show-footer"],
        "showTodayButton": [4, "show-today-button"],
        "disableApply": [4, "disable-apply"],
        "value": [16],
        "isClosing": [32],
        "shouldRender": [32],
        "selectedMonth": [32],
        "selectedYear": [32]
    }, undefined, {
        "visible": ["handleVisibleChange"],
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-picker-menu", "bh-button", "bh-loader-spinner", "bh-month-picker-content"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-picker-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhPickerMenu);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bh-month-picker-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhPickerMenu as B, defineCustomElement as d };
//# sourceMappingURL=p-DHSWIF-h.js.map

//# sourceMappingURL=p-DHSWIF-h.js.map