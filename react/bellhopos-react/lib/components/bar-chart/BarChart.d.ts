import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/bar-chart.css';
export type BarChartType = 'simple' | 'stacked';
export type BarChartOrientation = 'vertical' | 'horizontal';
export interface BarChartData {
    series: {
        name: string;
        values: number[];
        color?: string;
    }[];
    categories?: string[];
}
export interface BarSegment {
    value: number;
    height: number;
    width: number;
    color: string;
    seriesName?: string;
}
export interface ProcessedBar {
    segments: BarSegment[];
    totalValue: number;
    category?: string;
}
export interface BarChartProps {
    data?: BarChartData;
    type?: BarChartType;
    orientation?: BarChartOrientation;
    animated?: boolean;
    maxHeight?: number;
    maxWidth?: number;
}
export declare const BarChart: React.FC<BarChartProps>;
//# sourceMappingURL=BarChart.d.ts.map