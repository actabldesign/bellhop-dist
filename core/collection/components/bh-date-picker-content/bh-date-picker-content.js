import { h, Host } from "@stencil/core";
export class BhDatePickerContent {
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
    static get is() { return "bh-date-picker-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-date-picker-content.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-date-picker-content.css"]
        };
    }
    static get properties() {
        return {
            "minYear": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum year in the picker"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-year",
                "defaultValue": "1998"
            },
            "maxYear": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum year in the picker"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-year",
                "defaultValue": "2060"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the picker is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "disabledDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DisabledDate[]",
                    "resolved": "DisabledDate[]",
                    "references": {
                        "DisabledDate": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker-content/bh-date-picker-content.tsx",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::DisabledDate"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of disabled dates"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "initialMonth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Initial month to display (0-11)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "initial-month"
            },
            "initialYear": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Initial year to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "initial-year"
            },
            "displayMonth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Display month (for external control, 0-11)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "display-month"
            },
            "displayYear": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Display year (for external control)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "display-year"
            },
            "rangeStart": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SelectedDate",
                    "resolved": "SelectedDate | undefined",
                    "references": {
                        "SelectedDate": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker-content/bh-date-picker-content.tsx",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::SelectedDate"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Range start date (for date range picker)"
                },
                "getter": false,
                "setter": false
            },
            "rangeEnd": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SelectedDate",
                    "resolved": "SelectedDate | undefined",
                    "references": {
                        "SelectedDate": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker-content/bh-date-picker-content.tsx",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::SelectedDate"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Range end date (for date range picker)"
                },
                "getter": false,
                "setter": false
            },
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SelectedDate",
                    "resolved": "SelectedDate | undefined",
                    "references": {
                        "SelectedDate": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker-content/bh-date-picker-content.tsx",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::SelectedDate"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Currently selected value"
                },
                "getter": false,
                "setter": false
            },
            "showOtherMonthDays": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show days from other months"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-other-month-days",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "selectedDate": {},
            "currentMonth": {},
            "currentYear": {},
            "isMonthDropdownOpen": {},
            "isMonthDropdownClosing": {}
        };
    }
    static get events() {
        return [{
                "method": "bhChange",
                "name": "bhChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when value changes"
                },
                "complexType": {
                    "original": "SelectedDate | null",
                    "resolved": "SelectedDate | null",
                    "references": {
                        "SelectedDate": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker-content/bh-date-picker-content.tsx",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::SelectedDate"
                        }
                    }
                }
            }, {
                "method": "bhDateSelect",
                "name": "bhDateSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a date is selected"
                },
                "complexType": {
                    "original": "SelectedDate | null",
                    "resolved": "SelectedDate | null",
                    "references": {
                        "SelectedDate": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker-content/bh-date-picker-content.tsx",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::SelectedDate"
                        }
                    }
                }
            }, {
                "method": "bhMonthChange",
                "name": "bhMonthChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when month changes"
                },
                "complexType": {
                    "original": "{ month: number; year: number }",
                    "resolved": "{ month: number; year: number; }",
                    "references": {}
                }
            }, {
                "method": "bhMonthYearChange",
                "name": "bhMonthYearChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when month/year changes"
                },
                "complexType": {
                    "original": "{ month: number; year: number }",
                    "resolved": "{ month: number; year: number; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "displayMonth",
                "methodName": "handleDisplayMonthChange"
            }, {
                "propName": "displayYear",
                "methodName": "handleDisplayYearChange"
            }];
    }
}
//# sourceMappingURL=bh-date-picker-content.js.map
