import { EventEmitter } from '../../stencil-public-runtime';
export declare class BhPageNavigationChild {
    /**
     * Label text for the navigation item
     */
    label: string;
    /**
     * Optional badge text/number to display
     */
    badge?: string | number;
    /**
     * Whether to show the badge (when badge prop is provided)
     */
    showBadge: boolean;
    /**
     * Whether the item is currently active/selected
     */
    isActive: boolean;
    /**
     * Event emitted when the navigation item is clicked
     */
    bhItemClick: EventEmitter<void>;
    private handleClick;
    private getItemClasses;
    render(): any;
}
