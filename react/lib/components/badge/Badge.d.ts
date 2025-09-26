import React from 'react';
import '../../../../../bellhopos-styles/src/components/badge.css';
export type BadgeVariant = 'gray' | 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'pink' | 'orange';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeEmphasis = 'high' | 'medium' | 'low';
export interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    emphasis?: BadgeEmphasis;
    label?: string;
    icon?: string;
    dismissible?: boolean;
    disabled?: boolean;
    onDismiss?: () => void;
}
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map