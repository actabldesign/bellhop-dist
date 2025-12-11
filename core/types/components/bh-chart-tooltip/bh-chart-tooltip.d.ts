export interface TooltipItem {
    color?: string;
    label?: string;
    value: string;
}
export declare class BhChartTooltip {
    /**
     * Whether the tooltip is visible
     */
    visible: boolean;
    /**
     * X position of the tooltip (in pixels)
     */
    x: number;
    /**
     * Y position of the tooltip (in pixels)
     */
    y: number;
    /**
     * Header text for the tooltip
     */
    header: string;
    /**
     * Items to display in the tooltip
     */
    items: TooltipItem[];
    /**
     * Total value to display
     */
    total: string;
    /**
     * Whether to show the total
     */
    showTotal: boolean;
    /**
     * Whether in storybook mode (for static positioning)
     */
    storybookMode: boolean;
    render(): any;
}
