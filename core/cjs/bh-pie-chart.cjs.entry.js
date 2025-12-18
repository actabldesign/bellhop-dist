'use strict';

var index = require('./index-DQwSUT6k.js');

const bhPieChartCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:inline-block}.pie-chart-container{display:inline-block;width:160px;height:160px;overflow:visible}.pie-chart-svg{width:100%;height:100%;overflow:visible}.pie-segment{cursor:pointer;transition:opacity var(--animation-duration-fast, 0.1s) var(--animation-ease-smooth, ease);transform-origin:80px 80px}.pie-segment.animated{opacity:0;transform:scale(0.3) rotate(-180deg);animation:pieSliceReveal 0.8s var(--animation-ease-enter, ease-out) forwards}.pie-segment:hover{opacity:0.85;transform:scale(1.05);filter:brightness(1.1);transition:all var(--animation-duration-fast, 0.1s) var(--animation-ease-smooth, ease)}.pie-background{pointer-events:none}.pie-inner-hole{pointer-events:none}.pie-segment-group{pointer-events:auto}@keyframes pieSliceReveal{0%{opacity:0;transform:scale(0.3) rotate(-180deg)}15%{opacity:0.2;transform:scale(0.45) rotate(-135deg)}30%{opacity:0.5;transform:scale(0.7) rotate(-70deg)}45%{opacity:0.7;transform:scale(0.9) rotate(-25deg)}60%{opacity:0.85;transform:scale(1.05) rotate(-8deg)}80%{opacity:0.95;transform:scale(1.01) rotate(-1deg)}100%{opacity:1;transform:scale(1) rotate(0deg)}}@media (prefers-reduced-motion: reduce){.pie-segment.animated{animation:none;opacity:1;transform:none}}";

const DEFAULT_COLORS = [
    '#2642CF', // Blue
    '#8E4B9B', // Purple
    '#BB81BA', // Light Purple
    '#E14C94', // Pink
    '#E47789', // Coral
    '#E9AAAE', // Light Coral
    '#BACEFC', // Light Blue
];
const BhPieChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Chart data containing series
     */
    data = {
        series: [
            { name: 'Series 1', value: 30, color: '#2642CF' },
            { name: 'Series 2', value: 25, color: '#8E4B9B' },
            { name: 'Series 3', value: 20, color: '#BB81BA' },
            { name: 'Series 4', value: 15, color: '#E14C94' },
            { name: 'Series 5', value: 10, color: '#E47789' },
        ],
    };
    /**
     * Size of the donut hole
     */
    hole = 'none';
    /**
     * Size of the chart in pixels
     */
    size = 160;
    /**
     * Whether to animate the chart
     */
    animated = true;
    /**
     * Gap between segments in degrees
     */
    gap = 0;
    tooltipVisible = false;
    tooltipX = 0;
    tooltipY = 0;
    tooltipSegment = null;
    getInnerRadius() {
        switch (this.hole) {
            case '25%':
                return 20;
            case '50%':
                return 40;
            case '75%':
                return 60;
            case '85%':
                return 68;
            default:
                return 0;
        }
    }
    createArcPath(centerX, centerY, outerRadius, innerRadius, startAngle, endAngle) {
        const startAngleRad = (startAngle * Math.PI) / 180;
        const endAngleRad = (endAngle * Math.PI) / 180;
        const outerStartX = centerX + outerRadius * Math.cos(startAngleRad);
        const outerStartY = centerY + outerRadius * Math.sin(startAngleRad);
        const outerEndX = centerX + outerRadius * Math.cos(endAngleRad);
        const outerEndY = centerY + outerRadius * Math.sin(endAngleRad);
        const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
        if (innerRadius === 0) {
            return [
                'M', centerX, centerY,
                'L', outerStartX, outerStartY,
                'A', outerRadius, outerRadius, 0, largeArcFlag, 1, outerEndX, outerEndY,
                'Z',
            ].join(' ');
        }
        else {
            const innerStartX = centerX + innerRadius * Math.cos(startAngleRad);
            const innerStartY = centerY + innerRadius * Math.sin(startAngleRad);
            const innerEndX = centerX + innerRadius * Math.cos(endAngleRad);
            const innerEndY = centerY + innerRadius * Math.sin(endAngleRad);
            return [
                'M', outerStartX, outerStartY,
                'A', outerRadius, outerRadius, 0, largeArcFlag, 1, outerEndX, outerEndY,
                'L', innerEndX, innerEndY,
                'A', innerRadius, innerRadius, 0, largeArcFlag, 0, innerStartX, innerStartY,
                'Z',
            ].join(' ');
        }
    }
    getSegments() {
        if (!this.data.series?.length) {
            return [];
        }
        const total = this.data.series.reduce((sum, item) => sum + item.value, 0);
        if (total === 0) {
            return [];
        }
        const segments = [];
        let currentAngle = -90;
        const radius = 80;
        const centerX = 80;
        const centerY = 80;
        const innerRadius = this.getInnerRadius();
        const totalGaps = this.data.series.length * this.gap;
        const availableAngle = 360 - totalGaps;
        this.data.series.forEach((item, index) => {
            const percentage = (item.value / total) * 100;
            const angleSize = (item.value / total) * availableAngle;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angleSize;
            const path = this.createArcPath(centerX, centerY, radius, innerRadius, startAngle, endAngle);
            segments.push({
                value: item.value,
                percentage,
                startAngle,
                endAngle,
                color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
                name: item.name,
                path,
            });
            currentAngle = endAngle + this.gap;
        });
        return segments;
    }
    handleSegmentHover = (event, segment) => {
        this.tooltipVisible = true;
        this.tooltipX = event.clientX;
        this.tooltipY = event.clientY;
        this.tooltipSegment = segment;
    };
    handleSegmentLeave = () => {
        this.tooltipVisible = false;
    };
    render() {
        const segments = this.getSegments();
        const innerRadius = this.getInnerRadius();
        return (index.h(index.Host, { key: 'b0778f7ed499f578b25907f73be6e7ddbbd9fa17' }, index.h("div", { key: '440259b95d6e65282452619ee2a0cfc890f45443', class: "pie-chart-container", style: { width: `${this.size}px`, height: `${this.size}px` } }, index.h("svg", { key: '183c562c5a65095667964dc5a80b84fdf28d7704', width: this.size, height: this.size, viewBox: "0 0 160 160", class: "pie-chart-svg" }, index.h("circle", { key: '1afac01e292252211943372018476565dabefbb2', cx: "80", cy: "80", r: "80", fill: "transparent", class: "pie-background" }), segments.map((segment, index$1) => (index.h("g", { key: index$1, class: "pie-segment-group" }, index.h("path", { d: segment.path, fill: segment.color, class: { 'pie-segment': true, animated: this.animated }, style: { animationDelay: this.animated ? `${index$1 * 0.03}s` : '0s' }, onMouseEnter: (e) => this.handleSegmentHover(e, segment), onMouseLeave: this.handleSegmentLeave })))), this.hole !== 'none' && (index.h("circle", { key: 'bb64355e6be750e413926fca053c2bc100aa821e', cx: "80", cy: "80", r: innerRadius, fill: "white", class: "pie-inner-hole" })))), index.h("bh-chart-tooltip", { key: '1760b14f54066a4ae146e9802a9888e7f44bce19', visible: this.tooltipVisible, x: this.tooltipX, y: this.tooltipY, items: this.tooltipSegment
                ? [
                    {
                        label: this.tooltipSegment.name,
                        value: `${this.tooltipSegment.percentage.toFixed(0)}%`,
                        color: this.tooltipSegment.color,
                    },
                ]
                : [] })));
    }
};
BhPieChart.style = bhPieChartCss;

exports.bh_pie_chart = BhPieChart;
//# sourceMappingURL=bh-pie-chart.entry.cjs.js.map
