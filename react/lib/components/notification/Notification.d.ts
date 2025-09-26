import * as React from 'react';
import { FeaturedIconColor, FeaturedIconStyle } from '../featured-icon/FeaturedIcon';
export type NotificationType = 'primary' | 'gray' | 'success' | 'error' | 'warning' | 'progress' | 'image' | 'avatar' | 'no-icon';
export type NotificationBreakpoint = 'desktop' | 'mobile';
export interface NotificationProps {
    type?: NotificationType;
    breakpoint?: NotificationBreakpoint;
    title?: string;
    description?: string;
    actionText?: string;
    dismissText?: string;
    dismissible?: boolean;
    imageUrl?: string;
    avatarUrl?: string;
    progress?: number;
    icon?: string;
    featuredIconStyle?: FeaturedIconStyle;
    featuredIconColor?: FeaturedIconColor;
    animated?: boolean;
    closing?: boolean;
    className?: string;
    onAction?: () => void;
    onDismiss?: () => void;
    onClose?: () => void;
}
export declare const Notification: React.FC<NotificationProps>;
//# sourceMappingURL=Notification.d.ts.map