import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/checkbox.css';
export type CheckboxSize = 'sm' | 'md';
export interface CheckboxProps {
    size?: CheckboxSize;
    disabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    id?: string;
    className?: string;
    onChange?: (checked: boolean) => void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
//# sourceMappingURL=Checkbox.d.ts.map