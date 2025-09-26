import React from 'react';
import '../../../../../bellhopos-styles/src/components/button.css';
export type ButtonIconHierarchy = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type ButtonIconState = 'default' | 'hover' | 'focus' | 'disabled';
export type ButtonIconSize = 'xs' | 'sm' | 'md' | 'lg';
export interface ButtonIconProps {
    hierarchy?: ButtonIconHierarchy;
    state?: ButtonIconState;
    size?: ButtonIconSize;
    iconName: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    'aria-label'?: string;
}
export declare const ButtonIcon: React.FC<ButtonIconProps>;
export default ButtonIcon;
//# sourceMappingURL=ButtonIcon.d.ts.map