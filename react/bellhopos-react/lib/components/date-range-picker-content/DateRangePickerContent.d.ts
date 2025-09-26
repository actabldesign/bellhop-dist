import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/date-range-picker-content.css';
import { SelectedDate, DisabledDate } from '../date-picker-content/DatePickerContent';
export interface SelectedDateRange {
    startDate: SelectedDate | null;
    endDate: SelectedDate | null;
}
export interface DateRangePickerContentProps {
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledDates?: DisabledDate[];
    showOtherMonthDays?: boolean;
    value?: SelectedDateRange | null;
    onChange?: (value: SelectedDateRange | null) => void;
    onDateRangeSelect?: (value: SelectedDateRange | null) => void;
}
export declare const DateRangePickerContent: React.FC<DateRangePickerContentProps>;
export default DateRangePickerContent;
//# sourceMappingURL=DateRangePickerContent.d.ts.map