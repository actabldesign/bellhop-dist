import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/sidebar.css';
import { LogoType } from '../logo-box/LogoBox';
import { DropdownMenuItem } from '../dropdown/Dropdown';
export interface MenuItem {
    label: string;
    icon: string;
    isActive?: boolean;
}
export interface FooterItem {
    label: string;
    icon: string;
}
export interface SidebarProps {
    logoType?: LogoType;
    avatarUrl?: string;
    avatarInitials?: string;
    avatarName?: string;
    avatarEmail?: string;
    menuItems?: MenuItem[];
    footerItems?: FooterItem[];
    onMenuItemClick?: (label: string) => void;
    onSearchClick?: () => void;
    onAvatarMenuClick?: (item: DropdownMenuItem) => void;
    className?: string;
    collapsed?: boolean;
}
export declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
//# sourceMappingURL=Sidebar.d.ts.map