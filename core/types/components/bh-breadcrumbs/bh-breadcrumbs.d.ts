import { EventEmitter } from '../../stencil-public-runtime';
export interface BreadcrumbItem {
    label: string;
    path?: string;
    isActive?: boolean;
}
export declare class BhBreadcrumbs {
    /**
     * Array of breadcrumb items
     */
    items: BreadcrumbItem[] | string;
    /**
     * Separator icon name (Material Symbols)
     */
    separator: string;
    /**
     * Whether to show the home button
     */
    showHome: boolean;
    /**
     * Maximum number of visible items before collapsing
     */
    maxVisibleItems: number;
    /**
     * Event emitted when a breadcrumb item is clicked
     */
    bhItemClick: EventEmitter<BreadcrumbItem>;
    /**
     * Event emitted when navigating to a path
     */
    bhNavigate: EventEmitter<string>;
    private get parsedItems();
    private get displayData();
    private handleItemClick;
    private handleHomeClick;
    private handleEllipsisClick;
    private renderBreadcrumbItem;
    private renderSeparator;
    render(): any;
}
