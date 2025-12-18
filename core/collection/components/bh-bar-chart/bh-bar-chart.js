import { h, Host } from "@stencil/core";
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
export class BhBarChart {
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
    static get is() { return "bh-bar-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-bar-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-bar-chart.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BarChartData",
                    "resolved": "BarChartData",
                    "references": {
                        "BarChartData": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-bar-chart/bh-bar-chart.tsx",
                            "id": "src/components/bh-bar-chart/bh-bar-chart.tsx::BarChartData"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Chart data"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    series: [\n      { name: 'Series 1', values: [30, 45, 20, 35, 50, 40, 60, 35, 25, 55, 40], color: '#94a3b8' },\n      { name: 'Series 2', values: [20, 25, 40, 30, 35, 45, 25, 30, 40, 20, 50], color: '#2563eb' },\n      { name: 'Series 3', values: [25, 15, 35, 20, 15, 20, 30, 25, 30, 35, 25], color: '#7c3aed' },\n    ],\n  }"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BarChartType",
                    "resolved": "\"simple\" | \"stacked\"",
                    "references": {
                        "BarChartType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-bar-chart/bh-bar-chart.tsx",
                            "id": "src/components/bh-bar-chart/bh-bar-chart.tsx::BarChartType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Chart type: simple or stacked"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'stacked'"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BarChartOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "BarChartOrientation": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-bar-chart/bh-bar-chart.tsx",
                            "id": "src/components/bh-bar-chart/bh-bar-chart.tsx::BarChartOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Chart orientation: vertical or horizontal"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "orientation",
                "defaultValue": "'vertical'"
            },
            "animated": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to animate the chart"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "animated",
                "defaultValue": "true"
            },
            "maxHeight": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum height for vertical bars"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height",
                "defaultValue": "150"
            },
            "maxWidth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum width for horizontal bars"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-width",
                "defaultValue": "200"
            }
        };
    }
    static get states() {
        return {
            "tooltipVisible": {},
            "tooltipX": {},
            "tooltipY": {},
            "tooltipHeader": {},
            "tooltipItems": {},
            "tooltipTotal": {},
            "showTooltipTotal": {}
        };
    }
}
//# sourceMappingURL=bh-bar-chart.js.map
