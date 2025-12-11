export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'default' | 'icon';
export declare class BhTooltip {
    /**
     * The tooltip text content
     */
    text: string;
    /**
     * Position of the tooltip relative to its target
     */
    position: TooltipPosition;
    /**
     * Variant of the tooltip (default or icon)
     */
    variant: TooltipVariant;
    /**
     * Whether the tooltip is visible
     */
    visible: boolean;
    /**
     * Maximum width in pixels (enables multiline if > 240)
     */
    maxWidth?: number;
    render(): any;
}
