import type { Components, JSX } from "../types/components";

interface BhTrendChart extends Components.BhTrendChart, HTMLElement {}
export const BhTrendChart: {
    prototype: BhTrendChart;
    new (): BhTrendChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
