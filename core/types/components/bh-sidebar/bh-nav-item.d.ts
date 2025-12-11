import { EventEmitter } from '../../stencil-public-runtime';
export declare class BhNavItem {
    /**
     * Material Symbols icon name
     */
    icon: string;
    /**
     * Label text displayed below the icon
     */
    label: string;
    /**
     * Whether the nav item is active/selected
     */
    isActive: boolean;
    /**
     * Whether the nav item is disabled
     */
    disabled: boolean;
    /**
     * Event emitted when the nav item is clicked
     */
    bhClick: EventEmitter<void>;
    private handleClick;
    private handleKeyDown;
    render(): any;
}
