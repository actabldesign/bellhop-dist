import { EventEmitter } from '../../stencil-public-runtime';
import { MonthYear, DisabledMonth } from '../bh-month-picker-content/bh-month-picker-content';
export type MonthPickerVariant = 'dropdown-outlined' | 'dropdown-ghost' | 'input';
export declare class BhMonthPicker {
    /**
     * Variant of the month picker trigger
     */
    variant: MonthPickerVariant;
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
     * Currently selected value
     */
    value?: MonthYear;
    selectedValue: MonthYear | null;
    tempSelection: MonthYear | null;
    isMenuOpen: boolean;
    isMenuClosing: boolean;
    /**
     * Event emitted when value changes
     */
    bhChange: EventEmitter<MonthYear | null>;
    /**
     * Event emitted when a month/year is selected
     */
    bhMonthYearSelect: EventEmitter<MonthYear>;
    handleValueChange(newValue: MonthYear | undefined): void;
    componentWillLoad(): void;
    private getDisplayValue;
    private getButtonLabel;
    private handleTriggerClick;
    private handleInputFocus;
    private handleMonthYearSelect;
    private handleMenuCancel;
    private handleMenuApply;
    private closeMenu;
    private handleBackdropClick;
    render(): any;
}
