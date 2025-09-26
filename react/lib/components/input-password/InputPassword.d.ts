import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/input.css';
export type InputPasswordState = 'placeholder' | 'filled' | 'hover' | 'focused';
export type InputPasswordError = boolean;
export interface InputPasswordProps {
    state?: InputPasswordState;
    error?: InputPasswordError;
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
    value?: string;
    width?: string;
    className?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onHelpClick?: () => void;
}
export declare const InputPassword: React.FC<InputPasswordProps>;
//# sourceMappingURL=InputPassword.d.ts.map