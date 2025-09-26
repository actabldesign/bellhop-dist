import React from 'react';
import '../../../../../bellhopos-styles/src/components/radio-button-label.css';
export interface RadioButtonLabelProps {
    label?: string;
    supportingText?: string;
    size?: 'sm' | 'md';
    disabled?: boolean;
    value?: any;
    name?: string;
    selectedValue?: any;
    onChange?: (value: any) => void;
    className?: string;
    id?: string;
}
export declare const RadioButtonLabel: React.FC<RadioButtonLabelProps>;
export default RadioButtonLabel;
//# sourceMappingURL=RadioButtonLabel.d.ts.map