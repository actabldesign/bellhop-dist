import React from 'react';
import '../../../../../bellhopos-styles/src/components/featured-icon.css';
export type FeaturedIconSize = 'sm' | 'md' | 'lg' | 'xl';
export type FeaturedIconColor = 'brand' | 'gray' | 'error' | 'warning' | 'success' | 'highlight';
export type FeaturedIconStyle = 'outlined' | 'filled';
export interface FeaturedIconProps {
    size?: FeaturedIconSize;
    color?: FeaturedIconColor;
    style?: FeaturedIconStyle;
    icon?: string;
}
export declare const FeaturedIcon: React.FC<FeaturedIconProps>;
//# sourceMappingURL=FeaturedIcon.d.ts.map