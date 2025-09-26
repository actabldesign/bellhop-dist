import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/month-picker-content.css';
export interface MonthYear {
    month: number;
    year: number;
}
export interface DisabledMonth {
    month: number;
    year: number;
}
export interface MonthPickerContentProps {
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledMonths?: DisabledMonth[];
    scrollable?: boolean;
    selectedMonth?: number | null;
    selectedYear?: number | null;
    height?: string;
    value?: MonthYear | null;
    onChange?: (value: MonthYear | null) => void;
    onMonthYearSelect?: (selection: MonthYear) => void;
}
export declare const MonthPickerContent: React.FC<MonthPickerContentProps>;
export default MonthPickerContent;
//# sourceMappingURL=MonthPickerContent.d.ts.map