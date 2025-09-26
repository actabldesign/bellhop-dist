import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/picker-menu.css';
import '../../../../../bellhopos-styles/src/tokens/bellhop-animations.css';
import { MonthYear, DisabledMonth } from '../month-picker-content/MonthPickerContent';
export interface PickerMenuProps {
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
    disabledMonths?: DisabledMonth[];
    animationClass?: string;
    visible?: boolean;
    showFooter?: boolean;
    showTodayButton?: boolean;
    disableApply?: boolean;
    value?: MonthYear | null;
    children?: React.ReactNode;
    onChange?: (value: MonthYear | null) => void;
    onMonthYearSelect?: (selection: MonthYear) => void;
    onCancel?: () => void;
    onApply?: () => void;
    onToday?: () => void;
}
export declare const PickerMenu: React.FC<PickerMenuProps>;
export default PickerMenu;
//# sourceMappingURL=PickerMenu.d.ts.map