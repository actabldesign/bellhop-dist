import { h, Host } from "@stencil/core";
const DEFAULT_COLORS = [
    '#2642CF', // Blue
    '#8E4B9B', // Purple
    '#BB81BA', // Light Purple
    '#E14C94', // Pink
    '#E47789', // Coral
    '#E9AAAE', // Light Coral
    '#BACEFC', // Light Blue
];
export class BhPieChart {
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
        return (h(Host, { key: 'b0778f7ed499f578b25907f73be6e7ddbbd9fa17' }, h("div", { key: '440259b95d6e65282452619ee2a0cfc890f45443', class: "pie-chart-container", style: { width: `${this.size}px`, height: `${this.size}px` } }, h("svg", { key: '183c562c5a65095667964dc5a80b84fdf28d7704', width: this.size, height: this.size, viewBox: "0 0 160 160", class: "pie-chart-svg" }, h("circle", { key: '1afac01e292252211943372018476565dabefbb2', cx: "80", cy: "80", r: "80", fill: "transparent", class: "pie-background" }), segments.map((segment, index) => (h("g", { key: index, class: "pie-segment-group" }, h("path", { d: segment.path, fill: segment.color, class: { 'pie-segment': true, animated: this.animated }, style: { animationDelay: this.animated ? `${index * 0.03}s` : '0s' }, onMouseEnter: (e) => this.handleSegmentHover(e, segment), onMouseLeave: this.handleSegmentLeave })))), this.hole !== 'none' && (h("circle", { key: 'bb64355e6be750e413926fca053c2bc100aa821e', cx: "80", cy: "80", r: innerRadius, fill: "white", class: "pie-inner-hole" })))), h("bh-chart-tooltip", { key: '1760b14f54066a4ae146e9802a9888e7f44bce19', visible: this.tooltipVisible, x: this.tooltipX, y: this.tooltipY, items: this.tooltipSegment
                ? [
                    {
                        label: this.tooltipSegment.name,
                        value: `${this.tooltipSegment.percentage.toFixed(0)}%`,
                        color: this.tooltipSegment.color,
                    },
                ]
                : [] })));
    }
    static get is() { return "bh-pie-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-pie-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-pie-chart.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PieChartData",
                    "resolved": "PieChartData",
                    "references": {
                        "PieChartData": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-pie-chart/bh-pie-chart.tsx",
                            "id": "src/components/bh-pie-chart/bh-pie-chart.tsx::PieChartData"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Chart data containing series"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    series: [\n      { name: 'Series 1', value: 30, color: '#2642CF' },\n      { name: 'Series 2', value: 25, color: '#8E4B9B' },\n      { name: 'Series 3', value: 20, color: '#BB81BA' },\n      { name: 'Series 4', value: 15, color: '#E14C94' },\n      { name: 'Series 5', value: 10, color: '#E47789' },\n    ],\n  }"
            },
            "hole": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PieChartHole",
                    "resolved": "\"25%\" | \"50%\" | \"75%\" | \"85%\" | \"none\"",
                    "references": {
                        "PieChartHole": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-pie-chart/bh-pie-chart.tsx",
                            "id": "src/components/bh-pie-chart/bh-pie-chart.tsx::PieChartHole"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the donut hole"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hole",
                "defaultValue": "'none'"
            },
            "size": {
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
                    "text": "Size of the chart in pixels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "160"
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
            "gap": {
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
                    "text": "Gap between segments in degrees"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "gap",
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "tooltipVisible": {},
            "tooltipX": {},
            "tooltipY": {},
            "tooltipSegment": {}
        };
    }
}
//# sourceMappingURL=bh-pie-chart.js.map
