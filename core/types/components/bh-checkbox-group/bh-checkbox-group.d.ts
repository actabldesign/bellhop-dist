import { EventEmitter } from '../../stencil-public-runtime';
export type CheckboxGroupType = 'checkbox' | 'radio' | 'icon-simple';
export declare class BhCheckboxGroup {
    el: HTMLElement;
    /**
     * The type of input controls in the group
     */
    type: CheckboxGroupType;
    /**
     * The name for radio group (required for radio type)
     */
    name: string;
    /**
     * Current selected value(s)
     * For checkbox: array of values
     * For radio: single value string
     */
    value: string | string[];
    /**
     * Whether all items in the group are disabled
     */
    disabled: boolean;
    /**
     * Emitted when selection changes
     */
    bhChange: EventEmitter<string | string[]>;
    handleItemChange(event: CustomEvent<{
        value: string;
        checked: boolean;
    }>): void;
    componentDidLoad(): void;
    private updateChildItems;
    render(): any;
}
