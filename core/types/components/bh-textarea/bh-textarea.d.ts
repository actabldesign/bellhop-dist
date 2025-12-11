import { EventEmitter } from '../../stencil-public-runtime';
export type TextareaResize = 'none' | 'both' | 'horizontal' | 'vertical';
export declare class BhTextarea {
    internals: ElementInternals;
    private textareaEl?;
    /**
     * The label for the textarea
     */
    label: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Hint text shown below the textarea
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
     * Whether the field has an error
     */
    error: boolean;
    /**
     * Whether the textarea is disabled
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
     * The textarea value
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
     * Number of visible rows
     */
    rows: number;
    /**
     * Resize behavior
     */
    resize: TextareaResize;
    /**
     * Maximum character length
     */
    maxLength?: number;
    /**
     * Track focus state
     */
    isFocused: boolean;
    /**
     * Emitted when the value changes
     */
    bhInput: EventEmitter<string>;
    /**
     * Emitted when the textarea gains focus
     */
    bhFocus: EventEmitter<void>;
    /**
     * Emitted when the textarea loses focus
     */
    bhBlur: EventEmitter<void>;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick: EventEmitter<void>;
    componentDidLoad(): void;
    formResetCallback(): void;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private handleHelpClick;
    render(): any;
}
