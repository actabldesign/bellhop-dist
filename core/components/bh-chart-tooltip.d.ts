import type { Components, JSX } from "../types/components";

interface BhChartTooltip extends Components.BhChartTooltip, HTMLElement {}
export const BhChartTooltip: {
    prototype: BhChartTooltip;
    new (): BhChartTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
