import { EventEmitter } from '../../stencil-public-runtime';
export type CardHeaderFeaturedIconStyle = 'outlined' | 'filled';
export type CardHeaderFeaturedIconColor = 'brand' | 'gray' | 'error' | 'warning' | 'success' | 'highlight';
export declare class BhCardHeader {
    /**
     * Whether to show the featured icon
     */
    showFeaturedIcon: boolean;
    /**
     * The Material Symbol icon name for the featured icon
     */
    featuredIcon: string;
    /**
     * The style of the featured icon
     */
    featuredIconStyle: CardHeaderFeaturedIconStyle;
    /**
     * The color of the featured icon
     */
    featuredIconColor: CardHeaderFeaturedIconColor;
    /**
     * Whether to show the title
     */
    showTitle: boolean;
    /**
     * The title text
     */
    headerTitle: string;
    /**
     * Whether to show the badge
     */
    showBadge: boolean;
    /**
     * The badge text
     */
    badgeText: string;
    /**
     * Whether to show the supporting text
     */
    showSupportingText: boolean;
    /**
     * The supporting text (description)
     */
    supportingText: string;
    /**
     * Whether to show the dropdown menu button
     */
    showDropdown: boolean;
    /**
     * Whether to show the divider
     */
    showDivider: boolean;
    /**
     * Emitted when the dropdown button is clicked
     */
    bhDropdownClick: EventEmitter<void>;
    private handleDropdownClick;
    render(): any;
}
