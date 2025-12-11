import type { TooltipItem } from '../bh-chart-tooltip/bh-chart-tooltip';
export type BarChartType = 'simple' | 'stacked';
export type BarChartOrientation = 'vertical' | 'horizontal';
export interface BarChartSeries {
    name: string;
    values: number[];
    color?: string;
}
export interface BarChartData {
    series: BarChartSeries[];
    categories?: string[];
}
export declare class BhBarChart {
    /**
     * Chart data
     */
    data: BarChartData;
    /**
     * Chart type: simple or stacked
     */
    type: BarChartType;
    /**
     * Chart orientation: vertical or horizontal
     */
    orientation: BarChartOrientation;
    /**
     * Whether to animate the chart
     */
    animated: boolean;
    /**
     * Maximum height for vertical bars
     */
    maxHeight: number;
    /**
     * Maximum width for horizontal bars
     */
    maxWidth: number;
    tooltipVisible: boolean;
    tooltipX: number;
    tooltipY: number;
    tooltipHeader: string;
    tooltipItems: TooltipItem[];
    tooltipTotal: string;
    showTooltipTotal: boolean;
    private processData;
    private handleColumnHover;
    private handleColumnMove;
    private handleColumnLeave;
    render(): any;
}
