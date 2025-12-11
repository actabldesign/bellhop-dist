import { EventEmitter } from '../../stencil-public-runtime';
import { LogoType } from '../bh-logo-box/bh-logo-box';
export interface MenuItem {
    label: string;
    icon: string;
    isActive?: boolean;
}
export interface FooterItem {
    label: string;
    icon: string;
}
export interface DropdownMenuItem {
    id: string;
    label?: string;
    icon?: string;
    shortcut?: string;
    divider?: boolean;
}
export declare class BhSidebar {
    /**
     * Type of logo to display
     */
    logoType: LogoType;
    /**
     * Avatar image URL
     */
    avatarUrl?: string;
    /**
     * Avatar initials (used if avatarUrl is not provided)
     */
    avatarInitials: string;
    /**
     * Avatar name for dropdown
     */
    avatarName: string;
    /**
     * Avatar email for dropdown
     */
    avatarEmail: string;
    /**
     * Main menu navigation items
     */
    menuItems: MenuItem[];
    /**
     * Footer navigation items
     */
    footerItems: FooterItem[];
    /**
     * Whether sidebar is collapsed
     */
    collapsed: boolean;
    /**
     * Event emitted when a menu item is clicked
     */
    bhMenuItemClick: EventEmitter<string>;
    /**
     * Event emitted when search button is clicked
     */
    bhSearchClick: EventEmitter<void>;
    /**
     * Event emitted when avatar menu item is clicked
     */
    bhAvatarMenuClick: EventEmitter<DropdownMenuItem>;
    activeItem: string;
    componentWillLoad(): void;
    private handleNavItemClick;
    private handleSearchClick;
    private handleAvatarMenuClick;
    render(): any;
}
