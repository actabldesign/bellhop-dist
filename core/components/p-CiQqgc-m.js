import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$4 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$3 } from './p-D3OkBDd3.js';
import { d as defineCustomElement$2 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$1 } from './p-CDgBIIbC.js';

const bhDatePickerContentCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.date-picker-content{width:100%;font-family:var(--font-inter);display:flex;flex-direction:column}.month-navigation{display:flex;justify-content:space-between;align-items:center;gap:var(--spacing-sm);padding:var(--spacing-md)}.month-picker-inline{flex:1;overflow:hidden;max-height:270px;animation:fadeIn 150ms ease-out}@keyframes fadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.month-picker-inline.animate-fade-out{animation:fadeOut 150ms ease-out}@keyframes fadeOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-10px)}}.calendar-grid{padding:0 var(--spacing-md) var(--spacing-md);flex:1}.day-names{display:grid;grid-template-columns:repeat(7, 1fr);width:280px;gap:0;margin-bottom:var(--spacing-sm)}.day-name{width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-500)}.date-cells{display:grid;grid-template-columns:repeat(7, 1fr);width:280px;row-gap:var(--spacing-xs, 4px);column-gap:0;justify-items:center;align-items:center}.calendar-cell{width:40px;height:40px;display:flex;align-items:center;justify-content:center;position:relative;border-radius:var(--radius-full);font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);cursor:pointer;transition:all var(--animation-duration-fast, 0.1s) var(--animation-easing-ease, ease)}.calendar-cell.other-month .date-number{color:var(--color-neutral-400)}.calendar-cell.other-month.disabled .date-number{color:var(--color-neutral-300)}.calendar-cell.selectable .date-number{color:var(--color-neutral-500)}.calendar-cell.selectable:hover{background:var(--color-neutral-50)}.calendar-cell.selectable:hover .date-number{color:var(--color-neutral-800)}.calendar-cell.today{border:2px solid var(--color-brand-600)}.calendar-cell.today .date-number{color:var(--color-neutral-500)}.calendar-cell.today:hover{background:var(--color-brand-100)}.calendar-cell.today:hover .date-number{color:var(--color-brand-600)}.calendar-cell.selected{background:var(--color-brand-600)}.calendar-cell.selected .date-number{color:var(--color-white);font-weight:var(--weight-semibold)}.calendar-cell.selected:hover{background:var(--color-brand-800)}.calendar-cell.selected:hover .date-number{color:var(--color-white);font-weight:var(--weight-semibold)}.calendar-cell.in-range{background:var(--color-neutral-100);border-radius:0;position:relative}.calendar-cell.in-range .date-number{color:var(--color-neutral-800);font-weight:var(--weight-medium)}.calendar-cell.in-range:hover{background:var(--color-neutral-100)}.calendar-cell.in-range:hover .date-number{background:var(--color-neutral-200);border-radius:var(--radius-full);width:40px;height:40px;display:flex;align-items:center;justify-content:center}.calendar-cell.range-start,.calendar-cell.range-end{position:relative}.calendar-cell.range-start .date-number,.calendar-cell.range-end .date-number{background:var(--color-brand-600);color:var(--color-white);font-weight:var(--weight-semibold);border-radius:var(--radius-full);width:40px;height:40px;display:flex;align-items:center;justify-content:center}.calendar-cell.range-start:hover .date-number,.calendar-cell.range-start.selectable:hover .date-number,.calendar-cell.range-end:hover .date-number,.calendar-cell.range-end.selectable:hover .date-number{background:var(--color-brand-800);color:var(--color-white)}.calendar-cell.range-start{background:transparent}.calendar-cell.range-start::after{content:'';position:absolute;left:50%;top:0;width:50%;height:100%;background:var(--color-neutral-100);border-radius:var(--radius-full) 0 0 var(--radius-full);z-index:0}.calendar-cell.range-start:hover::after,.calendar-cell.range-start.selectable:hover::after{background:var(--color-neutral-200)}.calendar-cell.range-end{background:transparent}.calendar-cell.range-end::after{content:'';position:absolute;left:0;top:0;width:50%;height:100%;background:var(--color-neutral-100);border-radius:0 var(--radius-full) var(--radius-full) 0;z-index:0}.calendar-cell.range-end:hover::after,.calendar-cell.range-end.selectable:hover::after{background:var(--color-neutral-200)}.calendar-cell.range-start.range-end{background:transparent}.calendar-cell.range-start.range-end::after{display:none}.calendar-cell.range-start.range-end .date-number{border-radius:var(--radius-full)}.calendar-cell.range-start:not(.in-range):not(:has(~.range-end))::after{display:none}.calendar-cell.in-range:nth-child(7n+1){border-top-left-radius:var(--radius-full);border-bottom-left-radius:var(--radius-full)}.calendar-cell.in-range:nth-child(7n){border-top-right-radius:var(--radius-full);border-bottom-right-radius:var(--radius-full)}.calendar-cell.range-start:nth-child(7n)::after{display:none}.calendar-cell.range-end:nth-child(7n+1)::after{display:none}.calendar-cell.today.in-range{background:var(--color-brand-50)}.calendar-cell.today.in-range .date-number{color:var(--color-brand-600);font-weight:var(--weight-medium);background:transparent;border:2px solid var(--color-brand-600)}.calendar-cell.today.in-range:hover{background:var(--color-brand-100)}.calendar-cell.today.range-start .date-number,.calendar-cell.today.range-end .date-number{background:var(--color-brand-600);color:var(--color-white);border:none}.calendar-cell.disabled{cursor:not-allowed}.calendar-cell.disabled .date-number{color:var(--color-neutral-300)}.date-number{position:relative;z-index:1}";

const BhDatePickerContent = /*@__PURE__*/ proxyCustomElement(class BhDatePickerContent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhChange = createEvent(this, "bhChange");
        this.bhDateSelect = createEvent(this, "bhDateSelect");
        this.bhMonthChange = createEvent(this, "bhMonthChange");
        this.bhMonthYearChange = createEvent(this, "bhMonthYearChange");
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
     * Initial month to display (0-11)
     */
    initialMonth;
    /**
     * Initial year to display
     */
    initialYear;
    /**
     * Display month (for external control, 0-11)
     */
    displayMonth;
    /**
     * Display year (for external control)
     */
    displayYear;
    /**
     * Range start date (for date range picker)
     */
    rangeStart;
    /**
     * Range end date (for date range picker)
     */
    rangeEnd;
    /**
     * Currently selected value
     */
    value;
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays = true;
    selectedDate = null;
    currentMonth = new Date().getMonth();
    currentYear = new Date().getFullYear();
    isMonthDropdownOpen = false;
    isMonthDropdownClosing = false;
    today = new Date();
    monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    /**
     * Event emitted when value changes
     */
    bhChange;
    /**
     * Event emitted when a date is selected
     */
    bhDateSelect;
    /**
     * Event emitted when month changes
     */
    bhMonthChange;
    /**
     * Event emitted when month/year changes
     */
    bhMonthYearChange;
    handleValueChange(newValue) {
        if (newValue) {
            this.selectedDate = newValue;
            if (this.displayMonth === undefined && this.displayYear === undefined) {
                this.currentMonth = newValue.month;
                this.currentYear = newValue.year;
            }
        }
        else {
            this.selectedDate = null;
        }
    }
    handleDisplayMonthChange(newValue) {
        if (newValue !== undefined) {
            this.currentMonth = newValue;
        }
    }
    handleDisplayYearChange(newValue) {
        if (newValue !== undefined) {
            this.currentYear = newValue;
        }
    }
    componentWillLoad() {
        // Initialize month/year
        if (this.displayMonth !== undefined) {
            this.currentMonth = this.displayMonth;
        }
        else if (this.initialMonth !== undefined) {
            this.currentMonth = this.initialMonth;
        }
        else {
            this.currentMonth = this.today.getMonth();
        }
        if (this.displayYear !== undefined) {
            this.currentYear = this.displayYear;
        }
        else if (this.initialYear !== undefined) {
            this.currentYear = this.initialYear;
        }
        else {
            this.currentYear = this.today.getFullYear();
        }
        // Initialize selected date
        if (this.value) {
            this.selectedDate = this.value;
        }
    }
    get isInRangeMode() {
        return this.rangeStart !== undefined || this.rangeEnd !== undefined;
    }
    get calendarCells() {
        const cells = [];
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
        let firstDayOfWeek = firstDay.getDay();
        // Convert to Monday start (0 = Monday, 6 = Sunday)
        firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
        // Add cells for days before the first of the month
        if (this.showOtherMonthDays) {
            for (let i = 0; i < firstDayOfWeek; i++) {
                const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, -i);
                cells.unshift(this.createCell(prevMonthLastDay, false));
            }
        }
        else {
            for (let i = 0; i < firstDayOfWeek; i++) {
                cells.unshift({
                    day: 0,
                    isCurrentMonth: false,
                    isToday: false,
                    isSelected: false,
                    isDisabled: true,
                    isRangeStart: false,
                    isRangeEnd: false,
                    isInRange: false,
                    date: new Date(this.currentYear, this.currentMonth, -i),
                });
            }
        }
        // Add cells for current month
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            cells.push(this.createCell(date, true));
        }
        // Add next month days to fill the grid
        if (this.showOtherMonthDays) {
            const totalCells = cells.length;
            const remainingCells = 42 - totalCells;
            for (let day = 1; day <= remainingCells; day++) {
                const nextMonthDay = new Date(this.currentYear, this.currentMonth + 1, day);
                cells.push(this.createCell(nextMonthDay, false));
                if (cells.length % 7 === 0)
                    break;
            }
        }
        return cells;
    }
    createCell(date, isCurrentMonth) {
        const isRangeStart = this.isDateRangeStart(date);
        const isRangeEnd = this.isDateRangeEnd(date);
        const isInRange = this.isDateInRange(date);
        return {
            day: date.getDate(),
            isCurrentMonth,
            isToday: this.isSameDay(date, this.today),
            isSelected: this.isDateSelected(date),
            isDisabled: !isCurrentMonth || this.isDateDisabled(date),
            isRangeStart,
            isRangeEnd,
            isInRange,
            date,
        };
    }
    isSameDay(date1, date2) {
        return (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate());
    }
    isDateDisabled(date) {
        if (!this.disabledDates || !Array.isArray(this.disabledDates)) {
            return false;
        }
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return this.disabledDates.some(disabled => disabled.year === year && disabled.month === month && disabled.day === day);
    }
    isDateSelected(date) {
        if (this.isInRangeMode)
            return false;
        if (!this.selectedDate)
            return false;
        return (date.getFullYear() === this.selectedDate.year &&
            date.getMonth() === this.selectedDate.month &&
            date.getDate() === this.selectedDate.day);
    }
    isDateRangeStart(date) {
        if (!this.rangeStart)
            return false;
        return (date.getFullYear() === this.rangeStart.year &&
            date.getMonth() === this.rangeStart.month &&
            date.getDate() === this.rangeStart.day);
    }
    isDateRangeEnd(date) {
        if (!this.rangeEnd)
            return false;
        return (date.getFullYear() === this.rangeEnd.year &&
            date.getMonth() === this.rangeEnd.month &&
            date.getDate() === this.rangeEnd.day);
    }
    isDateInRange(date) {
        if (!this.rangeStart || !this.rangeEnd)
            return false;
        const dateTime = date.getTime();
        const startTime = new Date(this.rangeStart.year, this.rangeStart.month, this.rangeStart.day).getTime();
        const endTime = new Date(this.rangeEnd.year, this.rangeEnd.month, this.rangeEnd.day).getTime();
        return dateTime > startTime && dateTime < endTime;
    }
    handleCellClick(cell) {
        if (cell.isDisabled || this.disabled || !cell.isCurrentMonth) {
            return;
        }
        const newSelectedDate = {
            year: cell.date.getFullYear(),
            month: cell.date.getMonth(),
            day: cell.date.getDate(),
        };
        // If we're in range mode, let the parent handle it
        if (this.isInRangeMode) {
            this.bhChange.emit(newSelectedDate);
            this.bhDateSelect.emit(newSelectedDate);
            return;
        }
        // Toggle selection
        const isCurrentlySelected = this.selectedDate &&
            this.selectedDate.year === newSelectedDate.year &&
            this.selectedDate.month === newSelectedDate.month &&
            this.selectedDate.day === newSelectedDate.day;
        if (isCurrentlySelected) {
            this.selectedDate = null;
            this.bhChange.emit(null);
            this.bhDateSelect.emit(null);
        }
        else {
            this.selectedDate = newSelectedDate;
            this.bhChange.emit(newSelectedDate);
            this.bhDateSelect.emit(newSelectedDate);
        }
    }
    handleMonthDropdownToggle = () => {
        if (this.isMonthDropdownOpen) {
            this.closeMonthDropdown();
        }
        else {
            this.isMonthDropdownOpen = true;
        }
    };
    closeMonthDropdown() {
        this.isMonthDropdownClosing = true;
        setTimeout(() => {
            this.isMonthDropdownOpen = false;
            this.isMonthDropdownClosing = false;
        }, 150);
    }
    handleMonthYearSelect = (event) => {
        this.closeMonthDropdown();
        setTimeout(() => {
            const monthYear = event.detail;
            this.currentMonth = monthYear.month;
            this.currentYear = monthYear.year;
            this.bhMonthChange.emit({ month: monthYear.month, year: monthYear.year });
            this.bhMonthYearChange.emit({ month: monthYear.month, year: monthYear.year });
        }, 100);
    };
    handlePreviousMonth = () => {
        if (this.disabled)
            return;
        let newMonth = this.currentMonth - 1;
        let newYear = this.currentYear;
        if (newMonth < 0) {
            newMonth = 11;
            newYear = this.currentYear - 1;
        }
        if (newYear >= this.minYear) {
            this.currentMonth = newMonth;
            this.currentYear = newYear;
            this.bhMonthChange.emit({ month: newMonth, year: newYear });
            this.bhMonthYearChange.emit({ month: newMonth, year: newYear });
        }
    };
    handleNextMonth = () => {
        if (this.disabled)
            return;
        let newMonth = this.currentMonth + 1;
        let newYear = this.currentYear;
        if (newMonth > 11) {
            newMonth = 0;
            newYear = this.currentYear + 1;
        }
        if (newYear <= this.maxYear) {
            this.currentMonth = newMonth;
            this.currentYear = newYear;
            this.bhMonthChange.emit({ month: newMonth, year: newYear });
            this.bhMonthYearChange.emit({ month: newMonth, year: newYear });
        }
    };
    getCellClass(cell) {
        const classes = ['calendar-cell'];
        if (!cell.isCurrentMonth)
            classes.push('other-month');
        if (cell.isToday)
            classes.push('today');
        if (cell.isRangeStart)
            classes.push('range-start');
        if (cell.isRangeEnd)
            classes.push('range-end');
        if (cell.isInRange)
            classes.push('in-range');
        if (cell.isSelected)
            classes.push('selected');
        if (cell.isDisabled)
            classes.push('disabled');
        else if (cell.isCurrentMonth)
            classes.push('selectable');
        return classes.join(' ');
    }
    render() {
        const currentMonthYear = `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
        return (h(Host, { key: '05d0441dcd2da1aa127579d04800747af79f067c' }, h("div", { key: '81eb39026a6e82623d1ec48654acf5aaacb84468', class: "date-picker-content" }, h("div", { key: 'ef803f98eb4d0d470f958a792af22bc2e7b1b541', class: "month-navigation" }, h("bh-button-icon", { key: '8b79154fe6a5464fd33573af8f1472673d16d4cf', hierarchy: "tertiary", size: "md", iconName: "chevron_left", onBhClick: this.handlePreviousMonth, disabled: this.disabled || (this.currentYear === this.minYear && this.currentMonth === 0) }), h("bh-button", { key: 'a90b1f7a5a86d934fb4c6a97f2dd89ea0dd22595', hierarchy: "tertiary", size: "sm", label: currentMonthYear, icon: "trailing", iconName: "expand_more", onBhClick: this.handleMonthDropdownToggle }), h("bh-button-icon", { key: 'e7c3d18fa4c1259c7e42cab0849ccf22467ff965', hierarchy: "tertiary", size: "md", iconName: "chevron_right", onBhClick: this.handleNextMonth, disabled: this.disabled || (this.currentYear === this.maxYear && this.currentMonth === 11) })), !this.isMonthDropdownOpen && (h("div", { key: '7ba8e5495cd893e9b4cd4b2fddfcde9645d95887', class: "calendar-grid" }, h("div", { key: '748139e26896df2b02cf304d17079cbfa207af38', class: "day-names" }, this.dayNames.map(dayName => (h("div", { key: dayName, class: "day-name" }, dayName)))), h("div", { key: '1bda4addff260424ef223cae08120fbd9d94720d', class: "date-cells" }, this.calendarCells.map((cell, index) => (h("div", { key: index, class: this.getCellClass(cell), onClick: () => this.handleCellClick(cell) }, h("span", { class: "date-number" }, cell.day === 0 ? '' : cell.day))))))), (this.isMonthDropdownOpen || this.isMonthDropdownClosing) && (h("div", { key: 'fe0d53f2a5a7d659cd0b8c5e231c4b4a3e4e45e5', class: `month-picker-inline ${this.isMonthDropdownClosing ? 'animate-fade-out' : ''}` }, h("bh-month-picker-content", { key: '22caaad16ffbf2f3bd40044290e6e663fde6ee1a', scrollable: true, height: "275px", selectedMonth: this.currentMonth, selectedYear: this.currentYear, onBhChange: this.handleMonthYearSelect, minYear: this.minYear, maxYear: this.maxYear }))))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"],
        "displayMonth": ["handleDisplayMonthChange"],
        "displayYear": ["handleDisplayYearChange"]
    }; }
    static get style() { return bhDatePickerContentCss; }
}, [769, "bh-date-picker-content", {
        "minYear": [2, "min-year"],
        "maxYear": [2, "max-year"],
        "disabled": [4],
        "disabledDates": [16],
        "initialMonth": [2, "initial-month"],
        "initialYear": [2, "initial-year"],
        "displayMonth": [2, "display-month"],
        "displayYear": [2, "display-year"],
        "rangeStart": [16],
        "rangeEnd": [16],
        "value": [16],
        "showOtherMonthDays": [4, "show-other-month-days"],
        "selectedDate": [32],
        "currentMonth": [32],
        "currentYear": [32],
        "isMonthDropdownOpen": [32],
        "isMonthDropdownClosing": [32]
    }, undefined, {
        "value": ["handleValueChange"],
        "displayMonth": ["handleDisplayMonthChange"],
        "displayYear": ["handleDisplayYearChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-date-picker-content", "bh-button", "bh-button-icon", "bh-loader-spinner", "bh-month-picker-content"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-date-picker-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhDatePickerContent);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bh-button-icon":
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

export { BhDatePickerContent as B, defineCustomElement as d };
//# sourceMappingURL=p-CiQqgc-m.js.map

//# sourceMappingURL=p-CiQqgc-m.js.map