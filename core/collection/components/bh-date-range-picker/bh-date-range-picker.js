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
        return (h(Host, { key: '2c321a4a5e4cdf2109353991423169800a0d41ec' }, h("div", { key: '13b5bbc4860661e98323d4acb61882bdc3350188', class: "date-range-picker-container" }, this.variant === 'dropdown-outlined' && (h("div", { key: '9c7023a4ffbcd66b4ccb2f5828fe73cbab00ac87', class: "date-range-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: '6677d5338cdd340b7422c467ace3048ee1c5d283', hierarchy: "secondary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'dropdown-ghost' && (h("div", { key: '2960183f3b959b64b381658f1e10e2089a21a39d', class: "date-range-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: 'b491e3a1262a75b0c12b69a154200138b267b271', hierarchy: "tertiary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'input' && (h("div", { key: '7d4e184068e772f70cb81e14d1c207299624fd09', class: "date-range-picker-trigger" }, h("div", { key: '222cb92f21351bc42d3892d581b00ad0ad986af2', class: "date-range-inputs", onClick: this.handleTriggerClick }, h("bh-input-text", { key: 'cc659298934fc8f93a31354f48180e279374c30b', label: this.startLabel, placeholder: this.startPlaceholder, value: this.formatDate(this.selectedValue?.startDate || null), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, readOnly: true }), h("bh-input-text", { key: '1bfddf59ac795cca04aad5593545d26c5189810f', label: this.endLabel, placeholder: this.endPlaceholder, value: this.formatDate(this.selectedValue?.endDate || null), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, readOnly: true })))), h("div", { key: '88be4865a0e5d787d46d796d75d99216b3d5a7b1', class: "date-range-picker-menu-container" }, h("bh-picker-menu", { key: '73dea110a2c1ce04d00abd66f5084febca0e0f64', visible: this.isMenuOpen, showFooter: this.showFooter, disableApply: this.showFooter && (!this.tempSelection?.startDate || !this.tempSelection?.endDate), onBhCancel: this.handleMenuCancel, onBhApply: this.handleMenuApply }, h("bh-date-range-picker-content", { key: '6a3d4a2d7c433779d97553b0af825c4c3e7397f1', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, value: this.tempSelection ?? this.selectedValue ?? undefined })))), (this.isMenuOpen || this.isMenuClosing) && (h("div", { key: '2ae8001191cb0bb7b27b937189e5085a3d0c1811', class: "date-range-picker-backdrop", onClick: this.handleBackdropClick }))));
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
