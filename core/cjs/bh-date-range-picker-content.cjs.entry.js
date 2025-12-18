'use strict';

var index = require('./index-DQwSUT6k.js');

const bhDateRangePickerContentCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.date-range-picker-content{display:flex;flex-direction:column;font-family:var(--font-inter);width:fit-content}.date-pickers{display:flex;flex-direction:row;width:100%;position:relative;gap:var(--spacing-sm)}.left-picker{display:flex;flex-direction:column;width:296px}.right-picker{display:flex;flex-direction:column;width:296px}.date-pickers::after{content:'';position:absolute;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);width:1px;height:100%;background:var(--color-neutral-200);pointer-events:none;z-index:1}@media (max-width: 768px){.date-range-picker-content{width:320px}.date-pickers{flex-direction:column}.left-picker,.right-picker{width:100%}.date-pickers::after{display:none}}";

const BhDateRangePickerContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhChange = index.createEvent(this, "bhChange");
        this.bhDateRangeSelect = index.createEvent(this, "bhDateRangeSelect");
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
     * Array of disabled dates
     */
    disabledDates = [];
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays = true;
    /**
     * Currently selected value
     */
    value;
    selectedRange = null;
    leftMonth = new Date().getMonth();
    leftYear = new Date().getFullYear();
    rightMonth = (new Date().getMonth() + 1) % 12;
    rightYear = new Date().getMonth() === 11 ? new Date().getFullYear() + 1 : new Date().getFullYear();
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
            this.selectedRange = { ...newValue };
        }
        else {
            this.selectedRange = null;
        }
    }
    componentWillLoad() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        this.leftMonth = currentMonth;
        this.leftYear = currentYear;
        const nextMonthYear = this.getNextMonth(currentMonth, currentYear);
        this.rightMonth = nextMonthYear.month;
        this.rightYear = nextMonthYear.year;
        if (this.value) {
            this.selectedRange = this.value;
        }
    }
    getNextMonth(month, year) {
        const nextMonth = month + 1;
        if (nextMonth > 11) {
            return { month: 0, year: year + 1 };
        }
        return { month: nextMonth, year };
    }
    getPreviousMonth(month, year) {
        const prevMonth = month - 1;
        if (prevMonth < 0) {
            return { month: 11, year: year - 1 };
        }
        return { month: prevMonth, year };
    }
    handleLeftDateSelect = (event) => {
        this.handleDateSelect(event.detail);
    };
    handleRightDateSelect = (event) => {
        this.handleDateSelect(event.detail);
    };
    handleDateSelect(date) {
        if (!date)
            return;
        let newRange;
        if (!this.selectedRange?.startDate || (this.selectedRange.startDate && this.selectedRange.endDate)) {
            // Start new range
            newRange = { startDate: date, endDate: null };
        }
        else if (this.selectedRange.startDate && !this.selectedRange.endDate) {
            // Complete the range
            const startDate = this.selectedRange.startDate;
            const isAfterStart = date.year > startDate.year ||
                (date.year === startDate.year && date.month > startDate.month) ||
                (date.year === startDate.year && date.month === startDate.month && date.day > startDate.day);
            if (isAfterStart) {
                newRange = { startDate, endDate: date };
            }
            else {
                newRange = { startDate: date, endDate: startDate };
            }
        }
        else {
            newRange = { startDate: date, endDate: null };
        }
        this.selectedRange = newRange;
        this.bhChange.emit(newRange);
        this.bhDateRangeSelect.emit(newRange);
    }
    handleLeftMonthYearChange = (event) => {
        const { month, year } = event.detail;
        this.leftMonth = month;
        this.leftYear = year;
        // Ensure right calendar is always at least one month ahead
        if (year > this.rightYear || (year === this.rightYear && month >= this.rightMonth)) {
            const nextMonthYear = this.getNextMonth(month, year);
            this.rightMonth = nextMonthYear.month;
            this.rightYear = nextMonthYear.year;
        }
    };
    handleRightMonthYearChange = (event) => {
        const { month, year } = event.detail;
        this.rightMonth = month;
        this.rightYear = year;
        // Ensure left calendar is always at least one month behind
        if (year < this.leftYear || (year === this.leftYear && month <= this.leftMonth)) {
            const prevMonthYear = this.getPreviousMonth(month, year);
            this.leftMonth = prevMonthYear.month;
            this.leftYear = prevMonthYear.year;
        }
    };
    render() {
        return (index.h(index.Host, { key: '8c0921dbc8b69b5cf807f36aab2707dc90c15c07' }, index.h("div", { key: '0e2de76a0709b383650992648ad287cc2765a71e', class: "date-range-picker-content" }, index.h("div", { key: '3f244bbac9cc6cc8c26e8d2e1c115a00c0a21602', class: "date-pickers" }, index.h("div", { key: '80bae45ed0096dd4db50a4576f3280933556e82b', class: "left-picker" }, index.h("bh-date-picker-content", { key: '71514b66edf509d76e00dca3f0daa445e9be19d7', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, displayMonth: this.leftMonth, displayYear: this.leftYear, rangeStart: this.selectedRange?.startDate ?? undefined, rangeEnd: this.selectedRange?.endDate ?? undefined, onBhChange: this.handleLeftDateSelect, onBhMonthYearChange: this.handleLeftMonthYearChange })), index.h("div", { key: '1446711304bd2e90aed82ddba2d7324644b52fa0', class: "right-picker" }, index.h("bh-date-picker-content", { key: '5231a18a91664902a73da79eee61cf3c98539157', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, displayMonth: this.rightMonth, displayYear: this.rightYear, rangeStart: this.selectedRange?.startDate ?? undefined, rangeEnd: this.selectedRange?.endDate ?? undefined, onBhChange: this.handleRightDateSelect, onBhMonthYearChange: this.handleRightMonthYearChange }))))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
BhDateRangePickerContent.style = bhDateRangePickerContentCss;

exports.bh_date_range_picker_content = BhDateRangePickerContent;
//# sourceMappingURL=bh-date-range-picker-content.entry.cjs.js.map
