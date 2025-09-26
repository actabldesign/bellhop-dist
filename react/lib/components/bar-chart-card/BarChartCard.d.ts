import * as React from 'react';
import { BarChartData, BarChartType, BarChartOrientation } from '../bar-chart/BarChart';
import { DropdownMenuItem, DropdownVariant } from '../dropdown/Dropdown';
import '../../../../../bellhopos-styles/src/components/bar-chart-card.css';
export type BarChartCardBreakpoint = 'desktop' | 'mobile';
export interface ChartLegendItem {
    name: string;
    color: string;
}
export interface AxisConfig {
    show: boolean;
    label?: string;
    tickCount?: number;
    showGridLines?: boolean;
}
export interface TargetLineConfig {
    value: number;
}
export interface BarChartCardData {
    title: string;
    subtitle: string;
    value: string;
    badge?: string;
    chartData: BarChartData;
    legend?: ChartLegendItem[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
    targetLine?: TargetLineConfig;
}
export interface BarChartCardProps {
    breakpoint?: BarChartCardBreakpoint;
    data: BarChartCardData;
    chartType?: BarChartType;
    orientation?: BarChartOrientation;
    animated?: boolean;
    showDropdown?: boolean;
    dropdownVariant?: DropdownVariant;
    showFooter?: boolean;
    footerButtonLabel?: string;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showTargetLine?: boolean;
    targetLineColor?: 'neutral' | 'brand' | 'success';
    onDropdownSelect?: (item: DropdownMenuItem) => void;
    onFooterButtonClick?: () => void;
}
export declare const BarChartCard: React.FC<BarChartCardProps>;
//# sourceMappingURL=BarChartCard.d.ts.map