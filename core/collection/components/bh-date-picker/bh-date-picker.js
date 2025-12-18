import { h, Host } from "@stencil/core";
export class BhDatePicker {
    /**
     * Variant of the date picker trigger
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
     * Label for input variant
     */
    label = 'Select Date';
    /**
     * Placeholder text
     */
    placeholder = 'Choose date';
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
    showFooter = false;
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays = true;
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
     * Event emitted when a date is selected
     */
    bhDateSelect;
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
        const month = (this.selectedValue.month + 1).toString().padStart(2, '0');
        const day = this.selectedValue.day.toString().padStart(2, '0');
        return `${month}/${day}/${this.selectedValue.year}`;
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
    handleDateSelect = (event) => {
        const date = event.detail;
        if (this.showFooter && date) {
            this.tempSelection = date;
        }
        else {
            this.selectedValue = date;
            this.bhChange.emit(date);
            this.bhDateSelect.emit(date);
            if (!this.showFooter) {
                this.closeMenu();
            }
        }
    };
    handleMenuCancel = () => {
        this.tempSelection = null;
        this.closeMenu();
    };
    handleMenuApply = () => {
        if (this.tempSelection) {
            this.selectedValue = this.tempSelection;
            this.tempSelection = null;
            this.bhChange.emit(this.selectedValue);
            this.bhDateSelect.emit(this.selectedValue);
        }
        this.closeMenu();
    };
    handleToday = () => {
        const today = new Date();
        const todayDate = {
            year: today.getFullYear(),
            month: today.getMonth(),
            day: today.getDate(),
        };
        if (this.showFooter) {
            this.tempSelection = todayDate;
        }
        else {
            this.selectedValue = todayDate;
            this.bhChange.emit(todayDate);
            this.bhDateSelect.emit(todayDate);
            this.closeMenu();
        }
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
        return (h(Host, { key: 'a802c8d0bf2a5e40c909a8980f160d47b4e7bbde' }, h("div", { key: '348e50ba916744ded6d348683b61129140fc2923', class: "date-picker-container" }, this.variant === 'dropdown-outlined' && (h("div", { key: 'c044d02c7e1377c5596283dc44368b8656a9e511', class: "date-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: '0e298c804889426af639d955e747936728004ef0', hierarchy: "secondary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'dropdown-ghost' && (h("div", { key: '862b2d55c32a1eb5063b44a495fdf93b0b4fcd80', class: "date-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: '7573039c5ab7a356010e71a7ef4e37e3d7177b32', hierarchy: "tertiary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'input' && (h("div", { key: '1f2dc7e7a932c76b3611fc090b9ee2c4637090a2', class: "date-picker-trigger input-field-container" }, h("bh-input-text", { key: 'f80ebc3d20ef711ee3b56031327b79395a609671', label: this.label, placeholder: this.placeholder, value: this.getDisplayValue(), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, onBhFocus: this.handleInputFocus }), h("div", { key: '7a6e32953de4a30b13a4fb0ae3c1ebdbaeab9303', class: "calendar-icon-overlay", onClick: this.handleTriggerClick }))), h("div", { key: '80ed5a884954d099a11fcf99f6f1e90584759116', class: "date-picker-menu-container" }, h("bh-picker-menu", { key: 'ac3fa6d95099990e9d4ac9a223944efd7e3f8d3d', visible: this.isMenuOpen, showFooter: this.showFooter, showTodayButton: this.showFooter, disableApply: this.showFooter && this.tempSelection === null, onBhCancel: this.handleMenuCancel, onBhApply: this.handleMenuApply, onBhToday: this.handleToday }, h("bh-date-picker-content", { key: '8b92b1356191b4a0a48ddaa2b7f581f9d3eb4ac8', minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledDates: this.disabledDates, showOtherMonthDays: this.showOtherMonthDays, value: this.tempSelection ?? this.selectedValue ?? undefined, onBhDateSelect: this.handleDateSelect })))), (this.isMenuOpen || this.isMenuClosing) && (h("div", { key: '155ee3b226bf3425575c63e4d233c3eecb47b243', class: "date-picker-backdrop", onClick: this.handleBackdropClick }))));
    }
    static get is() { return "bh-date-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-date-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-date-picker.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DatePickerVariant",
                    "resolved": "\"dropdown-ghost\" | \"dropdown-outlined\" | \"input\"",
                    "references": {
                        "DatePickerVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-date-picker/bh-date-picker.tsx",
                            "id": "src/components/bh-date-picker/bh-date-picker.tsx::DatePickerVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of the date picker trigger"
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
            "label": {
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
                    "text": "Label for input variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Select Date'"
            },
            "placeholder": {
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
                    "text": "Placeholder text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'Choose date'"
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
                "defaultValue": "false"
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
                    "original": "SelectedDate",
                    "resolved": "SelectedDate | undefined",
                    "references": {
                        "SelectedDate": {
                            "location": "import",
                            "path": "../bh-date-picker-content/bh-date-picker-content",
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
                    "original": "SelectedDate | null",
                    "resolved": "SelectedDate | null",
                    "references": {
                        "SelectedDate": {
                            "location": "import",
                            "path": "../bh-date-picker-content/bh-date-picker-content",
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
                            "location": "import",
                            "path": "../bh-date-picker-content/bh-date-picker-content",
                            "id": "src/components/bh-date-picker-content/bh-date-picker-content.tsx::SelectedDate"
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
//# sourceMappingURL=bh-date-picker.js.map
