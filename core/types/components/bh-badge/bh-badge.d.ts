import { EventEmitter } from '../../stencil-public-runtime';
export type BadgeVariant = 'gray' | 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'pink' | 'orange';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeEmphasis = 'high' | 'medium' | 'low';
export declare class BhBadge {
    /**
     * The color variant of the badge
     */
    variant: BadgeVariant;
    /**
     * The size of the badge
     */
    size: BadgeSize;
    /**
     * The emphasis level (affects background/border styling)
     */
    emphasis: BadgeEmphasis;
    /**
     * The text label to display
     */
    label: string;
    /**
     * Material Symbols icon name, or 'dot' for a dot indicator
     */
    icon?: string;
    /**
     * Whether the badge can be dismissed
     */
    dismissible: boolean;
    /**
     * Whether the badge is disabled
     */
    disabled: boolean;
    /**
     * Emitted when the dismiss button is clicked
     */
    bhDismiss: EventEmitter<void>;
    private handleDismiss;
    render(): any;
}
