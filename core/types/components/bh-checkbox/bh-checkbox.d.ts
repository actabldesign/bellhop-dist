import { EventEmitter } from '../../stencil-public-runtime';
export type CheckboxSize = 'sm' | 'md';
export declare class BhCheckbox {
    el: HTMLElement;
    internals: ElementInternals;
    private inputRef?;
    private uniqueId;
    /** Checkbox size */
    size: CheckboxSize;
    /** Checked state */
    checked: boolean;
    /** Indeterminate state */
    indeterminate: boolean;
    /** Disabled state */
    disabled: boolean;
    /** Name attribute for form submission */
    name: string;
    /** Value attribute for form submission */
    value: string;
    /** Optional label text - when provided, renders checkbox with label */
    label: string;
    /** Optional supporting text below the label */
    supportingText: string;
    /** Whether the checkbox is required */
    required: boolean;
    /** Default checked state for form reset */
    defaultChecked: boolean;
    /** Internal hover state */
    isHovered: boolean;
    /** Internal focus state */
    isFocused: boolean;
    /** Emitted when checkbox state changes via user interaction */
    bhChange: EventEmitter<boolean>;
    handleCheckedChange(newValue: boolean): void;
    handleIndeterminateChange(newValue: boolean): void;
    componentDidLoad(): void;
    formResetCallback(): void;
    private handleChange;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    private handleBlur;
    private handleControlClick;
    private renderCheckboxControl;
    render(): any;
}
