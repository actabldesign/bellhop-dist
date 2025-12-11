import type { Components, JSX } from "../types/components";

interface BhPieChart extends Components.BhPieChart, HTMLElement {}
export const BhPieChart: {
    prototype: BhPieChart;
    new (): BhPieChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
