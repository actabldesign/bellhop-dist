import { EventEmitter } from '../../stencil-public-runtime';
import { AutocompleteMenuItem } from '../bh-autocomplete-menu/bh-autocomplete-menu';
export type InputAutocompleteState = 'placeholder' | 'filled' | 'hover' | 'focused';
export declare class BhInputAutocomplete {
    el: HTMLElement;
    /**
     * Input state
     */
    state?: InputAutocompleteState;
    /**
     * Whether input has error
     */
    error: boolean;
    /**
     * Whether input is required
     */
    required: boolean;
    /**
     * Whether input is disabled
     */
    disabled: boolean;
    /**
     * Whether to show help icon
     */
    showHelpIcon: boolean;
    /**
     * Whether to show leading icon
     */
    showLeadingIcon: boolean;
    /**
     * Whether to show label
     */
    showLabel: boolean;
    /**
     * Whether to show hint text
     */
    showHintText: boolean;
    /**
     * Label text
     */
    label: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Hint text
     */
    hintText: string;
    /**
     * Leading icon name
     */
    leadingIcon: string;
    /**
     * Help icon tooltip
     */
    helpIconTooltip: string;
    /**
     * Current value
     */
    value: string;
    /**
     * Width of the component
     */
    width: string;
    /**
     * Available options
     */
    options: AutocompleteMenuItem[];
    /**
     * Maximum number of options to show
     */
    maxOptions: number;
    /**
     * Enable multi-select mode
     */
    multiSelect: boolean;
    /**
     * Minimum search length to show options
     */
    minSearchLength: number;
    /**
     * Selected items (for multi-select)
     */
    selectedItems: AutocompleteMenuItem[];
    showDropdown: boolean;
    focusedOptionIndex: number;
    isFocused: boolean;
    isHovered: boolean;
    isTagClickOpen: boolean;
    /**
     * Event emitted when value changes
     */
    bhChange: EventEmitter<string>;
    /**
     * Event emitted when selected items change
     */
    bhSelectedItemsChange: EventEmitter<AutocompleteMenuItem[]>;
    /**
     * Event emitted when input is focused
     */
    bhFocus: EventEmitter<void>;
    /**
     * Event emitted when input is blurred
     */
    bhBlur: EventEmitter<void>;
    /**
     * Event emitted when help icon is clicked
     */
    bhHelpClick: EventEmitter<void>;
    /**
     * Event emitted when an option is selected
     */
    bhOptionSelect: EventEmitter<AutocompleteMenuItem>;
    handleValueChange(newValue: string): void;
    private get filteredOptions();
    private get shouldShowClearButton();
    private get visibleTags();
    private handleInputChange;
    private handleInputFocus;
    private getInputTextState;
    private handleInputBlur;
    private handleOptionSelect;
    private handleTagRemove;
    private handleTagClick;
    private handleClearAll;
    private handleKeyDown;
    private handleItemHover;
    render(): any;
}
