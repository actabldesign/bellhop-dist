import { EventEmitter } from '../../stencil-public-runtime';
import { SelectedDate, DisabledDate } from '../bh-date-picker-content/bh-date-picker-content';
export type DatePickerVariant = 'dropdown-outlined' | 'dropdown-ghost' | 'input';
export declare class BhDatePicker {
    /**
     * Variant of the date picker trigger
     */
    variant: DatePickerVariant;
    /**
     * Minimum year in the picker
     */
    minYear: number;
    /**
     * Maximum year in the picker
     */
    maxYear: number;
    /**
     * Whether the picker is disabled
     */
    disabled: boolean;
    /**
     * Array of disabled dates
     */
    disabledDates: DisabledDate[];
    /**
     * Label for input variant
     */
    label: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Width for input variant
     */
    inputWidth: string;
    /**
     * Whether to show the label
     */
    showLabel: boolean;
    /**
     * Whether to show the footer
     */
    showFooter: boolean;
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays: boolean;
    /**
     * Currently selected value
     */
    value?: SelectedDate;
    selectedValue: SelectedDate | null;
    tempSelection: SelectedDate | null;
    isMenuOpen: boolean;
    isMenuClosing: boolean;
    /**
     * Event emitted when value changes
     */
    bhChange: EventEmitter<SelectedDate | null>;
    /**
     * Event emitted when a date is selected
     */
    bhDateSelect: EventEmitter<SelectedDate | null>;
    handleValueChange(newValue: SelectedDate | undefined): void;
    componentWillLoad(): void;
    private getDisplayValue;
    private getButtonLabel;
    private handleTriggerClick;
    private handleInputFocus;
    private handleDateSelect;
    private handleMenuCancel;
    private handleMenuApply;
    private handleToday;
    private closeMenu;
    private handleBackdropClick;
    render(): any;
}
