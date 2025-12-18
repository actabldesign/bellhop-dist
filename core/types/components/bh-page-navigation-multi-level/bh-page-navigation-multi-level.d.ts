import { EventEmitter } from '../../stencil-public-runtime';
export interface ChildItem {
    label: string;
    badge?: string | number;
    showBadge?: boolean;
    isActive?: boolean;
}
export declare class BhPageNavigationMultiLevel {
    /**
     * Label text for the navigation item
     */
    label: string;
    /**
     * Material icon name
     */
    icon: string;
    /**
     * Optional badge text/number to display
     */
    badge?: string | number;
    /**
     * Child navigation items
     */
    childItems: ChildItem[];
    /**
     * Whether the item is expanded to show children
     */
    isExpanded: boolean;
    /**
     * Internal state for hover
     */
    isHovered: boolean;
    /**
     * Internal state for animation
     */
    isAnimating: boolean;
    /**
     * Animation class
     */
    animationClass: string;
    /**
     * Event emitted when the parent item is clicked (to toggle expansion)
     */
    bhToggle: EventEmitter<void>;
    /**
     * Event emitted when a child item is clicked
     */
    bhChildClick: EventEmitter<number>;
    /**
     * Event emitted when add button is clicked
     */
    bhAddClick: EventEmitter<void>;
    handleExpandedChange(newValue: boolean): void;
    private get hasActiveChild();
    private handleParentClick;
    private handleChildClick;
    private handleAddClick;
    private getItemClasses;
    render(): any;
}
