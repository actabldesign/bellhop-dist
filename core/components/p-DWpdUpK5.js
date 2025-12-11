import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$9 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$8 } from './p-D3OkBDd3.js';
import { d as defineCustomElement$7 } from './p-CiQqgc-m.js';
import { d as defineCustomElement$6 } from './p-Dbl0HXBJ.js';
import { d as defineCustomElement$5 } from './p-MIbEYjCv.js';
import { d as defineCustomElement$4 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$3 } from './p-CDgBIIbC.js';
import { d as defineCustomElement$2 } from './p-DHSWIF-h.js';
import { d as defineCustomElement$1 } from './p-D6kh9oF2.js';

const bhDatePickerCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:inline-block;position:relative}.date-picker-container{position:relative;display:inline-block}.date-picker-trigger{cursor:pointer}.date-picker-trigger.input-field-container{position:relative}.calendar-icon-overlay{position:absolute;top:0;right:0;width:40px;height:100%;cursor:pointer;z-index:1}.date-picker-menu-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs)}.date-picker-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:transparent}";

const BhDatePicker = /*@__PURE__*/ proxyCustomElement(class BhDatePicker extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhChange = createEvent(this, "bhChange");
        this.bhDateSelect = createEvent(this, "bhDateSelect");
    }
    /**
     * Variant of the date picker trigger
     */
    variant = 'input';
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
     * Array of disabled dates
     */
    disabledDates = [];
    /**
     * Label for input variant
     */
    label = 'Select Date';
    /**
     * Placeholder text
     */
    placeholder = 'Choose date';
    /**
     * Width for input variant
     */
    inputWidth = '200px';
    /**
     * Whether to show the label
     */
    showLabel = true;
    /**
     * Whether to show the footer
     */
    showFooter = false;
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays = true;
    /**
     * Currently selected value
     */
    value;
    selectedValue = null;
    tempSelection = null;
    isMenuOpen = false;
    isMenuClosing = false;
    /**
     * Event emitted when value changes
     */
    bhChange;
    /**
     * Event emitted when a date is selected
     */
    bhDateSelect;
    handleValueChange(newValue) {
        if (newValue !== undefined) {
            this.selectedValue = newValue;
        }
    }
    componentWillLoad() {
        if (this.value) {
            this.selectedValue = this.value;
        }
    }
    getDisplayValue() {
        if (!this.selectedValue)
            return '';
        const month = (this.selectedValue.month + 1).toString().padStart(2, '0');
        const day = this.selectedValue.day.toString().padStart(2, '0');
        return `${month}/${day}/${this.selectedValue.year}`;
    }
    getButtonLabel() {
        return this.getDisplayValue() || this.placeholder;
    }
    handleTriggerClick = () => {
        if (this.disabled)
            return;
        if (!this.isMenuOpen && this.showFooter) {
            this.tempSelection = this.selectedValue;
        }
        this.isMenuOpen = !this.isMenuOpen;
    };
    handleInputFocus = () => {
        if (this.disabled)
            return;
        if (!this.isMenuOpen && this.showFooter) {
            this.tempSelection = this.selectedValue;
        }
        this.isMenuOpen = true;
    };
    handleDateSelect = (event) => {
        const date = event.detail;
        if (this.showFooter && date) {
            this.tempSelection = date;
        }
        else {
            this.selectedValue = date;
            this.bhChange.emit(date);
            this.bhDateSelect.emit(date);
            if (!this.showFooter) {
                this.closeMenu();
            }
        }
    };
    handleMenuCancel = () => {
        this.tempSelection = null;
        this.closeMenu();
    };
    handleMenuApply = () => {
        if (this.tempSelection) {
            this.selectedValue = this.tempSelection;
            this.tempSelection = null;
            this.bhChange.emit(this.selectedValue);
            this.bhDateSelect.emit(this.selectedValue);
        }
        this.closeMenu();
    };
    handleToday = () => {
        const today = new Date();
        const todayDate = {
            year: today.getFullYear(),
            month: today.getMonth(),
            day: today.getDate(),
        };
        if (this.showFooter) {
            this.tempSelection = todayDate;
        }
        else {
            this.selectedValue = todayDate;
            this.bhChange.emit(todayDate);
            this.bhDateSelect.emit(todayDate);
            this.closeMenu();
        }
    };
    closeMenu() {
        this.isMenuClosing = true;
        setTimeout(() => {
            this.isMenuOpen = false;
            this.isMenuClosing = false;
        }, 150);
    }
    handleBackdropClick = () => {
        this.handleMenuCancel();
    };
    render() {
        return (h(Host, { key: '29e1efd6476402ad435756ff4895450ca9a52bfd' }, h("div", { key: 'a9d75546adc101a3db9a36be5de5035e491bccba', class: "date-picker-container" }, this.variant === 'dropdown-outlined' && (h("div", { key: '3fa0e350bcb29915f551ed1a88a95e338bb8866b', class: "date-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: '2a8f49b10afe5e02a1d8f8549d6e413980864d20', hierarchy: "secondary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'dropdown-ghost' && (h("div", { key: 'e9e67c5ab963a23a02d2661fe275c55c9525c028', class: "date-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: 'bf5756be2585fe9a95db0731c691ec9843883369', hierarchy: "tertiary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'input' && (h("div", { key: '2a3ccf8e4d740933ac3b1f0641e60f4d1fd8a61d', class: "date-picker-trigger input-field-container" }, h("bh-input-text", { key: '6407caeea584c4a212753838a64f75aeac1b6b26', label: this.label, placeholder: this.placeholder, value: this.getDisplayValue(), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, onBhFocus: this.handleInputFocus }), h("div", { key: 'f65006b46edb59bb81b72113064a3a26509b0cce', class: "calendar-icon-overlay", onClick: this.handleTriggerClick }))), h("div", { key: 'c659843f314aacd2312ee77cefd8969ab14c4e16', class: "date-picker-menu-container" }, h("bh-picker-menu", { key: 'f19f84a533a904ea6852d9970100c2c4fe5e8cb2', visible: this.isMenuOpen, showFooter: this.showFooter, showTodayButton: this.showFooter, disableApply: this.showFooter && this.tempSelection === null, onBhCancel: this.handleMenuCancel, onBhApply: this.handleMenuApply, onBhToday: this.handleToday }, h("bh-date-picker-content", { key: 'a80f3bab6d3a9b3ae7868c85b0206c446a23bd7d', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, value: this.tempSelection ?? this.selectedValue ?? undefined, onBhDateSelect: this.handleDateSelect })))), (this.isMenuOpen || this.isMenuClosing) && (h("div", { key: 'f1fe9e07fc2001482d04a235b22bfe97b2eb499c', class: "date-picker-backdrop", onClick: this.handleBackdropClick }))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return bhDatePickerCss; }
}, [769, "bh-date-picker", {
        "variant": [1],
        "minYear": [2, "min-year"],
        "maxYear": [2, "max-year"],
        "disabled": [4],
        "disabledDates": [16],
        "label": [1],
        "placeholder": [1],
        "inputWidth": [1, "input-width"],
        "showLabel": [4, "show-label"],
        "showFooter": [4, "show-footer"],
        "showOtherMonthDays": [4, "show-other-month-days"],
        "value": [16],
        "selectedValue": [32],
        "tempSelection": [32],
        "isMenuOpen": [32],
        "isMenuClosing": [32]
    }, undefined, {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-date-picker", "bh-button", "bh-button-icon", "bh-date-picker-content", "bh-input-text", "bh-label", "bh-loader-spinner", "bh-month-picker-content", "bh-picker-menu", "bh-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-date-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhDatePicker);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "bh-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bh-date-picker-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bh-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bh-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bh-month-picker-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-picker-menu":
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

export { BhDatePicker as B, defineCustomElement as d };
//# sourceMappingURL=p-DWpdUpK5.js.map

//# sourceMappingURL=p-DWpdUpK5.js.map