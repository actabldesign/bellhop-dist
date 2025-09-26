import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/date-picker-content.css';
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
export interface DatePickerContentProps {
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledDates?: DisabledDate[];
    scrollable?: boolean;
    animationClass?: string;
    initialMonth?: number | null;
    initialYear?: number | null;
    displayMonth?: number;
    displayYear?: number;
    rangeStart?: SelectedDate | null;
    rangeEnd?: SelectedDate | null;
    value?: SelectedDate | null;
    showOtherMonthDays?: boolean;
    isDateInRange?: (date: SelectedDate) => boolean;
    isDateSelected?: (date: SelectedDate) => boolean;
    isDateRangeStart?: (date: SelectedDate) => boolean;
    isDateRangeEnd?: (date: SelectedDate) => boolean;
    onChange?: (value: SelectedDate | null) => void;
    onDateSelect?: (date: SelectedDate | null) => void;
    onMonthChange?: (month: {
        month: number;
        year: number;
    }) => void;
    onMonthYearChange?: (month: number, year: number) => void;
}
export declare const DatePickerContent: React.FC<DatePickerContentProps>;
export default DatePickerContent;
//# sourceMappingURL=DatePickerContent.d.ts.map