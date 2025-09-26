import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/date-picker.css';
import { SelectedDate, DisabledDate } from '../date-picker-content/DatePickerContent';
export type DatePickerVariant = 'dropdown-outlined' | 'dropdown-ghost' | 'input';
export interface DatePickerProps {
    variant?: DatePickerVariant;
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledDates?: DisabledDate[];
    label?: string;
    placeholder?: string;
    inputWidth?: string;
    showLabel?: boolean;
    showFooter?: boolean;
    showOtherMonthDays?: boolean;
    value?: SelectedDate | null;
    onChange?: (value: SelectedDate | null) => void;
    onDateSelect?: (value: SelectedDate | null) => void;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
//# sourceMappingURL=DatePicker.d.ts.map