import { EventEmitter } from '../../stencil-public-runtime';
export declare class BhInputText {
    internals: ElementInternals;
    private inputEl?;
    /**
     * The label for the input
     */
    label: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Hint text shown below the input
     */
    hintText: string;
    /**
     * Whether to show the label
     */
    showLabel: boolean;
    /**
     * Whether to show hint text
     */
    showHintText: boolean;
    /**
     * Whether to show the help icon
     */
    showHelpIcon: boolean;
    /**
     * Whether to show a leading icon
     */
    showLeadingIcon: boolean;
    /**
     * Whether to show a trailing icon
     */
    showTrailingIcon: boolean;
    /**
     * Whether the field has an error
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
     * Tooltip text for the help icon
     */
    helpIconTooltip: string;
    /**
     * Leading icon name (Material Symbols)
     */
    leadingIcon: string;
    /**
     * Trailing icon name (Material Symbols)
     */
    trailingIcon: string;
    /**
     * The input value
     */
    value: string;
    /**
     * Name attribute for form submission
     */
    name: string;
    /**
     * Default value for form reset
     */
    defaultValue: string;
    /**
     * Custom validation message
     */
    validationMessage: string;
    /**
     * Input type (text, email, tel, url, etc.)
     */
    type: string;
    /**
     * Width of the input (e.g., '100%', '200px')
     */
    width: string;
    /**
     * Whether the input is read-only
     */
    readOnly: boolean;
    /**
     * Visual state of the input (for programmatic control)
     */
    state: 'default' | 'error' | 'disabled' | 'focus' | 'filled' | 'hover';
    /**
     * Track focus state
     */
    isFocused: boolean;
    /**
     * Track hover state
     */
    isHovered: boolean;
    /**
     * Emitted when the value changes
     */
    bhInput: EventEmitter<string>;
    /**
     * Emitted when the input gains focus
     */
    bhFocus: EventEmitter<void>;
    /**
     * Emitted when the input loses focus
     */
    bhBlur: EventEmitter<void>;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick: EventEmitter<void>;
    private handleInput;
    componentDidLoad(): void;
    formResetCallback(): void;
    private handleFocus;
    private handleBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleHelpClick;
    render(): any;
}
