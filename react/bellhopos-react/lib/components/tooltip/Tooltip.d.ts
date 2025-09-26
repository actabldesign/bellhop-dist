import * as React from 'react';
import { CSSProperties } from 'react';
import '../../../../../bellhopos-styles/src/components/tooltip.css';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'default' | 'icon';
export interface TooltipProps {
    text: string;
    position?: TooltipPosition;
    variant?: TooltipVariant;
    visible?: boolean;
    maxWidth?: number;
    style?: CSSProperties;
}
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map