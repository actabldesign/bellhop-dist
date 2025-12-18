import { EventEmitter } from '../../stencil-public-runtime';
import { SelectedDate, DisabledDate } from '../bh-date-picker-content/bh-date-picker-content';
export interface SelectedDateRange {
    startDate: SelectedDate | null;
    endDate: SelectedDate | null;
}
export declare class BhDateRangePickerContent {
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
     * Whether to show days from other months
     */
    showOtherMonthDays: boolean;
    /**
     * Currently selected value
     */
    value?: SelectedDateRange;
    selectedRange: SelectedDateRange | null;
    leftMonth: number;
    leftYear: number;
    rightMonth: number;
    rightYear: number;
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
    private getNextMonth;
    private getPreviousMonth;
    private handleLeftDateSelect;
    private handleRightDateSelect;
    private handleDateSelect;
    private handleLeftMonthYearChange;
    private handleRightMonthYearChange;
    render(): any;
}
