import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/input-number.css';
export type InputNumberState = 'placeholder' | 'filled' | 'hover' | 'focused';
export type InputNumberError = boolean;
export interface InputNumberProps {
    state?: InputNumberState;
    error?: InputNumberError;
    required?: boolean;
    disabled?: boolean;
    showHelpIcon?: boolean;
    showLeadingIcon?: boolean;
    showLabel?: boolean;
    showHintText?: boolean;
    label?: string;
    placeholder?: string;
    hintText?: string;
    leadingIcon?: string;
    helpIconTooltip?: string;
    value?: number | null;
    min?: number | null;
    max?: number | null;
    step?: number;
    prefix?: string;
    suffix?: string;
    width?: string;
    onChange?: (value: number | null) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onHelpClick?: () => void;
    className?: string;
}
export declare const InputNumber: React.FC<InputNumberProps>;
export default InputNumber;
//# sourceMappingURL=InputNumber.d.ts.map