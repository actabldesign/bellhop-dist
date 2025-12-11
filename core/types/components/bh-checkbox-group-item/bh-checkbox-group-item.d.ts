import { EventEmitter } from '../../stencil-public-runtime';
export type CheckboxGroupItemType = 'checkbox' | 'radio' | 'icon-simple';
export type CheckboxGroupItemSize = 'sm' | 'md';
export declare class BhCheckboxGroupItem {
    /**
     * The type of input control
     */
    type: CheckboxGroupItemType;
    /**
     * The size variant
     */
    size: CheckboxGroupItemSize;
    /**
     * Unique value identifier for this item
     */
    value: string;
    /**
     * Whether the item is checked (for checkbox type)
     */
    checked: boolean;
    /**
     * Whether the item is selected (for radio type)
     */
    selected: boolean;
    /**
     * Whether the item is disabled
     */
    disabled: boolean;
    /**
     * Material Symbol icon name (for icon-simple type)
     */
    icon: string;
    /**
     * Title text
     */
    itemTitle: string;
    /**
     * Subtitle text (inline with title)
     */
    subtitle: string;
    /**
     * Description text
     */
    description: string;
    /**
     * Radio group name (for radio type)
     */
    name: string;
    isHovered: boolean;
    isFocused: boolean;
    /**
     * Emitted when the item state changes
     */
    bhItemChange: EventEmitter<{
        value: string;
        checked: boolean;
    }>;
    private handleClick;
    private handleKeyDown;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    private handleBlur;
    private handleCheckboxChange;
    private handleRadioChange;
    render(): any;
}
