import { EventEmitter } from '../../stencil-public-runtime';
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
export declare class BhDropdownMenu {
    /**
     * Header configuration (JSON string or object)
     */
    header?: DropdownMenuHeader | string;
    /**
     * Menu items array (JSON string or array)
     */
    menuItems: DropdownMenuItem[] | string;
    /**
     * Whether the menu is visible
     */
    visible: boolean;
    /**
     * Whether to show icons in menu items
     */
    showIcons: boolean;
    /**
     * Whether the menu should be scrollable
     */
    scrollable: boolean;
    isClosing: boolean;
    shouldRender: boolean;
    /**
     * Event emitted when a menu item is clicked
     */
    bhItemClick: EventEmitter<DropdownMenuItem>;
    private get parsedHeader();
    private get parsedMenuItems();
    watchVisible(newValue: boolean): void;
    componentWillLoad(): void;
    private handleItemClick;
    private getMenuItemClasses;
    render(): any;
}
