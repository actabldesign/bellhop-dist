'use strict';

var index = require('./index-tZqSQc8E.js');

const bhTrendChartCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:inline-block}.trend-chart{position:relative;display:inline-block;width:fit-content;height:fit-content}.chart-svg{overflow:visible}@keyframes chartFadeIn{from{opacity:0;transform:translateY(10px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backgroundFill{from{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleY(1)}}.trend-chart-animated{animation:chartFadeIn 0.6s var(--animation-ease-smooth, ease-out) forwards}.trend-chart-animated .chart-line{stroke-dasharray:1000;stroke-dashoffset:1000;animation:pathDraw 1.2s var(--animation-ease-smooth, ease-out) 0.3s forwards}@keyframes pathDraw{to{stroke-dashoffset:0}}.trend-chart-animated .chart-background{transform-origin:bottom;animation:backgroundFill 0.8s var(--animation-ease-smooth, ease-out) 0.3s forwards;opacity:0}.trend-chart-animated.trend-chart-line-only .chart-line{animation:pathDrawSlow 4s var(--animation-ease-smooth, ease-out) 0.3s forwards}@keyframes pathDrawSlow{to{stroke-dashoffset:0}}.trend-chart:not(.trend-chart-animated) .chart-line{stroke-dasharray:none}.trend-chart:not(.trend-chart-animated) .chart-background{opacity:1}@media (prefers-reduced-motion: reduce){.trend-chart-animated,.trend-chart-animated .chart-line,.trend-chart-animated .chart-background{animation:none;opacity:1;transform:none;stroke-dasharray:none}}";

const BhTrendChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The trend direction (affects color)
     */
    trend = 'positive';
    /**
     * Data points for the chart
     */
    data = [20, 45, 30, 60, 35, 70, 40];
    /**
     * Whether to animate the chart
     */
    animated = true;
    /**
     * Chart variant: line-only, fill-only, or line-fill
     */
    variant = 'line-only';
    /**
     * Width of the chart in pixels
     */
    width = 112;
    /**
     * Height of the chart in pixels
     */
    height = 56;
    normalizeData() {
        const maxValue = Math.max(...this.data);
        const minValue = Math.min(...this.data);
        const range = maxValue - minValue || 1;
        return this.data.map((value, index) => ({
            x: (index / (this.data.length - 1)) * this.width,
            y: this.height - ((value - minValue) / range) * (this.height - 20) - 10,
        }));
    }
    generatePath(points) {
        if (points.length < 2)
            return '';
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            const tension = 0.5;
            const cp1x = prev.x + (curr.x - prev.x) * tension;
            const cp1y = prev.y;
            const cp2x = curr.x - (curr.x - prev.x) * tension;
            const cp2y = curr.y;
            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
        }
        return path;
    }
    generateBackgroundPath(points) {
        if (points.length < 2)
            return '';
        let path = `M ${points[0].x} ${this.height}`;
        path += ` L ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            const tension = 0.5;
            const cp1x = prev.x + (curr.x - prev.x) * tension;
            const cp1y = prev.y;
            const cp2x = curr.x - (curr.x - prev.x) * tension;
            const cp2y = curr.y;
            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
        }
        path += ` L ${points[points.length - 1].x} ${this.height}`;
        path += ' Z';
        return path;
    }
    getStrokeColor() {
        switch (this.trend) {
            case 'positive':
                return 'var(--color-success-500)';
            case 'negative':
                return 'var(--color-error-500)';
            case 'neutral':
                return 'var(--color-neutral-500)';
            default:
                return 'var(--color-neutral-500)';
        }
    }
    getFillColor() {
        switch (this.trend) {
            case 'positive':
                return 'var(--color-success-600)';
            case 'negative':
                return 'var(--color-error-600)';
            case 'neutral':
                return 'var(--color-neutral-600)';
            default:
                return 'var(--color-neutral-600)';
        }
    }
    render() {
        const points = this.normalizeData();
        const pathData = this.generatePath(points);
        const backgroundPath = this.variant !== 'line-only' ? this.generateBackgroundPath(points) : '';
        const strokeColor = this.getStrokeColor();
        const fillColor = this.getFillColor();
        const gradientId = `gradient-${this.trend}`;
        return (index.h(index.Host, { key: '0ce9235d0b67696eb5e5eb13bdfc80633e2f5a09' }, index.h("div", { key: 'f8142d9b08c84c330afc375c7dd870be7d561116', class: {
                'trend-chart': true,
                [`trend-chart-${this.trend}`]: true,
                [`trend-chart-${this.variant}`]: true,
                'trend-chart-animated': this.animated,
            } }, index.h("svg", { key: '80ecc5b120ab8adeea6ad0f66c82d43bff7510ae', width: this.width, height: this.height, viewBox: `0 0 ${this.width} ${this.height}`, class: "chart-svg" }, index.h("defs", { key: 'e662d21fc9813679530c7ae4c533bcf79985fc32' }, index.h("linearGradient", { key: '4c5f68791672c1cc639db2fe1eff407ecdbc3019', id: gradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, index.h("stop", { key: '15f6c5706518d1adf8e84f3c9736d9f37d1b0c3e', offset: "0%", "stop-color": fillColor, "stop-opacity": this.variant === 'fill-only' ? 0.4 : 0.2 }), index.h("stop", { key: '9b90e1919b241be8a5d6a160ce250cb205967d49', offset: "100%", "stop-color": fillColor, "stop-opacity": this.variant === 'fill-only' ? 0.1 : 0.05 }))), backgroundPath && this.variant !== 'line-only' && (index.h("path", { key: 'c27880c30f92abb5240c401b35e1af3b62039318', class: "chart-background", d: backgroundPath, fill: `url(#${gradientId})` })), pathData && this.variant !== 'fill-only' && (index.h("path", { key: '2f64a03e170a7a1f792fe835d2a870dd64905fd9', class: "chart-line", d: pathData, stroke: strokeColor, "stroke-width": "2", fill: "none" }))))));
    }
};
BhTrendChart.style = bhTrendChartCss;

exports.bh_trend_chart = BhTrendChart;
//# sourceMappingURL=bh-trend-chart.entry.cjs.js.map
