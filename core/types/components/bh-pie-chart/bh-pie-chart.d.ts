export interface PieChartSeriesItem {
    name: string;
    value: number;
    color?: string;
}
export interface PieChartData {
    series: PieChartSeriesItem[];
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
export declare class BhPieChart {
    /**
     * Chart data containing series
     */
    data: PieChartData;
    /**
     * Size of the donut hole
     */
    hole: PieChartHole;
    /**
     * Size of the chart in pixels
     */
    size: number;
    /**
     * Whether to animate the chart
     */
    animated: boolean;
    /**
     * Gap between segments in degrees
     */
    gap: number;
    tooltipVisible: boolean;
    tooltipX: number;
    tooltipY: number;
    tooltipSegment: PieSegment | null;
    private getInnerRadius;
    private createArcPath;
    private getSegments;
    private handleSegmentHover;
    private handleSegmentLeave;
    render(): any;
}
