import React from 'react';
import '../../../../../bellhopos-styles/src/components/checkbox-label.css';
export interface CheckboxLabelProps {
    label?: string;
    supportingText?: string;
    size?: 'sm' | 'md';
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    id?: string;
}
export declare const CheckboxLabel: React.FC<CheckboxLabelProps>;
export default CheckboxLabel;
//# sourceMappingURL=CheckboxLabel.d.ts.map