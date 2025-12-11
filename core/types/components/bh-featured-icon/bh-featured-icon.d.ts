export type FeaturedIconSize = 'sm' | 'md' | 'lg' | 'xl';
export type FeaturedIconColor = 'brand' | 'gray' | 'error' | 'warning' | 'success' | 'highlight';
export type FeaturedIconStyle = 'outlined' | 'filled';
export declare class BhFeaturedIcon {
    /**
     * The size of the featured icon
     */
    size: FeaturedIconSize;
    /**
     * The color theme of the featured icon
     */
    color: FeaturedIconColor;
    /**
     * The style variant (outlined or filled)
     */
    iconStyle: FeaturedIconStyle;
    /**
     * The Material Symbol icon name
     */
    icon: string;
    render(): any;
}
