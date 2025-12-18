'use strict';

var index = require('./index-DQwSUT6k.js');

const bhMonthPickerCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:inline-block;position:relative}.month-picker-container{position:relative;display:inline-block}.month-picker-trigger{cursor:pointer}.month-picker-trigger.input-field-container{position:relative}.calendar-icon-overlay{position:absolute;top:0;right:0;width:40px;height:100%;cursor:pointer;z-index:1}.month-picker-menu-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs)}.month-picker-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:transparent}";

const BhMonthPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhChange = index.createEvent(this, "bhChange");
        this.bhMonthYearSelect = index.createEvent(this, "bhMonthYearSelect");
    }
    /**
     * Variant of the month picker trigger
     */
    variant = 'dropdown-outlined';
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
     * Label for input variant
     */
    label = 'Select Month';
    /**
     * Placeholder text
     */
    placeholder = 'Choose month and year';
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
     * Event emitted when a month/year is selected
     */
    bhMonthYearSelect;
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
        // US convention: MM/YYYY (01/2025)
        const month = (this.selectedValue.month + 1).toString().padStart(2, '0');
        return `${month}/${this.selectedValue.year}`;
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
    handleMonthYearSelect = (event) => {
        const monthYear = event.detail;
        if (!monthYear)
            return;
        if (this.showFooter) {
            this.tempSelection = monthYear;
        }
        else {
            this.selectedValue = monthYear;
            this.bhChange.emit(monthYear);
            this.bhMonthYearSelect.emit(monthYear);
            this.closeMenu();
        }
    };
    handleMenuCancel = () => {
        this.tempSelection = null;
        this.closeMenu();
    };
    handleMenuApply = () => {
        if (this.tempSelection) {
            this.selectedValue = this.tempSelection;
            this.bhChange.emit(this.tempSelection);
            this.bhMonthYearSelect.emit(this.tempSelection);
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
        return (index.h(index.Host, { key: '0589ee8d12120966f1e16614bb4240af8cc704ef' }, index.h("div", { key: '7183af3b3f2ca24a6b9429123b69d642babf5017', class: "month-picker-container" }, this.variant === 'dropdown-outlined' && (index.h("div", { key: '6d8ff65f93cadf2f9310ead4aad911e6a17aa6e3', class: "month-picker-trigger", onClick: this.handleTriggerClick }, index.h("bh-button", { key: '9b12957ab1c7aee12ca02c283e207a55d555c40d', hierarchy: "secondary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'dropdown-ghost' && (index.h("div", { key: '507ef5131209567f9bc715b6a33e6af962408186', class: "month-picker-trigger", onClick: this.handleTriggerClick }, index.h("bh-button", { key: '02d266b0a9df4acbe87beaf67bfe162fbcf9da62', hierarchy: "tertiary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'input' && (index.h("div", { key: 'd7d103e871c3324809abc25d60ba4e7bc64342b5', class: "month-picker-trigger input-field-container" }, index.h("bh-input-text", { key: '5c9ce346d9b29ce131a32a6bc021fe98c48fd690', label: this.label, placeholder: this.placeholder, value: this.getDisplayValue(), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_month", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, onBhFocus: this.handleInputFocus }), index.h("div", { key: 'f0808d5ea14a9d6f75bf2656b06878c61196a36a', class: "calendar-icon-overlay", onClick: this.handleTriggerClick }))), index.h("div", { key: '53973ee2b582a3aa31cc1dad51028dfa69098f27', class: "month-picker-menu-container" }, index.h("bh-picker-menu", { key: '6fcb615cc650fc6e139634bae3de529ba3ffa481', visible: this.isMenuOpen, minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledMonths: this.disabledMonths, showFooter: this.showFooter, value: this.tempSelection || this.selectedValue || undefined, onBhChange: this.handleMonthYearSelect, onBhMonthYearSelect: this.handleMonthYearSelect, onBhCancel: this.handleMenuCancel, onBhApply: this.handleMenuApply }))), (this.isMenuOpen || this.isMenuClosing) && (index.h("div", { key: 'd142281cbda719b7df39015eab43da3d118ceeed', class: "month-picker-backdrop", onClick: this.handleBackdropClick }))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
BhMonthPicker.style = bhMonthPickerCss;

exports.bh_month_picker = BhMonthPicker;
//# sourceMappingURL=bh-month-picker.entry.cjs.js.map
