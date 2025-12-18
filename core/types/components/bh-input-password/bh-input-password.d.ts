import { EventEmitter } from '../../stencil-public-runtime';
export declare class BhInputPassword {
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
     * Track focus state
     */
    isFocused: boolean;
    /**
     * Track hover state
     */
    isHovered: boolean;
    /**
     * Track password visibility
     */
    showPassword: boolean;
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
    /**
     * Emitted when visibility is toggled
     */
    bhVisibilityToggle: EventEmitter<boolean>;
    componentDidLoad(): void;
    formResetCallback(): void;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private togglePasswordVisibility;
    private handleHelpClick;
    render(): any;
}
