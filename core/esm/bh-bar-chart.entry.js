import { r as registerInstance, h, H as Host } from './index-nAAobRRQ.js';

const bhBarChartCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.vertical-container{display:flex;align-items:flex-end;height:180px;width:100%}.vertical-container.simple{height:180px;width:100%}.bar-column.vertical{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;flex:1;gap:var(--spacing-xxs, 2px);margin:0 2px;border-radius:4px;transition:background-color 0.2s ease}.vertical-container.simple .bar-column.vertical{flex:1;margin:0 2px}.bar-segment.vertical{width:6px;border-radius:2px;min-height:2px;transition:all 0.3s ease;transform-origin:bottom}.horizontal-container{display:flex;flex-direction:column;justify-content:space-between;height:auto;min-height:140px;gap:var(--spacing-lg, 12px)}.horizontal-container.simple{height:auto;min-height:140px;gap:var(--spacing-lg, 12px)}.bar-row.horizontal{display:flex;align-items:center;width:100%;height:6px;min-height:6px;max-height:6px;gap:var(--spacing-xxs, 2px);margin:2px 0;border-radius:4px;transition:background-color 0.2s ease;padding:2px}.horizontal-container.simple .bar-row.horizontal{height:6px;min-height:6px;max-height:6px;margin:2px 0;padding:2px}.bar-segment.horizontal{height:100%;min-height:6px;max-height:6px;border-radius:2px;min-width:2px;transition:all 0.3s ease;transform-origin:left}.horizontal-container.simple .bar-segment.horizontal{min-width:2px;height:6px;min-height:6px;max-height:6px}.bar-column,.bar-row{cursor:pointer}.bar-column:hover{background-color:color-mix(in srgb, var(--color-neutral-100) 50%, transparent)}.bar-row:hover{background-color:color-mix(in srgb, var(--color-neutral-100) 50%, transparent)}.bar-column:hover .bar-segment,.bar-row:hover .bar-segment{opacity:0.9;filter:brightness(1.05)}.bar-chart-animated .bar-segment.vertical{animation:barGrowVertical 0.8s cubic-bezier(0.4, 0, 0.2, 1) both}.bar-chart-animated .bar-segment.horizontal{animation:barGrowHorizontal 0.8s cubic-bezier(0.4, 0, 0.2, 1) both}@keyframes barGrowVertical{from{transform:scaleY(0);opacity:0}to{transform:scaleY(1);opacity:1}}@keyframes barGrowHorizontal{from{transform:scaleX(0);opacity:0}to{transform:scaleX(1);opacity:1}}@media (prefers-reduced-motion: reduce){.bar-chart-animated .bar-segment.vertical,.bar-chart-animated .bar-segment.horizontal{animation:none;opacity:1;transform:none}}";

const DEFAULT_COLORS = [
    'var(--color-brand-600)',
    'var(--color-orange-500)',
    'var(--color-success-500)',
    'var(--color-purple-600)',
    'var(--color-accent-500)',
    'var(--color-teal-500)',
    'var(--color-lime-500)',
    'var(--color-amber-500)',
];
const BhBarChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Chart data
     */
    data = {
        series: [
            { name: 'Series 1', values: [30, 45, 20, 35, 50, 40, 60, 35, 25, 55, 40], color: '#94a3b8' },
            { name: 'Series 2', values: [20, 25, 40, 30, 35, 45, 25, 30, 40, 20, 50], color: '#2563eb' },
            { name: 'Series 3', values: [25, 15, 35, 20, 15, 20, 30, 25, 30, 35, 25], color: '#7c3aed' },
        ],
    };
    /**
     * Chart type: simple or stacked
     */
    type = 'stacked';
    /**
     * Chart orientation: vertical or horizontal
     */
    orientation = 'vertical';
    /**
     * Whether to animate the chart
     */
    animated = true;
    /**
     * Maximum height for vertical bars
     */
    maxHeight = 150;
    /**
     * Maximum width for horizontal bars
     */
    maxWidth = 200;
    tooltipVisible = false;
    tooltipX = 0;
    tooltipY = 0;
    tooltipHeader = '';
    tooltipItems = [];
    tooltipTotal = '';
    showTooltipTotal = false;
    processData() {
        if (!this.data.series?.length || !this.data.series[0].values.length) {
            return [];
        }
        const bars = [];
        if (this.type === 'simple') {
            const values = this.data.series[0].values;
            const maxValue = Math.max(...values);
            for (let i = 0; i < values.length; i++) {
                const value = values[i] || 0;
                const segments = [];
                if (value > 0) {
                    const height = (value / maxValue) * this.maxHeight;
                    const width = (value / maxValue) * this.maxWidth;
                    segments.push({
                        value,
                        height,
                        width,
                        color: DEFAULT_COLORS[i % DEFAULT_COLORS.length],
                        seriesName: this.data.categories?.[i] || `Bar ${i + 1}`,
                    });
                }
                bars.push({
                    segments,
                    totalValue: value,
                    category: this.data.categories?.[i],
                });
            }
        }
        else {
            const numBars = this.data.series[0].values.length;
            const maxTotal = Math.max(...Array.from({ length: numBars }, (_, i) => this.data.series.reduce((sum, series) => sum + (series.values[i] || 0), 0)));
            for (let barIndex = 0; barIndex < numBars; barIndex++) {
                const segments = [];
                let totalValue = 0;
                for (const series of this.data.series) {
                    const value = series.values[barIndex] || 0;
                    totalValue += value;
                    if (value > 0) {
                        const height = (value / maxTotal) * this.maxHeight;
                        const width = (value / maxTotal) * this.maxWidth;
                        segments.push({
                            value,
                            height,
                            width,
                            color: series.color || '#64748b',
                            seriesName: series.name,
                        });
                    }
                }
                bars.push({
                    segments,
                    totalValue,
                    category: this.data.categories?.[barIndex],
                });
            }
        }
        return bars;
    }
    handleColumnHover = (event, bar, columnIndex) => {
        this.tooltipVisible = true;
        this.tooltipX = event.clientX;
        this.tooltipY = event.clientY;
        this.tooltipHeader = bar.category || `Column ${columnIndex + 1}`;
        const items = [];
        bar.segments.forEach((segment) => {
            if (segment.seriesName && segment.value > 0) {
                items.push({
                    color: segment.color,
                    label: segment.seriesName,
                    value: segment.value.toString(),
                });
            }
        });
        this.tooltipItems = items;
        this.tooltipTotal = bar.totalValue.toString();
        this.showTooltipTotal = items.length > 1;
    };
    handleColumnMove = (event) => {
        if (this.tooltipVisible) {
            this.tooltipX = event.clientX;
            this.tooltipY = event.clientY;
        }
    };
    handleColumnLeave = () => {
        this.tooltipVisible = false;
    };
    render() {
        const processedData = this.processData();
        return (h(Host, { key: 'f851ed646c231a9c1c8e6757d0a46e2d9363f942' }, h("div", { key: 'c306d4f127c52ec87b0b470286491d928b6b6337', class: {
                'bar-chart': true,
                [this.type]: true,
                [this.orientation]: true,
                'bar-chart-animated': this.animated,
            } }, this.orientation === 'vertical' ? (h("div", { class: "vertical-container" }, processedData.map((bar, i) => (h("div", { key: i, class: "bar-column vertical", onMouseEnter: (e) => this.handleColumnHover(e, bar, i), onMouseMove: this.handleColumnMove, onMouseLeave: this.handleColumnLeave }, bar.segments.map((segment, segIndex) => (h("div", { key: segIndex, class: "bar-segment vertical", style: {
                height: `${segment.height}px`,
                backgroundColor: segment.color,
            } })))))))) : (h("div", { class: "horizontal-container" }, processedData.map((bar, i) => (h("div", { key: i, class: "bar-row horizontal", onMouseEnter: (e) => this.handleColumnHover(e, bar, i), onMouseMove: this.handleColumnMove, onMouseLeave: this.handleColumnLeave }, bar.segments.map((segment, segIndex) => (h("div", { key: segIndex, class: "bar-segment horizontal", style: {
                width: `${(segment.value / bar.totalValue) * 100}%`,
                backgroundColor: segment.color,
            } }))))))))), h("bh-chart-tooltip", { key: '765ff842c48a11ec414615846f6404b642b29933', visible: this.tooltipVisible, x: this.tooltipX, y: this.tooltipY, header: this.tooltipHeader, items: this.tooltipItems, total: this.tooltipTotal, showTotal: this.showTooltipTotal })));
    }
};
BhBarChart.style = bhBarChartCss;

export { BhBarChart as bh_bar_chart };
//# sourceMappingURL=bh-bar-chart.entry.js.map
