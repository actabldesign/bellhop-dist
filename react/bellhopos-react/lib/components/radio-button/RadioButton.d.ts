import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/radio-button.css';
export type RadioButtonSize = 'sm' | 'md';
export interface RadioButtonProps {
    size?: RadioButtonSize;
    disabled?: boolean;
    value?: any;
    name?: string;
    selected?: boolean;
    defaultSelected?: boolean;
    id?: string;
    className?: string;
    onChange?: (value: any) => void;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
//# sourceMappingURL=RadioButton.d.ts.map