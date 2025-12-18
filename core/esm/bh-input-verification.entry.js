import { r as registerInstance, c as createEvent, a as getElement, h } from './index-nAAobRRQ.js';

const bhInputVerificationCss = ":host{display:block}.input-verification-wrapper{display:flex;flex-direction:column;gap:var(--spacing-sm);width:fit-content}.input-verification-container{display:flex;align-items:center;gap:var(--spacing-sm)}.verification-input{width:64px;height:64px;padding:0;border:1px solid var(--color-neutral-300);border-radius:var(--radius-lg);background-color:var(--color-white);font-family:var(--font-inter);font-size:3rem;font-weight:var(--weight-medium);line-height:1;color:var(--color-neutral-900);transition:all 150ms ease;outline:none;box-sizing:border-box}.verification-input.size-sm{width:64px;height:64px;font-size:3rem;border-radius:var(--radius-lg);padding:var(--spacing-xl) var(--spacing-md)}.verification-input.size-md{width:80px;height:80px;font-size:3rem;border-radius:var(--radius-lg);padding:var(--spacing-2xl) var(--spacing-3xl)}.verification-input.size-lg{width:96px;height:96px;font-size:3.75rem;border-radius:var(--radius-lg);padding:var(--spacing-3xl) var(--spacing-4xl)}.verification-input:hover:not(:disabled){border-color:var(--color-neutral-400)}.verification-input:focus{border-color:var(--color-brand-300);box-shadow:0 0 0 4px var(--color-brand-100)}.verification-input.error{border-color:var(--color-error-300)}.verification-input.error:focus{border-color:var(--color-error-300);box-shadow:0 0 0 4px var(--color-error-100)}.verification-input:disabled{background-color:var(--color-neutral-50);border-color:var(--color-neutral-300);color:var(--color-neutral-400);cursor:not-allowed}.separator{font-family:var(--font-inter);font-size:1.5rem;font-weight:var(--weight-medium);color:var(--color-neutral-400);margin:0 var(--spacing-xs);line-height:1}.separator.size-sm{font-size:1.5rem}.separator.size-md{font-size:1.5rem}.separator.size-lg{font-size:1.875rem}.hint-text{font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-600);margin-top:var(--spacing-xs)}.hint-text.error{color:var(--color-error-600)}.verification-input::placeholder{color:var(--color-neutral-400);opacity:1;font-size:inherit;font-weight:var(--weight-regular)}";

const BhInputVerification = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhChange = createEvent(this, "bhChange");
        this.bhComplete = createEvent(this, "bhComplete");
    }
    get el() { return getElement(this); }
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
    static get watchers() { return {
        "value": ["watchValue"],
        "digits": ["watchDigits"]
    }; }
};
BhInputVerification.style = bhInputVerificationCss;

export { BhInputVerification as bh_input_verification };
//# sourceMappingURL=bh-input-verification.entry.js.map
