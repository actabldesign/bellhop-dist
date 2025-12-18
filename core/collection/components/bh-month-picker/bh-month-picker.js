import { h, Host } from "@stencil/core";
export class BhMonthPicker {
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
        return (h(Host, { key: '0589ee8d12120966f1e16614bb4240af8cc704ef' }, h("div", { key: '7183af3b3f2ca24a6b9429123b69d642babf5017', class: "month-picker-container" }, this.variant === 'dropdown-outlined' && (h("div", { key: '6d8ff65f93cadf2f9310ead4aad911e6a17aa6e3', class: "month-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: '9b12957ab1c7aee12ca02c283e207a55d555c40d', hierarchy: "secondary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'dropdown-ghost' && (h("div", { key: '507ef5131209567f9bc715b6a33e6af962408186', class: "month-picker-trigger", onClick: this.handleTriggerClick }, h("bh-button", { key: '02d266b0a9df4acbe87beaf67bfe162fbcf9da62', hierarchy: "tertiary", size: "sm", icon: "trailing", label: this.getButtonLabel(), iconName: "expand_more", disabled: this.disabled }))), this.variant === 'input' && (h("div", { key: 'd7d103e871c3324809abc25d60ba4e7bc64342b5', class: "month-picker-trigger input-field-container" }, h("bh-input-text", { key: '5c9ce346d9b29ce131a32a6bc021fe98c48fd690', label: this.label, placeholder: this.placeholder, value: this.getDisplayValue(), disabled: this.disabled, showTrailingIcon: true, trailingIcon: "calendar_month", showHelpIcon: false, showHintText: false, showLabel: this.showLabel, width: this.inputWidth, onBhFocus: this.handleInputFocus }), h("div", { key: 'f0808d5ea14a9d6f75bf2656b06878c61196a36a', class: "calendar-icon-overlay", onClick: this.handleTriggerClick }))), h("div", { key: '53973ee2b582a3aa31cc1dad51028dfa69098f27', class: "month-picker-menu-container" }, h("bh-picker-menu", { key: '6fcb615cc650fc6e139634bae3de529ba3ffa481', visible: this.isMenuOpen, minYear: this.minYear, maxYear: this.maxYear, disabled: this.disabled, disabledMonths: this.disabledMonths, showFooter: this.showFooter, value: this.tempSelection || this.selectedValue || undefined, onBhChange: this.handleMonthYearSelect, onBhMonthYearSelect: this.handleMonthYearSelect, onBhCancel: this.handleMenuCancel, onBhApply: this.handleMenuApply }))), (this.isMenuOpen || this.isMenuClosing) && (h("div", { key: 'd142281cbda719b7df39015eab43da3d118ceeed', class: "month-picker-backdrop", onClick: this.handleBackdropClick }))));
    }
    static get is() { return "bh-month-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-month-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-month-picker.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MonthPickerVariant",
                    "resolved": "\"dropdown-ghost\" | \"dropdown-outlined\" | \"input\"",
                    "references": {
                        "MonthPickerVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-month-picker/bh-month-picker.tsx",
                            "id": "src/components/bh-month-picker/bh-month-picker.tsx::MonthPickerVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of the month picker trigger"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'dropdown-outlined'"
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
                "defaultValue": "'Select Month'"
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
                "defaultValue": "'Choose month and year'"
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
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
//# sourceMappingURL=bh-month-picker.js.map
