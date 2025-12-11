import { EventEmitter } from '../../stencil-public-runtime';
export type InputNumberState = 'placeholder' | 'filled' | 'hover' | 'focused';
export declare class BhInputNumber {
    el: HTMLElement;
    internals: ElementInternals;
    private inputEl?;
    /**
     * Whether the input is in an error state
     */
    error: boolean;
    /**
     * Whether the field is required
     */
    required: boolean;
    /**
     * Whether the input is disabled
     */
    disabled: boolean;
    /**
     * Whether to show the help icon
     */
    showHelpIcon: boolean;
    /**
     * Whether to show the leading icon
     */
    showLeadingIcon: boolean;
    /**
     * Whether to show the label
     */
    showLabel: boolean;
    /**
     * Whether to show the hint text
     */
    showHintText: boolean;
    /**
     * Label text for the input
     */
    label: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Hint text displayed below the input
     */
    hintText: string;
    /**
     * Leading icon name (Material Symbols)
     */
    leadingIcon: string;
    /**
     * Tooltip text for the help icon
     */
    helpIconTooltip: string;
    /**
     * Current numeric value
     */
    value: number | null;
    /**
     * Minimum allowed value
     */
    min: number | null;
    /**
     * Maximum allowed value
     */
    max: number | null;
    /**
     * Step value for increment/decrement
     */
    step: number;
    /**
     * Text prefix before the input value
     */
    prefixText: string;
    /**
     * Text suffix after the input value
     */
    suffixText: string;
    /**
     * Width of the component
     */
    width: string;
    /**
     * Name attribute for form submission
     */
    name: string;
    /**
     * Default value for form reset
     */
    defaultValue: number | null;
    /**
     * Custom validation message
     */
    validationMessage: string;
    internalState: InputNumberState;
    isHovered: boolean;
    isFocused: boolean;
    internalValue: number | null;
    hasValidationError: boolean;
    /**
     * Event emitted when the value changes
     */
    bhChange: EventEmitter<number | null>;
    /**
     * Event emitted when the input receives focus
     */
    bhFocus: EventEmitter<void>;
    /**
     * Event emitted when the input loses focus
     */
    bhBlur: EventEmitter<void>;
    /**
     * Event emitted when the help icon is clicked
     */
    bhHelpClick: EventEmitter<void>;
    private get isControlled();
    private get currentValue();
    watchValue(newValue: number | null): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    formResetCallback(): void;
    private syncNumberFormValue;
    private isOutOfBounds;
    private updateInternalState;
    private validateValue;
    private updateValue;
    private handleInputChange;
    private increment;
    private decrement;
    private handleInputFocus;
    private handleInputBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleHelpIconClick;
    private getValidationErrorMessage;
    render(): any;
}
