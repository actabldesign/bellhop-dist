import { h, Host } from "@stencil/core";
export class BhMonthPickerContent {
    el;
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
     * Whether the content is scrollable
     */
    scrollable = true;
    /**
     * Currently selected month (0-11)
     */
    selectedMonth;
    /**
     * Currently selected year
     */
    selectedYear;
    /**
     * Height of the content area
     */
    height = '375px';
    /**
     * Value object with month and year
     */
    value;
    internalSelectedMonth = null;
    internalSelectedYear = null;
    isUsingKeyboard = false;
    /**
     * Event emitted when a month is selected
     */
    bhChange;
    /**
     * Event emitted when a month/year is selected
     */
    bhMonthYearSelect;
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    currentDate = new Date();
    currentMonth = this.currentDate.getMonth();
    currentYear = this.currentDate.getFullYear();
    handleValueChange(newValue) {
        if (newValue) {
            this.internalSelectedMonth = newValue.month;
            this.internalSelectedYear = newValue.year;
        }
    }
    handleSelectedMonthChange(newValue) {
        if (newValue !== undefined) {
            this.internalSelectedMonth = newValue;
        }
    }
    handleSelectedYearChange(newValue) {
        if (newValue !== undefined) {
            this.internalSelectedYear = newValue;
        }
    }
    componentWillLoad() {
        // Initialize with props or current date
        if (this.value) {
            this.internalSelectedMonth = this.value.month;
            this.internalSelectedYear = this.value.year;
        }
        else if (this.selectedMonth !== undefined || this.selectedYear !== undefined) {
            this.internalSelectedMonth = this.selectedMonth ?? this.currentMonth;
            this.internalSelectedYear = this.selectedYear ?? this.currentYear;
        }
        else {
            // Initialize with current date if within range
            if (this.currentYear >= this.minYear && this.currentYear <= this.maxYear) {
                this.internalSelectedMonth = this.currentMonth;
                this.internalSelectedYear = this.currentYear;
            }
            else {
                this.internalSelectedMonth = this.currentMonth;
                this.internalSelectedYear = this.currentYear < this.minYear ? this.minYear : this.maxYear;
            }
        }
    }
    componentDidLoad() {
        if (this.scrollable) {
            setTimeout(() => this.scrollToSelectedYear(), 0);
        }
    }
    scrollToSelectedYear() {
        if (this.internalSelectedYear === null)
            return;
        const container = this.el.shadowRoot?.querySelector('.month-picker-content');
        const yearElement = this.el.shadowRoot?.querySelector(`#year-${this.internalSelectedYear}`);
        if (!container || !yearElement)
            return;
        const containerHeight = container.clientHeight;
        const yearElementTop = yearElement.offsetTop;
        const yearElementHeight = yearElement.offsetHeight;
        const isFirstYear = this.internalSelectedYear === this.minYear;
        const isLastYear = this.internalSelectedYear === this.maxYear;
        if (!isFirstYear && !isLastYear) {
            const scrollOffset = 50;
            const scrollTop = yearElementTop - containerHeight / 2 + yearElementHeight / 2 + scrollOffset;
            container.scrollTop = Math.max(0, scrollTop);
        }
        else if (isFirstYear) {
            container.scrollTop = 0;
        }
        else {
            container.scrollTop = container.scrollHeight;
        }
    }
    getYears() {
        return Array.from({ length: this.maxYear - this.minYear + 1 }, (_, i) => this.minYear + i);
    }
    isCurrentMonth(monthIndex, year) {
        return this.currentMonth === monthIndex && this.currentYear === year;
    }
    isMonthSelectable(monthIndex, year) {
        if (year < this.minYear || year > this.maxYear) {
            return false;
        }
        return !this.disabledMonths.some(disabled => disabled.month === monthIndex && disabled.year === year);
    }
    selectMonth(monthIndex, year) {
        if (this.disabled || !this.isMonthSelectable(monthIndex, year)) {
            return;
        }
        this.internalSelectedMonth = monthIndex;
        this.internalSelectedYear = year;
        const selection = { month: monthIndex, year };
        this.bhChange.emit(selection);
        this.bhMonthYearSelect.emit(selection);
    }
    handleKeyDown = () => {
        this.isUsingKeyboard = true;
    };
    handleMouseDown = () => {
        this.isUsingKeyboard = false;
    };
    getMonthButtonClasses(monthIndex, year) {
        const classes = ['month-button'];
        if (!this.isMonthSelectable(monthIndex, year)) {
            classes.push('inactive');
        }
        if (this.internalSelectedMonth === monthIndex && this.internalSelectedYear === year) {
            classes.push('selected');
        }
        if (this.isCurrentMonth(monthIndex, year)) {
            classes.push('today');
        }
        return classes.join(' ');
    }
    render() {
        const years = this.getYears();
        return (h(Host, { key: '7b5bd2302804839e5362752f0e1a54dd2698c1b7' }, h("div", { key: 'a71768e29f2c703f6b0ddfd84a392ae084182b9f', class: `month-picker-content animate-slide-up-enter ${this.scrollable ? 'scrollable' : ''}`, style: { height: this.height }, onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown }, h("div", { key: '3754d5452f0d4952e61f6bb0968c712f725466b1', class: "calendar" }, years.map((year, yearIndex) => (h("div", { key: year, class: "year-section", id: `year-${year}` }, h("div", { class: "year-month-container" }, h("div", { class: "year-label" }, year), h("div", { class: "months-row" }, h("div", { class: "month-row" }, this.months.slice(0, 6).map((_, monthIndex) => (h("button", { key: monthIndex, class: this.getMonthButtonClasses(monthIndex, year), disabled: !this.isMonthSelectable(monthIndex, year), onClick: () => this.selectMonth(monthIndex, year) }, this.months[monthIndex])))), h("div", { class: "month-row" }, this.months.slice(6, 12).map((_, idx) => {
            const monthIndex = idx + 6;
            return (h("button", { key: monthIndex, class: this.getMonthButtonClasses(monthIndex, year), disabled: !this.isMonthSelectable(monthIndex, year), onClick: () => this.selectMonth(monthIndex, year) }, this.months[monthIndex]));
        })))), yearIndex < years.length - 1 && (h("div", { class: "section-divider" }, h("div", { class: "divider-container" }, h("div", { class: "divider-line" })))))))))));
    }
    static get is() { return "bh-month-picker-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-month-picker-content.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-month-picker-content.css"]
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
            "disabledMonths": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DisabledMonth[]",
                    "resolved": "DisabledMonth[]",
                    "references": {
                        "DisabledMonth": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-month-picker-content/bh-month-picker-content.tsx",
                            "id": "src/components/bh-month-picker-content/bh-month-picker-content.tsx::DisabledMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of disabled months"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "scrollable": {
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
                    "text": "Whether the content is scrollable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "scrollable",
                "defaultValue": "true"
            },
            "selectedMonth": {
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
                    "text": "Currently selected month (0-11)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-month"
            },
            "selectedYear": {
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
                    "text": "Currently selected year"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-year"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Height of the content area"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'375px'"
            },
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MonthYear",
                    "resolved": "MonthYear | undefined",
                    "references": {
                        "MonthYear": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-month-picker-content/bh-month-picker-content.tsx",
                            "id": "src/components/bh-month-picker-content/bh-month-picker-content.tsx::MonthYear"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Value object with month and year"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "internalSelectedMonth": {},
            "internalSelectedYear": {},
            "isUsingKeyboard": {}
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
                    "text": "Event emitted when a month is selected"
                },
                "complexType": {
                    "original": "MonthYear",
                    "resolved": "MonthYear",
                    "references": {
                        "MonthYear": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-month-picker-content/bh-month-picker-content.tsx",
                            "id": "src/components/bh-month-picker-content/bh-month-picker-content.tsx::MonthYear"
                        }
                    }
                }
            }, {
                "method": "bhMonthYearSelect",
                "name": "bhMonthYearSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a month/year is selected"
                },
                "complexType": {
                    "original": "MonthYear",
                    "resolved": "MonthYear",
                    "references": {
                        "MonthYear": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-month-picker-content/bh-month-picker-content.tsx",
                            "id": "src/components/bh-month-picker-content/bh-month-picker-content.tsx::MonthYear"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "selectedMonth",
                "methodName": "handleSelectedMonthChange"
            }, {
                "propName": "selectedYear",
                "methodName": "handleSelectedYearChange"
            }];
    }
}
//# sourceMappingURL=bh-month-picker-content.js.map
