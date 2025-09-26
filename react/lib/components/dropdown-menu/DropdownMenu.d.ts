import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/dropdown-menu.css';
import '../../../../../bellhopos-styles/src/tokens/bellhop-animations.css';
export interface DropdownMenuItem {
    id: string;
    label?: string;
    icon?: string;
    shortcut?: string;
    disabled?: boolean;
    divider?: boolean;
}
export interface DropdownMenuHeader {
    title?: string;
    avatarGroup?: boolean;
    avatarSrc?: string;
    name?: string;
    email?: string;
}
export interface DropdownMenuProps {
    header?: DropdownMenuHeader;
    menuItems?: DropdownMenuItem[];
    visible?: boolean;
    showIcons?: boolean;
    scrollable?: boolean;
    className?: string;
    onItemClick?: (item: DropdownMenuItem) => void;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
//# sourceMappingURL=DropdownMenu.d.ts.map