import { h } from "@stencil/core";
export class BhInputVerification {
    el;
    /**
     * Size variant of the input fields
     */
    size = 'md';
    /**
     * Number of digits (4 or 6)
     */
    digits = 4;
    /**
     * Label text for the input
     */
    label = 'Secure code';
    /**
     * Whether to show the label
     */
    showLabel = true;
    /**
     * Hint text displayed below the inputs
     */
    hintText = 'This is a hint text to help user.';
    /**
     * Whether to show the hint text
     */
    showHintText = true;
    /**
     * Whether the input is in an error state
     */
    error = false;
    /**
     * Whether the input is disabled
     */
    disabled = false;
    /**
     * Whether the field is required
     */
    required = false;
    /**
     * Whether to show the separator for 6-digit codes
     */
    showSeparator = true;
    /**
     * Placeholder character for empty inputs
     */
    placeholder = '';
    /**
     * Width of the component
     */
    width = '';
    /**
     * Current value of the verification code
     */
    value = '';
    values = [];
    inputRefs = [];
    /**
     * Event emitted when the value changes
     */
    bhChange;
    /**
     * Event emitted when all digits are filled
     */
    bhComplete;
    watchValue(newValue) {
        const newValues = newValue.split('').concat(Array(this.digits).fill('')).slice(0, this.digits);
        this.values = newValues;
    }
    watchDigits() {
        this.values = Array(this.digits).fill('');
    }
    componentWillLoad() {
        this.values = this.value
            ? this.value.split('').concat(Array(this.digits).fill('')).slice(0, this.digits)
            : Array(this.digits).fill('');
    }
    componentDidLoad() {
        // Focus first input on mount if not disabled
        if (!this.disabled) {
            const firstInput = this.el.shadowRoot?.querySelector('input');
            firstInput?.focus();
        }
    }
    updateValues(newValues) {
        this.values = newValues;
        const newValue = newValues.join('');
        this.value = newValue;
        this.bhChange.emit(newValue);
        // Check if all fields are filled
        if (newValues.every(val => val !== '')) {
            this.bhComplete.emit(newValue);
        }
    }
    handleInputChange(index, event) {
        const input = event.target;
        const inputValue = input.value;
        // Only allow single digits
        const digit = inputValue.replace(/\D/g, '').slice(-1);
        const newValues = [...this.values];
        newValues[index] = digit;
        this.updateValues(newValues);
        // Auto-advance to next input if digit entered
        if (digit && index < this.digits - 1) {
            const nextInput = this.el.shadowRoot?.querySelectorAll('input')[index + 1];
            nextInput?.focus();
        }
    }
    handleKeyDown(index, event) {
        if (event.key === 'Backspace') {
            event.preventDefault();
            const newValues = [...this.values];
            if (this.values[index]) {
                // Clear current field
                newValues[index] = '';
                this.updateValues(newValues);
            }
            else if (index > 0) {
                // Move to previous field and clear it
                newValues[index - 1] = '';
                this.updateValues(newValues);
                const prevInput = this.el.shadowRoot?.querySelectorAll('input')[index - 1];
                prevInput?.focus();
            }
        }
        else if (event.key === 'ArrowLeft' && index > 0) {
            event.preventDefault();
            const prevInput = this.el.shadowRoot?.querySelectorAll('input')[index - 1];
            prevInput?.focus();
        }
        else if (event.key === 'ArrowRight' && index < this.digits - 1) {
            event.preventDefault();
            const nextInput = this.el.shadowRoot?.querySelectorAll('input')[index + 1];
            nextInput?.focus();
        }
        else if (event.key >= '0' && event.key <= '9') {
            event.preventDefault();
            const newValues = [...this.values];
            newValues[index] = event.key;
            this.updateValues(newValues);
            // Auto-advance to next input
            if (index < this.digits - 1) {
                const nextInput = this.el.shadowRoot?.querySelectorAll('input')[index + 1];
                nextInput?.focus();
            }
        }
    }
    handlePaste(event) {
        event.preventDefault();
        const pastedText = event.clipboardData?.getData('text') || '';
        const pastedDigits = pastedText.replace(/\D/g, '').slice(0, this.digits);
        if (pastedDigits) {
            const newValues = pastedDigits.split('').concat(Array(this.digits).fill('')).slice(0, this.digits);
            this.updateValues(newValues);
            // Focus on the next empty input or last input
            const nextEmptyIndex = newValues.findIndex(val => val === '');
            const focusIndex = nextEmptyIndex === -1 ? this.digits - 1 : Math.min(nextEmptyIndex, this.digits - 1);
            const inputToFocus = this.el.shadowRoot?.querySelectorAll('input')[focusIndex];
            inputToFocus?.focus();
        }
    }
    handleFocus(event) {
        const input = event.target;
        input.select();
    }
    renderInputs() {
        const inputs = [];
        for (let i = 0; i < this.digits; i++) {
            // Add separator for 6-digit codes
            if (this.digits === 6 && i === 3 && this.showSeparator) {
                inputs.push(h("span", { key: "separator", class: { 'separator': true, [`size-${this.size}`]: true } }, "-"));
            }
            inputs.push(h("input", { key: i, type: "text", inputmode: "numeric", pattern: "[0-9]", maxLength: 1, value: this.values[i] || '', placeholder: this.placeholder && i < this.placeholder.length ? this.placeholder[i] : '', disabled: this.disabled, class: {
                    'verification-input': true,
                    [`size-${this.size}`]: true,
                    'error': this.error,
                }, onInput: (e) => this.handleInputChange(i, e), onKeyDown: (e) => this.handleKeyDown(i, e), onPaste: (e) => this.handlePaste(e), onFocus: (e) => this.handleFocus(e), "aria-label": `Digit ${i + 1} of ${this.digits}` }));
        }
        return inputs;
    }
    render() {
        const wrapperStyle = this.width ? { width: this.width } : {};
        return (h("div", { key: '7690b5bc54608825372174583aee015632f1f30f', class: "input-verification-wrapper", style: wrapperStyle }, h("bh-label", { key: '8cde1454d3162ae8750abfbb222b51301a40bbcc', label: this.showLabel ? this.label : '', required: this.required, disabled: this.disabled }, h("div", { key: 'f6692a5af965eb6bf96a58b1144405e78a63b618', class: "input-verification-container" }, this.renderInputs())), this.showHintText && this.hintText && (h("div", { key: '37a9dfb6a9f441e40fdd336a677cbce8ee1ce877', class: { 'hint-text': true, 'error': this.error } }, this.hintText))));
    }
    static get is() { return "bh-input-verification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-input-verification.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-input-verification.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputVerificationSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "InputVerificationSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-input-verification/bh-input-verification.tsx",
                            "id": "src/components/bh-input-verification/bh-input-verification.tsx::InputVerificationSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size variant of the input fields"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "digits": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "InputVerificationDigits",
                    "resolved": "4 | 6",
                    "references": {
                        "InputVerificationDigits": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-input-verification/bh-input-verification.tsx",
                            "id": "src/components/bh-input-verification/bh-input-verification.tsx::InputVerificationDigits"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of digits (4 or 6)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "digits",
                "defaultValue": "4"
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
                    "text": "Label text for the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Secure code'"
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
            "hintText": {
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
                    "text": "Hint text displayed below the inputs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint-text",
                "defaultValue": "'This is a hint text to help user.'"
            },
            "showHintText": {
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
                    "text": "Whether to show the hint text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-hint-text",
                "defaultValue": "true"
            },
            "error": {
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
                    "text": "Whether the input is in an error state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error",
                "defaultValue": "false"
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
                    "text": "Whether the input is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "required": {
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
                    "text": "Whether the field is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
            },
            "showSeparator": {
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
                    "text": "Whether to show the separator for 6-digit codes"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-separator",
                "defaultValue": "true"
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
                    "text": "Placeholder character for empty inputs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
            },
            "width": {
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
                    "text": "Width of the component"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the verification code"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "values": {},
            "inputRefs": {}
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
                    "text": "Event emitted when the value changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "bhComplete",
                "name": "bhComplete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when all digits are filled"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "digits",
                "methodName": "watchDigits"
            }];
    }
}
//# sourceMappingURL=bh-input-verification.js.map
