import { h, Host } from "@stencil/core";
export class BhPickerMenu {
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
    static get is() { return "bh-picker-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-picker-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-picker-menu.css"]
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
                            "location": "import",
                            "path": "../bh-month-picker-content/bh-month-picker-content",
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
            "animationClass": {
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
                    "text": "Animation class for the menu"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "animation-class",
                "defaultValue": "'animate-dropdown-enter'"
            },
            "visible": {
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
                    "text": "Whether the menu is visible"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "visible",
                "defaultValue": "true"
            },
            "showFooter": {
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
                    "text": "Whether to show the footer with action buttons"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-footer",
                "defaultValue": "true"
            },
            "showTodayButton": {
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
                    "text": "Whether to show the today button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-today-button",
                "defaultValue": "false"
            },
            "disableApply": {
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
                    "text": "Whether the apply button is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-apply",
                "defaultValue": "false"
            },
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MonthYear",
                    "resolved": "MonthYear | undefined",
                    "references": {
                        "MonthYear": {
                            "location": "import",
                            "path": "../bh-month-picker-content/bh-month-picker-content",
                            "id": "src/components/bh-month-picker-content/bh-month-picker-content.tsx::MonthYear"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Current value"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isClosing": {},
            "shouldRender": {},
            "selectedMonth": {},
            "selectedYear": {}
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
                    "original": "MonthYear | null",
                    "resolved": "MonthYear | null",
                    "references": {
                        "MonthYear": {
                            "location": "import",
                            "path": "../bh-month-picker-content/bh-month-picker-content",
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
                            "location": "import",
                            "path": "../bh-month-picker-content/bh-month-picker-content",
                            "id": "src/components/bh-month-picker-content/bh-month-picker-content.tsx::MonthYear"
                        }
                    }
                }
            }, {
                "method": "bhCancel",
                "name": "bhCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when cancel is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhApply",
                "name": "bhApply",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when apply is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhToday",
                "name": "bhToday",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when today button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "visible",
                "methodName": "handleVisibleChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
//# sourceMappingURL=bh-picker-menu.js.map
