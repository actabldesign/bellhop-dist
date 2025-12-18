import { EventEmitter } from '../../stencil-public-runtime';
export type InputVerificationSize = 'sm' | 'md' | 'lg';
export type InputVerificationDigits = 4 | 6;
export declare class BhInputVerification {
    el: HTMLElement;
    /**
     * Size variant of the input fields
     */
    size: InputVerificationSize;
    /**
     * Number of digits (4 or 6)
     */
    digits: InputVerificationDigits;
    /**
     * Label text for the input
     */
    label: string;
    /**
     * Whether to show the label
     */
    showLabel: boolean;
    /**
     * Hint text displayed below the inputs
     */
    hintText: string;
    /**
     * Whether to show the hint text
     */
    showHintText: boolean;
    /**
     * Whether the input is in an error state
     */
    error: boolean;
    /**
     * Whether the input is disabled
     */
    disabled: boolean;
    /**
     * Whether the field is required
     */
    required: boolean;
    /**
     * Whether to show the separator for 6-digit codes
     */
    showSeparator: boolean;
    /**
     * Placeholder character for empty inputs
     */
    placeholder: string;
    /**
     * Width of the component
     */
    width: string;
    /**
     * Current value of the verification code
     */
    value: string;
    values: string[];
    inputRefs: HTMLInputElement[];
    /**
     * Event emitted when the value changes
     */
    bhChange: EventEmitter<string>;
    /**
     * Event emitted when all digits are filled
     */
    bhComplete: EventEmitter<string>;
    watchValue(newValue: string): void;
    watchDigits(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private updateValues;
    private handleInputChange;
    private handleKeyDown;
    private handlePaste;
    private handleFocus;
    private renderInputs;
    render(): any;
}
