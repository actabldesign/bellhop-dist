import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/toggle.css';
export type ToggleSize = 'sm' | 'md';
export type ToggleState = 'default' | 'hover' | 'focus' | 'disabled';
export interface ToggleProps {
    size?: ToggleSize;
    showText?: boolean;
    label?: string;
    supportingText?: string;
    disabled?: boolean;
    id?: string;
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare const Toggle: React.FC<ToggleProps>;
//# sourceMappingURL=Toggle.d.ts.map