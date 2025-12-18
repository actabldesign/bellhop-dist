import { EventEmitter } from '../../stencil-public-runtime';
export interface BreadcrumbItem {
    label: string;
    path?: string;
    isActive?: boolean;
}
export declare class BhAppbar {
    /**
     * Whether the menu is open
     */
    isMenuOpen: boolean;
    /**
     * Logo source URL
     */
    logoSrc?: string;
    /**
     * Logo alt text
     */
    logoAlt: string;
    /**
     * Breadcrumb items
     */
    breadcrumbItems: BreadcrumbItem[];
    /**
     * Notification count
     */
    notificationCount: number;
    /**
     * Event emitted when menu toggle is clicked
     */
    bhMenuToggle: EventEmitter<void>;
    /**
     * Event emitted when a breadcrumb is clicked
     */
    bhBreadcrumbClick: EventEmitter<BreadcrumbItem>;
    /**
     * Event emitted when notification icon is clicked
     */
    bhNotificationClick: EventEmitter<void>;
    /**
     * Event emitted when calendar icon is clicked
     */
    bhCalendarClick: EventEmitter<void>;
    /**
     * Event emitted when settings icon is clicked
     */
    bhSettingsClick: EventEmitter<void>;
    private handleMenuToggle;
    private handleBreadcrumbClick;
    private handleNotificationClick;
    private handleCalendarClick;
    private handleSettingsClick;
    render(): any;
}
