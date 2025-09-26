import React from 'react';
import '../../../../../bellhopos-styles/src/tokens/bellhop-typography.css';
import '../../../../../bellhopos-styles/src/components/button.css';
export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type ButtonType = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonIconType = 'none' | 'leading' | 'trailing' | 'only';
export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export interface ButtonProps {
    hierarchy?: ButtonHierarchy;
    type?: ButtonType;
    icon?: ButtonIconType;
    state?: ButtonState;
    size?: ButtonSize;
    label?: string;
    iconName?: string;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map