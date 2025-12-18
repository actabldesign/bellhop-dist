import { h, Host } from "@stencil/core";
export class BhDateRangePickerContent {
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
        return (h(Host, { key: '8c0921dbc8b69b5cf807f36aab2707dc90c15c07' }, h("div", { key: '0e2de76a0709b383650992648ad287cc2765a71e', class: "date-range-picker-content" }, h("div", { key: '3f244bbac9cc6cc8c26e8d2e1c115a00c0a21602', class: "date-pickers" }, h("div", { key: '80bae45ed0096dd4db50a4576f3280933556e82b', class: "left-picker" }, h("bh-date-picker-content", { key: '71514b66edf509d76e00dca3f0daa445e9be19d7', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, displayMonth: this.leftMonth, displayYear: this.leftYear, rangeStart: this.selectedRange?.startDate ?? undefined, rangeEnd: this.selectedRange?.endDate ?? undefined, onBhChange: this.handleLeftDateSelect, onBhMonthYearChange: this.handleLeftMonthYearChange })), h("div", { key: '1446711304bd2e90aed82ddba2d7324644b52fa0', class: "right-picker" }, h("bh-date-picker-content", { key: '5231a18a91664902a73da79eee61cf3c98539157', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, displayMonth: this.rightMonth, displayYear: this.rightYear, rangeStart: this.selectedRange?.startDate ?? undefined, rangeEnd: this.selectedRange?.endDate ?? undefined, onBhChange: this.handleRightDateSelect, onBhMonthYearChange: this.handleRightMonthYearChange }))))));
    }
    static get is() { return "bh-date-range-picker-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-date-range-picker-content.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-date-range-picker-content.css"]
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
                            "location": "import",
                            "path": "../bh-date-picker-content/bh-date-picker-content",
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
            },
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SelectedDateRange",
                    "resolved": "SelectedDateRange | undefined",
                    "references": {
                        "SelectedDateRange": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-range-picker-content/bh-date-range-picker-content.tsx",
                            "id": "src/components/bh-date-range-picker-content/bh-date-range-picker-content.tsx::SelectedDateRange"
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
            }
        };
    }
    static get states() {
        return {
            "selectedRange": {},
            "leftMonth": {},
            "leftYear": {},
            "rightMonth": {},
            "rightYear": {}
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
                    "original": "SelectedDateRange | null",
                    "resolved": "SelectedDateRange | null",
                    "references": {
                        "SelectedDateRange": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-range-picker-content/bh-date-range-picker-content.tsx",
                            "id": "src/components/bh-date-range-picker-content/bh-date-range-picker-content.tsx::SelectedDateRange"
                        }
                    }
                }
            }, {
                "method": "bhDateRangeSelect",
                "name": "bhDateRangeSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a date range is selected"
                },
                "complexType": {
                    "original": "SelectedDateRange | null",
                    "resolved": "SelectedDateRange | null",
                    "references": {
                        "SelectedDateRange": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-range-picker-content/bh-date-range-picker-content.tsx",
                            "id": "src/components/bh-date-range-picker-content/bh-date-range-picker-content.tsx::SelectedDateRange"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
//# sourceMappingURL=bh-date-range-picker-content.js.map
