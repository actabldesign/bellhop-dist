import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/month-picker.css';
import { MonthYear, DisabledMonth } from '../month-picker-content/MonthPickerContent';
export type MonthPickerVariant = 'dropdown-outlined' | 'dropdown-ghost' | 'input';
export interface MonthPickerProps {
    variant?: MonthPickerVariant;
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledMonths?: DisabledMonth[];
    label?: string;
    placeholder?: string;
    inputWidth?: string;
    showLabel?: boolean;
    showFooter?: boolean;
    value?: MonthYear | null;
    onChange?: (value: MonthYear | null) => void;
    onMonthYearSelect?: (value: MonthYear) => void;
}
export declare const MonthPicker: React.FC<MonthPickerProps>;
export default MonthPicker;
//# sourceMappingURL=MonthPicker.d.ts.map