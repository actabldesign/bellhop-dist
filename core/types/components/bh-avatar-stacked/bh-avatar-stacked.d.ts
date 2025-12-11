export type AvatarStackedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export interface AvatarData {
    type: 'image' | 'text' | 'icon';
    imageSrc?: string;
    text?: string;
    tooltipText?: string;
}
export declare class BhAvatarStacked {
    /**
     * The size of the avatars in the stack
     */
    size: AvatarStackedSize;
    /**
     * JSON array of avatar data
     */
    avatars: string;
    /**
     * Maximum number of visible avatars before showing count
     */
    maxVisible: number;
    /**
     * Whether to show the add button
     */
    showAddButton: boolean;
    /**
     * Tooltip text for the add button
     */
    addTooltipText: string;
    /**
     * Track hovered avatar index for tooltips
     */
    hoveredIndex: number;
    /**
     * Track add button hover state
     */
    addButtonHovered: boolean;
    private getParsedAvatars;
    private getAvatarSize;
    private getOffset;
    private mapAvatarType;
    render(): any;
}
