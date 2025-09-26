import * as React from 'react';
import { TrendDirection } from '../trend-chart/TrendChart';
import { DropdownMenuItem, DropdownVariant } from '../dropdown/Dropdown';
import { FeaturedIconSize, FeaturedIconColor, FeaturedIconStyle } from '../featured-icon/FeaturedIcon';
import '../../../../../bellhopos-styles/src/components/trend-chart-card.css';
export type TrendChartCardType = 'metric' | 'simple' | 'featured-icon';
export type TrendChartCardBreakpoint = 'desktop' | 'mobile';
export type ValueType = 'currency' | 'percentage' | 'number';
export interface TrendChartCardProps {
    type?: TrendChartCardType;
    breakpoint?: TrendChartCardBreakpoint;
    heading?: string;
    value?: number;
    valueType?: ValueType;
    trend?: TrendDirection;
    showTrendIcon?: boolean;
    showDropdown?: boolean;
    dropdownVariant?: DropdownVariant;
    trendPercentage?: string;
    showChart?: boolean;
    chartData?: number[];
    showFooter?: boolean;
    footerButtonLabel?: string;
    icon?: string;
    iconSize?: FeaturedIconSize;
    iconColor?: FeaturedIconColor;
    iconStyle?: FeaturedIconStyle;
    onDropdownSelect?: (item: DropdownMenuItem) => void;
    onFooterButtonClick?: () => void;
}
export declare const TrendChartCard: React.FC<TrendChartCardProps>;
//# sourceMappingURL=TrendChartCard.d.ts.map