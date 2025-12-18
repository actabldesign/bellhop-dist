import { EventEmitter } from '../../stencil-public-runtime';
export type NotificationType = 'primary' | 'default' | 'success' | 'error' | 'warning' | 'feature';
export declare class BhNotification {
    /**
     * Type of notification (determines color and icon)
     */
    type: NotificationType;
    /**
     * Notification title
     */
    notificationTitle: string;
    /**
     * Notification description
     */
    description: string;
    /**
     * Text for the action button
     */
    actionText: string;
    /**
     * Text for the dismiss button
     */
    dismissText: string;
    /**
     * Whether to show the close button
     */
    dismissible: boolean;
    /**
     * Custom icon name (overrides type-based icon)
     */
    icon: string;
    /**
     * Emitted when action button is clicked
     */
    bhAction: EventEmitter<void>;
    /**
     * Emitted when dismiss button is clicked
     */
    bhDismiss: EventEmitter<void>;
    /**
     * Emitted when close button is clicked
     */
    bhClose: EventEmitter<void>;
    private getIconName;
    private getIconColor;
    private getIconStyle;
    private handleAction;
    private handleDismiss;
    private handleClose;
    render(): any;
}
