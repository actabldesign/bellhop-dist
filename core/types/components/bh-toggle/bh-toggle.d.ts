import { EventEmitter } from '../../stencil-public-runtime';
export type ToggleSize = 'sm' | 'md';
export declare class BhToggle {
    internals: ElementInternals;
    /**
     * The size of the toggle
     */
    size: ToggleSize;
    /**
     * Whether to show the label and supporting text
     */
    showText: boolean;
    /**
     * The label text
     */
    label: string;
    /**
     * Supporting text below the label
     */
    supportingText: string;
    /**
     * Whether the toggle is disabled
     */
    disabled: boolean;
    /**
     * Whether the toggle is checked (controlled mode)
     */
    checked: boolean;
    /**
     * Name attribute for form submission
     */
    name: string;
    /**
     * Value when checked (default: 'on')
     */
    value: string;
    /**
     * Whether the toggle is required
     */
    required: boolean;
    /**
     * Default checked state for form reset
     */
    defaultChecked: boolean;
    /**
     * Internal focus state
     */
    isFocused: boolean;
    /**
     * Internal hover state
     */
    isHovered: boolean;
    /**
     * Emitted when the toggle state changes
     */
    bhChange: EventEmitter<boolean>;
    componentDidLoad(): void;
    formResetCallback(): void;
    private handleToggle;
    private handleKeyDown;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    private handleBlur;
    render(): any;
}
