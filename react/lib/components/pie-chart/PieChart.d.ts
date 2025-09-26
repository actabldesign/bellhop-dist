import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/pie-chart.css';
export interface PieChartData {
    series: {
        name: string;
        value: number;
        color?: string;
    }[];
}
export interface PieSegment {
    value: number;
    percentage: number;
    startAngle: number;
    endAngle: number;
    color: string;
    name: string;
    path: string;
}
export type PieChartHole = 'none' | '25%' | '50%' | '75%' | '85%';
export interface PieChartProps {
    data?: PieChartData;
    hole?: PieChartHole;
    size?: number;
    animated?: boolean;
    gap?: number;
}
export declare const PieChart: React.FC<PieChartProps>;
//# sourceMappingURL=PieChart.d.ts.map