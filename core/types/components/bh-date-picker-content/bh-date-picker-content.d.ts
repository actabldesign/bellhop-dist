import { EventEmitter } from '../../stencil-public-runtime';
export interface SelectedDate {
    year: number;
    month: number;
    day: number;
}
export interface DisabledDate {
    year: number;
    month: number;
    day: number;
}
export declare class BhDatePickerContent {
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
     * Initial month to display (0-11)
     */
    initialMonth?: number;
    /**
     * Initial year to display
     */
    initialYear?: number;
    /**
     * Display month (for external control, 0-11)
     */
    displayMonth?: number;
    /**
     * Display year (for external control)
     */
    displayYear?: number;
    /**
     * Range start date (for date range picker)
     */
    rangeStart?: SelectedDate;
    /**
     * Range end date (for date range picker)
     */
    rangeEnd?: SelectedDate;
    /**
     * Currently selected value
     */
    value?: SelectedDate;
    /**
     * Whether to show days from other months
     */
    showOtherMonthDays: boolean;
    selectedDate: SelectedDate | null;
    currentMonth: number;
    currentYear: number;
    isMonthDropdownOpen: boolean;
    isMonthDropdownClosing: boolean;
    private today;
    private monthNames;
    private dayNames;
    /**
     * Event emitted when value changes
     */
    bhChange: EventEmitter<SelectedDate | null>;
    /**
     * Event emitted when a date is selected
     */
    bhDateSelect: EventEmitter<SelectedDate | null>;
    /**
     * Event emitted when month changes
     */
    bhMonthChange: EventEmitter<{
        month: number;
        year: number;
    }>;
    /**
     * Event emitted when month/year changes
     */
    bhMonthYearChange: EventEmitter<{
        month: number;
        year: number;
    }>;
    handleValueChange(newValue: SelectedDate | undefined): void;
    handleDisplayMonthChange(newValue: number | undefined): void;
    handleDisplayYearChange(newValue: number | undefined): void;
    componentWillLoad(): void;
    private get isInRangeMode();
    private get calendarCells();
    private createCell;
    private isSameDay;
    private isDateDisabled;
    private isDateSelected;
    private isDateRangeStart;
    private isDateRangeEnd;
    private isDateInRange;
    private handleCellClick;
    private handleMonthDropdownToggle;
    private closeMonthDropdown;
    private handleMonthYearSelect;
    private handlePreviousMonth;
    private handleNextMonth;
    private getCellClass;
    render(): any;
}
