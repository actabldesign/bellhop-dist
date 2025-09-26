import * as React from 'react';
import '../../../../../bellhopos-styles/src/tokens/bellhop-typography.css';
import '../../../../../bellhopos-styles/src/components/input-verification.css';
export type InputVerificationSize = 'sm' | 'md' | 'lg';
export interface InputVerificationProps {
    size?: InputVerificationSize;
    digits?: 4 | 6;
    label?: string;
    showLabel?: boolean;
    hintText?: string;
    showHintText?: boolean;
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
    showSeparator?: boolean;
    placeholder?: string;
    width?: string;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    className?: string;
}
export declare const InputVerification: React.FC<InputVerificationProps>;
export default InputVerification;
//# sourceMappingURL=InputVerification.d.ts.map