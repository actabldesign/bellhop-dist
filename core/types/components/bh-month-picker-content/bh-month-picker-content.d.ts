import { EventEmitter } from '../../stencil-public-runtime';
export interface MonthYear {
    month: number;
    year: number;
}
export interface DisabledMonth {
    month: number;
    year: number;
}
export declare class BhMonthPickerContent {
    el: HTMLElement;
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
     * Array of disabled months
     */
    disabledMonths: DisabledMonth[];
    /**
     * Whether the content is scrollable
     */
    scrollable: boolean;
    /**
     * Currently selected month (0-11)
     */
    selectedMonth?: number;
    /**
     * Currently selected year
     */
    selectedYear?: number;
    /**
     * Height of the content area
     */
    height: string;
    /**
     * Value object with month and year
     */
    value?: MonthYear;
    internalSelectedMonth: number | null;
    internalSelectedYear: number | null;
    isUsingKeyboard: boolean;
    /**
     * Event emitted when a month is selected
     */
    bhChange: EventEmitter<MonthYear>;
    /**
     * Event emitted when a month/year is selected
     */
    bhMonthYearSelect: EventEmitter<MonthYear>;
    private months;
    private currentDate;
    private currentMonth;
    private currentYear;
    handleValueChange(newValue: MonthYear | undefined): void;
    handleSelectedMonthChange(newValue: number | undefined): void;
    handleSelectedYearChange(newValue: number | undefined): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private scrollToSelectedYear;
    private getYears;
    private isCurrentMonth;
    private isMonthSelectable;
    private selectMonth;
    private handleKeyDown;
    private handleMouseDown;
    private getMonthButtonClasses;
    render(): any;
}
