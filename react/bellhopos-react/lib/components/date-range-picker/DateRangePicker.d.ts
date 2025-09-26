import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/date-range-picker.css';
import { SelectedDateRange } from '../date-range-picker-content/DateRangePickerContent';
import { DisabledDate } from '../date-picker-content/DatePickerContent';
export type DateRangePickerVariant = 'dropdown-outlined' | 'dropdown-ghost' | 'input';
export interface DateRangePickerProps {
    variant?: DateRangePickerVariant;
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledDates?: DisabledDate[];
    startLabel?: string;
    endLabel?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    inputWidth?: string;
    showLabel?: boolean;
    showFooter?: boolean;
    showOtherMonthDays?: boolean;
    value?: SelectedDateRange | null;
    onChange?: (value: SelectedDateRange | null) => void;
    onDateRangeSelect?: (value: SelectedDateRange | null) => void;
}
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
export default DateRangePicker;
//# sourceMappingURL=DateRangePicker.d.ts.map