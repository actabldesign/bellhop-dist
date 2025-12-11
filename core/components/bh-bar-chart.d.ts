import type { Components, JSX } from "../types/components";

interface BhBarChart extends Components.BhBarChart, HTMLElement {}
export const BhBarChart: {
    prototype: BhBarChart;
    new (): BhBarChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
