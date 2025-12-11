import { EventEmitter } from '../../stencil-public-runtime';
export interface ChildItem {
    label: string;
    badge?: string | number;
    showBadge?: boolean;
    isActive?: boolean;
}
export interface NavigationItem {
    id: string;
    label: string;
    icon?: string;
    type: 'single' | 'expandable';
    isActive?: boolean;
    isExpanded?: boolean;
    badge?: string | number;
    children?: ChildItem[];
}
export declare class BhPageNavigation {
    /**
     * Title displayed at the top of the navigation
     */
    navTitle: string;
    /**
     * Array of navigation items
     */
    navigationItems: NavigationItem[];
    /**
     * Internal state to track navigation items
     */
    items: NavigationItem[];
    /**
     * Event emitted when a navigation item is clicked
     */
    bhItemClick: EventEmitter<{
        itemId: string;
        childIndex?: number;
    }>;
    handleNavigationItemsChange(newValue: NavigationItem[]): void;
    componentWillLoad(): void;
    private clearAllSelections;
    private handleSingleLevelClick;
    private handleMultiLevelToggle;
    private handleMultiLevelChildClick;
    render(): any;
}
