import { h, Host } from "@stencil/core";
export class BhDateRangePicker {
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
    static get is() { return "bh-date-range-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-date-range-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-date-range-picker.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DateRangePickerVariant",
                    "resolved": "\"dropdown-ghost\" | \"dropdown-outlined\" | \"input\"",
                    "references": {
                        "DateRangePickerVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-range-picker/bh-date-range-picker.tsx",
                            "id": "src/components/bh-date-range-picker/bh-date-range-picker.tsx::DateRangePickerVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of the date range picker trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'input'"
            },
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
            "startLabel": {
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
                    "text": "Label for start date input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "start-label",
                "defaultValue": "'Start Date'"
            },
            "endLabel": {
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
                    "text": "Label for end date input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "end-label",
                "defaultValue": "'End Date'"
            },
            "startPlaceholder": {
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
                    "text": "Placeholder for start date"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "start-placeholder",
                "defaultValue": "'Choose start date'"
            },
            "endPlaceholder": {
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
                    "text": "Placeholder for end date"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "end-placeholder",
                "defaultValue": "'Choose end date'"
            },
            "inputWidth": {
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
                    "text": "Width for input variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-width",
                "defaultValue": "'200px'"
            },
            "showLabel": {
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
                    "text": "Whether to show the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-label",
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
                    "text": "Whether to show the footer"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-footer",
                "defaultValue": "true"
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
                "defaultValue": "false"
            },
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SelectedDateRange",
                    "resolved": "SelectedDateRange | undefined",
                    "references": {
                        "SelectedDateRange": {
                            "location": "import",
                            "path": "../bh-date-range-picker-content/bh-date-range-picker-content",
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
            "selectedValue": {},
            "tempSelection": {},
            "isMenuOpen": {},
            "isMenuClosing": {}
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
                            "location": "import",
                            "path": "../bh-date-range-picker-content/bh-date-range-picker-content",
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
                            "location": "import",
                            "path": "../bh-date-range-picker-content/bh-date-range-picker-content",
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
    static get listeners() {
        return [{
                "name": "bhDateRangeSelect",
                "method": "handleDateRangeSelectEvent",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-date-range-picker.js.map
