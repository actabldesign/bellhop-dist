import { EventEmitter } from '../../stencil-public-runtime';
export declare class BhPageNavigationSingleLevel {
    /**
     * Label text for the navigation item
     */
    label: string;
    /**
     * Material icon name
     */
    icon: string;
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
