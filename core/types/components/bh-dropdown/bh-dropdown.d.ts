import { EventEmitter } from '../../stencil-public-runtime';
import type { DropdownMenuItem, DropdownMenuHeader } from '../bh-dropdown-menu/bh-dropdown-menu';
export type DropdownSize = 'sm' | 'md';
export type DropdownState = 'default' | 'focus' | 'disabled';
export type DropdownVariant = 'outlined' | 'ghost' | 'icon-only-outlined' | 'icon-only-ghost' | 'avatar';
export declare class BhDropdown {
    el: HTMLElement;
    private triggerRef?;
    private menuRef?;
    private cleanupAutoUpdate?;
    /**
     * Size of the dropdown trigger
     */
    size: DropdownSize;
    /**
     * State of the dropdown
     */
    state: DropdownState;
    /**
     * Visual variant of the dropdown trigger
     */
    variant: DropdownVariant;
    /**
     * Label for the dropdown button
     */
    label: string;
    /**
     * Icon name for icon-only variants
     */
    iconName: string;
    /**
     * Whether the dropdown is disabled
     */
    disabled: boolean;
    /**
     * Menu items (JSON string or array)
     */
    menuItems: DropdownMenuItem[] | string;
    /**
     * Header configuration (JSON string or object)
     */
    header?: DropdownMenuHeader | string;
    /**
     * Avatar image source for avatar variant
     */
    avatarSrc: string;
    /**
     * Avatar alt text
     */
    avatarAlt: string;
    /**
     * Avatar size for avatar variant
     */
    avatarSize: 'sm' | 'md' | 'lg';
    /**
     * Avatar name for header
     */
    avatarName?: string;
    /**
     * Avatar email for header
     */
    avatarEmail?: string;
    /**
     * Whether to show icons in menu items
     */
    showIcons: boolean;
    isOpen: boolean;
    menuPosition: {
        x: number;
        y: number;
    };
    /**
     * Event emitted when a menu item is clicked
     */
    bhItemClick: EventEmitter<DropdownMenuItem>;
    handleClickOutside(event: MouseEvent): void;
    handleOpenChange(newValue: boolean): void;
    disconnectedCallback(): void;
    private setupFloatingUI;
    private cleanupFloating;
    private get parsedMenuItems();
    private get parsedHeader();
    private toggleDropdown;
    private handleMenuItemClick;
    private get isIconOnly();
    private get showAvatar();
    private get buttonHierarchy();
    render(): any;
}
