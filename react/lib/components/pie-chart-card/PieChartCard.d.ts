import * as React from 'react';
import { PieChartData, PieChartHole } from '../pie-chart/PieChart';
import { DropdownMenuItem, DropdownVariant } from '../dropdown/Dropdown';
import '../../../../../bellhopos-styles/src/components/pie-chart-card.css';
export type PieChartCardBreakpoint = 'desktop' | 'mobile';
export interface ChartLegendItem {
    name: string;
    color: string;
    value?: string;
    percentage?: string;
}
export interface PieChartCardData {
    title: string;
    subtitle: string;
    value: string;
    badge?: string;
    chartData: PieChartData;
    legend?: ChartLegendItem[];
}
export interface PieChartCardProps {
    breakpoint?: PieChartCardBreakpoint;
    data: PieChartCardData;
    hole?: PieChartHole;
    size?: number;
    animated?: boolean;
    gap?: number;
    showDropdown?: boolean;
    dropdownVariant?: DropdownVariant;
    showFooter?: boolean;
    footerButtonLabel?: string;
    showLegend?: boolean;
    onDropdownSelect?: (item: DropdownMenuItem) => void;
    onFooterButtonClick?: () => void;
}
export declare const PieChartCard: React.FC<PieChartCardProps>;
//# sourceMappingURL=PieChartCard.d.ts.map