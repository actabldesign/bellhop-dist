import { EventEmitter } from '../../stencil-public-runtime';
import { DisabledDate } from '../bh-date-picker-content/bh-date-picker-content';
import { SelectedDateRange } from '../bh-date-range-picker-content/bh-date-range-picker-content';
export type DateRangePickerVariant = 'dropdown-outlined' | 'dropdown-ghost' | 'input';
export declare class BhDateRangePicker {
    /**
     * Variant of the date range picker trigger
     */
    variant: DateRangePickerVariant;
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
     * Label for start date input
     */
    startLabel: string;
    /**
     * Label for end date input
     */
    endLabel: string;
    /**
     * Placeholder for start date
     */
    startPlaceholder: string;
    /**
     * Placeholder for end date
     */
    endPlaceholder: string;
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
    value?: SelectedDateRange;
    selectedValue: SelectedDateRange | null;
    tempSelection: SelectedDateRange | null;
    isMenuOpen: boolean;
    isMenuClosing: boolean;
    /**
     * Event emitted when value changes
     */
    bhChange: EventEmitter<SelectedDateRange | null>;
    /**
     * Event emitted when a date range is selected
     */
    bhDateRangeSelect: EventEmitter<SelectedDateRange | null>;
    handleValueChange(newValue: SelectedDateRange | undefined): void;
    componentWillLoad(): void;
    private formatDate;
    private getButtonLabel;
    private handleTriggerClick;
    handleDateRangeSelectEvent(event: CustomEvent<SelectedDateRange | null>): void;
    private handleMenuCancel;
    private handleMenuApply;
    private closeMenu;
    private handleBackdropClick;
    render(): any;
}
