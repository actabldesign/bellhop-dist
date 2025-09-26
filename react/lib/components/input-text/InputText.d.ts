import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/input.css';
export type InputTextState = 'placeholder' | 'filled' | 'hover' | 'focused';
export type InputTextError = boolean;
export interface InputTextProps {
    state?: InputTextState;
    error?: InputTextError;
    required?: boolean;
    disabled?: boolean;
    showHelpIcon?: boolean;
    showLeadingIcon?: boolean;
    showTrailingIcon?: boolean;
    showLabel?: boolean;
    showHintText?: boolean;
    label?: string;
    placeholder?: string;
    hintText?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    helpIconTooltip?: string;
    value?: string;
    width?: string;
    className?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onHelpClick?: () => void;
}
export declare const InputText: React.FC<InputTextProps>;
//# sourceMappingURL=InputText.d.ts.map