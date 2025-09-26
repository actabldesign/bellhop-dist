import React from 'react';
import '../../../../../bellhopos-styles/src/components/chart-tooltip.css';
export interface TooltipItem {
    color?: string;
    label?: string;
    value: string;
}
export interface ChartTooltipProps {
    visible?: boolean;
    x?: number;
    y?: number;
    header?: string;
    items?: TooltipItem[];
    total?: string;
    showTotal?: boolean;
    storybookMode?: boolean;
}
export declare const ChartTooltip: React.FC<ChartTooltipProps>;
//# sourceMappingURL=ChartTooltip.d.ts.map