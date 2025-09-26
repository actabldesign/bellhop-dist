import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/trend-chart.css';
export type TrendDirection = 'positive' | 'negative' | 'neutral';
export type TrendVariant = 'line-only' | 'fill-only' | 'line-fill';
export interface TrendChartProps {
    trend?: TrendDirection;
    data?: number[];
    animated?: boolean;
    variant?: TrendVariant;
    width?: number;
    height?: number;
}
export declare const TrendChart: React.FC<TrendChartProps>;
//# sourceMappingURL=TrendChart.d.ts.map