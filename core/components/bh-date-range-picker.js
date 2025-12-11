import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$b } from './p-DTgHvmlL.js';
import { d as defineCustomElement$a } from './p-D3OkBDd3.js';
import { d as defineCustomElement$9 } from './p-CiQqgc-m.js';
import { d as defineCustomElement$8 } from './p-54wXxbeh.js';
import { d as defineCustomElement$7 } from './p-Dbl0HXBJ.js';
import { d as defineCustomElement$6 } from './p-MIbEYjCv.js';
import { d as defineCustomElement$5 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$4 } from './p-CDgBIIbC.js';
import { d as defineCustomElement$3 } from './p-DHSWIF-h.js';
import { d as defineCustomElement$2 } from './p-D6kh9oF2.js';

const bhDateRangePickerCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:inline-block;position:relative}.date-range-picker-container{position:relative;display:inline-block}.date-range-picker-trigger{cursor:pointer}.date-range-inputs{display:flex;gap:var(--spacing-md)}.date-range-picker-menu-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs)}.date-range-picker-menu-container bh-picker-menu::part(menu){width:auto}.date-range-picker-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:transparent}";

const BhDateRangePicker$1 = /*@__PURE__*/ proxyCustomElement(class BhDateRangePicker extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhChange = createEvent(this, "bhChange");
        this.bhDateRangeSelect = createEvent(this, "bhDateRangeSelect");
    }
    /**
     * Variant of the date range picker trigger
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
     * Label for start date input
     */
    startLabel = 'Start Date';
    /**
     * Label for end date input
     */
    endLabel = 'End Date';
    /**
     * Placeholder for start date
     */
    startPlaceholder = 'Choose start date';
    /**
     * Placeholder for end date
     */
    endPlaceholder = 'Choose end date';
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
    showFooter = true;
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays = false;
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
     * Event emitted when a date range is selected
     */
    bhDateRangeSelect;
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
    formatDate(date) {
        if (!date)
            return '';
        const month = (date.month + 1).toString().padStart(2, '0');
        const day = date.day.toString().padStart(2, '0');
        return `${month}/${day}/${date.year}`;
    }
    getButtonLabel() {
        if (!this.selectedValue || !this.selectedValue.startDate)
            return 'Select date range';
        const startStr = this.formatDate(this.selectedValue.startDate);
        const endStr = this.selectedValue.endDate ? this.formatDate(this.selectedValue.endDate) : '';
        if (endStr) {
            return `${startStr} - ${endStr}`;
        }
        return startStr;
    }
    handleTriggerClick = () => {
        if (this.disabled)
            return;
        if (!this.isMenuOpen && this.showFooter) {
            this.tempSelection = this.selectedValue;
        }
        this.isMenuOpen = !this.isMenuOpen;
    };
    handleDateRangeSelectEvent(event) {
        // Stop propagation to prevent the event from bubbling further
        event.stopPropagation();
        const range = event.detail;
        if (this.showFooter) {
            // With footer: update temp selection, user clicks Apply to confirm
            this.tempSelection = range;
        }
        else {
            // Without footer: update value immediately, close only when range is complete
            this.selectedValue = range;
            if (range?.startDate && range?.endDate) {
                this.bhChange.emit(range);
                this.bhDateRangeSelect.emit(range);
                this.closeMenu();
            }
        }
    }
    handleMenuCancel = () => {
        this.tempSelection = null;
        this.closeMenu();
    };
    handleMenuApply = () => {
        if (this.tempSelection) {
            this.selectedValue = this.tempSelection;
            this.bhChange.emit(this.tempSelection);
            this.bhDateRangeSelect.emit(this.tempSelection);
            this.tempSelection = null;
        }
        this.closeMenu();
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
        return (h(Host, { key: '08aacf3080c26252ad9016db0239f6ec59e18464' }, h("div", { key: 'ead0f755f1068c1a6b66d13b3499c0eb3dc79a81', class: "date-range-picker-container" }, this.variant === 'dropdown-outlined' && (h("div", { key: '18aa33151bafd73fc7bd8cb5f37226d7946782c3', class: "date-range-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: 'dd1a3bdf7b1a3fa48717cf3d6ae56bc5c9523821', hierarchy: "secondary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'dropdown-ghost' && (h("div", { key: 'c569af65f4722055339711fe824c845b7f9199b4', class: "date-range-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: 'd23bc5b104c6bd0b1c5bb8453e390805ab50df4e', hierarchy: "tertiary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'input' && (h("div", { key: '2a238184c8446070517f80142ef9871f45d7a0a5', class: "date-range-picker-trigger" }, h("div", { key: '2def41d08a9b0d0e94ebff478ca74a89ba2587ca', class: "date-range-inputs", onClick: this.handleTriggerClick }, h("bh-input-text", { key: 'be1917751e940c2bc66a6f0c3d1b558a7d26ae60', label: this.startLabel, placeholder: this.startPlaceholder, value: this.formatDate(this.selectedValue?.startDate || null), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, readOnly: true }), h("bh-input-text", { key: '34f7c3b5ba5a528e15b88813374cb82964b1faee', label: this.endLabel, placeholder: this.endPlaceholder, value: this.formatDate(this.selectedValue?.endDate || null), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, readOnly: true })))), h("div", { key: '614f36cc1e0f2161ecdc071874949f914bfa4cb9', class: "date-range-picker-menu-container" }, h("bh-picker-menu", { key: '9a1fdc35f823cb14900a8085a5a566b5458aebfb', visible: this.isMenuOpen, showFooter: this.showFooter, disableApply: this.showFooter && (!this.tempSelection?.startDate || !this.tempSelection?.endDate), onBhCancel: this.handleMenuCancel, onBhApply: this.handleMenuApply }, h("bh-date-range-picker-content", { key: 'b15f784587af73c62aad69893cbf04c822c96136', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, value: this.tempSelection ?? this.selectedValue ?? undefined })))), (this.isMenuOpen || this.isMenuClosing) && (h("div", { key: '754601e50f509ba5032f8e915807f3835d25c6ff', class: "date-range-picker-backdrop", onClick: this.handleBackdropClick }))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return bhDateRangePickerCss; }
}, [769, "bh-date-range-picker", {
        "variant": [1],
        "minYear": [2, "min-year"],
        "maxYear": [2, "max-year"],
        "disabled": [4],
        "disabledDates": [16],
        "startLabel": [1, "start-label"],
        "endLabel": [1, "end-label"],
        "startPlaceholder": [1, "start-placeholder"],
        "endPlaceholder": [1, "end-placeholder"],
        "inputWidth": [1, "input-width"],
        "showLabel": [4, "show-label"],
        "showFooter": [4, "show-footer"],
        "showOtherMonthDays": [4, "show-other-month-days"],
        "value": [16],
        "selectedValue": [32],
        "tempSelection": [32],
        "isMenuOpen": [32],
        "isMenuClosing": [32]
    }, [[0, "bhDateRangeSelect", "handleDateRangeSelectEvent"]], {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-date-range-picker", "bh-button", "bh-button-icon", "bh-date-picker-content", "bh-date-range-picker-content", "bh-input-text", "bh-label", "bh-loader-spinner", "bh-month-picker-content", "bh-picker-menu", "bh-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-date-range-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhDateRangePicker$1);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "bh-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "bh-date-picker-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "bh-date-range-picker-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "bh-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "bh-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bh-month-picker-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bh-picker-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const BhDateRangePicker = BhDateRangePicker$1;
const defineCustomElement = defineCustomElement$1;

export { BhDateRangePicker, defineCustomElement };
//# sourceMappingURL=bh-date-range-picker.js.map

//# sourceMappingURL=bh-date-range-picker.js.map