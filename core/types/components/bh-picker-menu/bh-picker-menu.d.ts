import { EventEmitter } from '../../stencil-public-runtime';
import { MonthYear, DisabledMonth } from '../bh-month-picker-content/bh-month-picker-content';
export declare class BhPickerMenu {
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
     * Animation class for the menu
     */
    animationClass: string;
    /**
     * Whether the menu is visible
     */
    visible: boolean;
    /**
     * Whether to show the footer with action buttons
     */
    showFooter: boolean;
    /**
     * Whether to show the today button
     */
    showTodayButton: boolean;
    /**
     * Whether the apply button is disabled
     */
    disableApply: boolean;
    /**
     * Current value
     */
    value?: MonthYear;
    isClosing: boolean;
    shouldRender: boolean;
    selectedMonth: number | null;
    selectedYear: number | null;
    /**
     * Event emitted when value changes
     */
    bhChange: EventEmitter<MonthYear | null>;
    /**
     * Event emitted when a month/year is selected
     */
    bhMonthYearSelect: EventEmitter<MonthYear>;
    /**
     * Event emitted when cancel is clicked
     */
    bhCancel: EventEmitter<void>;
    /**
     * Event emitted when apply is clicked
     */
    bhApply: EventEmitter<void>;
    /**
     * Event emitted when today button is clicked
     */
    bhToday: EventEmitter<void>;
    handleVisibleChange(newValue: boolean): void;
    handleValueChange(newValue: MonthYear | undefined): void;
    componentWillLoad(): void;
    private handleMonthYearSelect;
    private handleCancel;
    private handleApply;
    private handleToday;
    render(): any;
}
