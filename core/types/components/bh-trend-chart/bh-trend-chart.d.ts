export type TrendDirection = 'positive' | 'negative' | 'neutral';
export type TrendVariant = 'line-only' | 'fill-only' | 'line-fill';
export declare class BhTrendChart {
    /**
     * The trend direction (affects color)
     */
    trend: TrendDirection;
    /**
     * Data points for the chart
     */
    data: number[];
    /**
     * Whether to animate the chart
     */
    animated: boolean;
    /**
     * Chart variant: line-only, fill-only, or line-fill
     */
    variant: TrendVariant;
    /**
     * Width of the chart in pixels
     */
    width: number;
    /**
     * Height of the chart in pixels
     */
    height: number;
    private normalizeData;
    private generatePath;
    private generateBackgroundPath;
    private getStrokeColor;
    private getFillColor;
    render(): any;
}
