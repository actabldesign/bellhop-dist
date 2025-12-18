import { h, Host } from "@stencil/core";
export class BhTrendChart {
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
        return (h(Host, { key: '91f405355ae70923836b9d9e102cbe65421bef39' }, h("div", { key: '9f90f66d9ed904c74e1eb7fd2732ad3d32837eff', class: {
                'trend-chart': true,
                [`trend-chart-${this.trend}`]: true,
                [`trend-chart-${this.variant}`]: true,
                'trend-chart-animated': this.animated,
            } }, h("svg", { key: '09ac67cf6b1d2e86f1551cc519963fcd826293b5', width: this.width, height: this.height, viewBox: `0 0 ${this.width} ${this.height}`, class: "chart-svg" }, h("defs", { key: 'cf3cfe308c1582c27798e2a2b63dd37a9f9452c8' }, h("linearGradient", { key: '805e2c9765638b0f872871df8444784297b8d7a1', id: gradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, h("stop", { key: '88b695ba07624d062cead0dfea06e984b742bc82', offset: "0%", "stop-color": fillColor, "stop-opacity": this.variant === 'fill-only' ? 0.4 : 0.2 }), h("stop", { key: 'b8e060f9d822042766647ae602121d2fd7e1fa8d', offset: "100%", "stop-color": fillColor, "stop-opacity": this.variant === 'fill-only' ? 0.1 : 0.05 }))), backgroundPath && this.variant !== 'line-only' && (h("path", { key: '1866ab67357c0c2fe4c4cda0c0a571a8a0493af4', class: "chart-background", d: backgroundPath, fill: `url(#${gradientId})` })), pathData && this.variant !== 'fill-only' && (h("path", { key: '687052b87f652430caae40ac126b69cd2f30e9bc', class: "chart-line", d: pathData, stroke: strokeColor, "stroke-width": "2", fill: "none" }))))));
    }
    static get is() { return "bh-trend-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-trend-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-trend-chart.css"]
        };
    }
    static get properties() {
        return {
            "trend": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TrendDirection",
                    "resolved": "\"negative\" | \"neutral\" | \"positive\"",
                    "references": {
                        "TrendDirection": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-trend-chart/bh-trend-chart.tsx",
                            "id": "src/components/bh-trend-chart/bh-trend-chart.tsx::TrendDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The trend direction (affects color)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trend",
                "defaultValue": "'positive'"
            },
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Data points for the chart"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[20, 45, 30, 60, 35, 70, 40]"
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
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TrendVariant",
                    "resolved": "\"fill-only\" | \"line-fill\" | \"line-only\"",
                    "references": {
                        "TrendVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-trend-chart/bh-trend-chart.tsx",
                            "id": "src/components/bh-trend-chart/bh-trend-chart.tsx::TrendVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Chart variant: line-only, fill-only, or line-fill"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'line-only'"
            },
            "width": {
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
                    "text": "Width of the chart in pixels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "112"
            },
            "height": {
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
                    "text": "Height of the chart in pixels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "56"
            }
        };
    }
}
//# sourceMappingURL=bh-trend-chart.js.map
