import * as React from 'react';
import type { DropdownMenuItem, DropdownMenuHeader } from '../dropdown-menu/DropdownMenu';
import '../../../../../bellhopos-styles/src/components/dropdown.css';
import '../../../../../bellhopos-styles/src/tokens/bellhop-animations.css';
export { DropdownMenuItem, DropdownMenuHeader };
export type DropdownSize = 'sm' | 'md';
export type DropdownState = 'default' | 'focus' | 'disabled';
export type DropdownVariant = 'outlined' | 'ghost' | 'icon-only-outlined' | 'icon-only-ghost' | 'avatar';
export type DropdownPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center' | 'top-center' | 'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom';
export interface DropdownProps {
    size?: DropdownSize;
    state?: DropdownState;
    variant?: DropdownVariant;
    label?: string;
    iconName?: string;
    disabled?: boolean;
    menuItems?: DropdownMenuItem[];
    header?: DropdownMenuHeader;
    avatarSrc?: string;
    avatarAlt?: string;
    avatarSize?: 'sm' | 'md' | 'lg';
    avatarName?: string;
    avatarEmail?: string;
    showIcons?: boolean;
    forcePosition?: string;
    onItemClick?: (item: DropdownMenuItem) => void;
}
export declare const Dropdown: React.FC<DropdownProps>;
//# sourceMappingURL=Dropdown.d.ts.map