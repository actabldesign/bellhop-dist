import { EventEmitter } from '../../stencil-public-runtime';
export type RadioButtonSize = 'sm' | 'md';
export declare class BhRadioButton {
    internals: ElementInternals;
    /**
     * The size of the radio button
     */
    size: RadioButtonSize;
    /**
     * Whether the radio button is selected
     */
    selected: boolean;
    /**
     * Whether the radio button is disabled
     */
    disabled: boolean;
    /**
     * The value associated with this radio button
     */
    value: string;
    /**
     * The name of the radio group
     */
    name: string;
    /**
     * Optional label text - when provided, renders radio with label
     */
    label: string;
    /**
     * Optional supporting text below the label
     */
    supportingText: string;
    /**
     * Track focus state internally
     */
    isFocused: boolean;
    /**
     * Track hover state internally
     */
    isHovered: boolean;
    /**
     * Emitted when the radio button selection changes
     */
    bhChange: EventEmitter<string>;
    componentDidLoad(): void;
    formResetCallback(): void;
    private handleClick;
    private handleKeyDown;
    private handleFocus;
    private handleBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private uniqueId;
    private renderRadioControl;
    render(): any;
}
